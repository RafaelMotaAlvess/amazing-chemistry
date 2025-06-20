import { useMemo } from 'react';
import { Rnd } from 'react-rnd';
import { elements, type ElementProps } from '../../dataset';
import { useWorkspace } from '../../hooks';
import { AtomCard } from '../AtomCard';
import { container, draggableItem } from './styles.css';

const elementsByAtomicNumber = elements.reduce(
  (acc: Record<number, ElementProps>, element) => {
    acc[element.atomicNumber] = element;
    return acc;
  },
  {}
);

export function WorkspaceArea() {
  const { workspaceItems, updatePosition } = useWorkspace();

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
          onDragStop={(_, { x, y }) => updatePosition(id, { x, y })}
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
  }, [updatePosition, workspaceItems]);

  return (
    <div id='workspace-area' className={container}>
      {renderedAtoms}
    </div>
  );
}
