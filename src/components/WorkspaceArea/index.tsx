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
  useSidebar,
  useWorkspace,
  type WorkspaceItem,
} from '../../hooks';
import { AtomCard } from '../AtomCard';
import { container, draggableItem } from './styles.css';

interface JoinElementsProps {
  currentRecipes: WorkspaceItem[][];
  itemIds: number[];
}

const ATOM_CARD_SIZE = 92;

const elementsByAtomicNumber = elements.reduce(
  (acc: Record<number, ElementProps>, element) => {
    acc[element.atomicNumber] = element;
    return acc;
  },
  {}
);

function getCurrentRecipesFromOverlaps(
  overlapsElements: [WorkspaceItem, WorkspaceItem][]
) {
  const recipeSets = overlapsElements.reduce(
    (acc: Array<Set<WorkspaceItem>>, [item1, item2]) => {
      const existingRecipe = acc.find(
        recipe => recipe.has(item1) || recipe.has(item2)
      );

      if (existingRecipe) {
        existingRecipe.add(item1);
        existingRecipe.add(item2);
      } else {
        acc.push(new Set([item1, item2]));
      }
      return acc;
    },
    []
  );

  const itemIds: number[] = [];

  const normalizedRecipes = recipeSets.map(recipeSet =>
    Array.from(recipeSet).reduce((acc: WorkspaceItem[], item) => {
      const existingElement = acc.find(
        element => element.atomicNumber === item.atomicNumber
      );

      if (existingElement) {
        existingElement.amount += item.amount;
      } else {
        acc.push(structuredClone(item));
      }

      itemIds.push(item.id);

      return acc;
    }, [])
  );

  return { currentRecipes: normalizedRecipes, itemIds };
}

export function WorkspaceArea() {
  const { launchNotification } = useNotification();
  const { addRecipe } = useRecipes();
  const { isOpen: isSidebarOpen } = useSidebar();
  const { workspaceItems, updatePosition, removeWorkspaceItem } =
    useWorkspace();

  const isOverlapping = useCallback(
    (rect1: WorkspaceItem, rect2: WorkspaceItem) =>
      rect1.position.x + ATOM_CARD_SIZE >= rect2.position.x &&
      rect2.position.x + ATOM_CARD_SIZE >= rect1.position.x &&
      rect1.position.y + ATOM_CARD_SIZE >= rect2.position.y &&
      rect2.position.y + ATOM_CARD_SIZE >= rect1.position.y,
    []
  );

  const onJoinElements = useCallback(
    ({ currentRecipes, itemIds }: JoinElementsProps) => {
      for (const currentRecipe of currentRecipes) {
        const mappedRecipe = currentRecipe
          .map(item => ({
            atomicNumber: item.atomicNumber,
            amount: item.amount,
          }))
          .sort((a, b) => a.atomicNumber - b.atomicNumber);

        const discoveredRecipe = recipes.find(recipe =>
          isEqual(recipe.inputs, mappedRecipe)
        );

        if (discoveredRecipe) {
          itemIds.forEach(id => removeWorkspaceItem(id));

          addRecipe(discoveredRecipe as RecipeProps);
          launchNotification();
          return;
        }
      }
    },
    [removeWorkspaceItem, addRecipe, launchNotification]
  );

  const onDragStop = useCallback(
    (id: number, _: RndDragEvent, data: DraggableData) => {
      const { x, y } = data;

      if (isSidebarOpen) {
        const sidebarWidth = 472;
        const droppableAreaX = window.innerWidth - sidebarWidth;

        if (x + ATOM_CARD_SIZE / 2 > droppableAreaX) {
          removeWorkspaceItem(id);
          return;
        }
      }

      updatePosition(id, { x, y });
    },
    [isSidebarOpen, removeWorkspaceItem, updatePosition]
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
            isDraggable
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

    onJoinElements(getCurrentRecipesFromOverlaps(overlaps));
  }, [workspaceItems, isOverlapping, onJoinElements]);

  return (
    <div id='workspace-area' className={container}>
      {renderedAtoms}
    </div>
  );
}
