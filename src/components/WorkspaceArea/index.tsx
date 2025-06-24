import { useCallback, useEffect, useMemo } from 'react';
import { Rnd, type DraggableData, type RndDragEvent } from 'react-rnd';
import { isEqual } from 'lodash';
import {
  elements,
  recipes,
  type ElementProps,
  type RecipeProps,
} from '../../dataset';
import {
  useNotification,
  useRecipes,
  useWorkspace,
  type WorkspaceItem,
} from '../../hooks';
import { AtomCard } from '../AtomCard';
import { container, draggableItem } from './styles.css';

const ATOM_CARD_SIZE = 92;

const elementsByAtomicNumber = elements.reduce(
  (acc: Record<number, ElementProps>, element) => {
    acc[element.atomicNumber] = element;
    return acc;
  },
  {}
);

export function WorkspaceArea() {
  const { launchNotification } = useNotification();
  const { addRecipe } = useRecipes();
  const { workspaceItems, updatePosition, removeWorkspaceItem } =
    useWorkspace();

  const isOverlapping = useCallback(
    (rect1: WorkspaceItem, rect2: WorkspaceItem) =>
      !(
        rect1.position.x + ATOM_CARD_SIZE < rect2.position.x ||
        rect2.position.x + ATOM_CARD_SIZE < rect1.position.x ||
        rect1.position.y + ATOM_CARD_SIZE < rect2.position.y ||
        rect2.position.y + ATOM_CARD_SIZE < rect1.position.y
      ),
    []
  );

  const onJoinElements = useCallback(
    (overlapsElements: [WorkspaceItem, WorkspaceItem][]) => {
      overlapsElements.forEach(([elementTarget, elementOverlap]) => {
        const firstElement = elements.find(
          element => element.atomicNumber === elementTarget.atomicNumber
        );
        const secondElement = elements.find(
          element => element.atomicNumber === elementOverlap.atomicNumber
        );

        if (!firstElement || !secondElement) return;

        const firstSymbols = Array(elementTarget.amount)
          .fill(0)
          .map(() => firstElement.symbol);
        const secondSymbols = Array(elementOverlap.amount)
          .fill(0)
          .map(() => secondElement.symbol);

        const joinedSymbols = [...firstSymbols, ...secondSymbols].sort((a, b) =>
          a.localeCompare(b)
        );

        const recipe = recipes.find(recipe =>
          isEqual(recipe.inputs, joinedSymbols)
        );

        if (recipe) {
          removeWorkspaceItem(elementTarget.id);
          removeWorkspaceItem(elementOverlap.id);

          addRecipe(recipe as RecipeProps);
          launchNotification();
        }
      });
    },
    [removeWorkspaceItem, addRecipe, launchNotification]
  );

  const onDragStop = useCallback(
    (id: number, _: RndDragEvent, data: DraggableData) => {
      const { x, y } = data;

      updatePosition(id, { x, y });
    },
    [updatePosition]
  );

  const renderedAtoms = useMemo(() => {
    return workspaceItems.map(item => {
      const { id, atomicNumber, amount, position } = item;
      const { name, symbol } = elementsByAtomicNumber[atomicNumber];

      return (
        <Rnd
          bounds='#workspace-area'
          key={id}
          className={draggableItem}
          position={position}
          enableUserSelectHack={false}
          enableResizing={false}
          onDragStop={(event, data) => onDragStop(id, event, data)}
        >
          <AtomCard
            symbol={symbol}
            name={name}
            atomicNumber={atomicNumber}
            amount={amount}
            isLocked
          />
        </Rnd>
      );
    });
  }, [workspaceItems, onDragStop]);

  useEffect(() => {
    const overlaps: [WorkspaceItem, WorkspaceItem][] = [];

    for (let i = 0; i < workspaceItems.length; i++) {
      for (let j = i + 1; j < workspaceItems.length; j++) {
        if (isOverlapping(workspaceItems[i], workspaceItems[j])) {
          overlaps.push([workspaceItems[i], workspaceItems[j]]);
        }
      }
    }

    onJoinElements(overlaps);
  }, [workspaceItems, isOverlapping, onJoinElements]);

  return (
    <div id='workspace-area' className={container}>
      {renderedAtoms}
    </div>
  );
}
