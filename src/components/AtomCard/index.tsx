import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { useNotification, useWorkspace } from '../../hooks';
import { Badge } from '../Badge';
import {
  atomicNumber as atomicNumberStyle,
  badgeWrapper,
  container,
  content,
  symbol as symbolStyle,
} from './styles.css';

interface AtomCardProps {
  symbol: string;
  name: string;
  atomicNumber: number;
  amount?: number;
  isLocked?: boolean;
}

export function AtomCard({
  symbol,
  name,
  atomicNumber,
  amount = 1,
  isLocked,
}: AtomCardProps) {
  const [selections, setSelections] = useState<number>(amount);

  const cardButton = useRef<HTMLButtonElement>(null);

  const { isNotification } = useNotification();
  const { addWorkspaceItem } = useWorkspace();

  const onSelection = useCallback(() => {
    if (isLocked) return;
    const MAX_SELECTIONS = 100;
    setSelections(selection =>
      selection === MAX_SELECTIONS ? selection : selection + 1
    );
  }, [isLocked]);

  const decrementSelection = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (isLocked) return;

      setSelections(selection => (selection > 1 ? selection - 1 : 1));
    },
    [isLocked]
  );

  const onDragStart = useCallback(() => {
    if (isLocked) return;

    const { x = 0, y = 0 } = cardButton.current?.getBoundingClientRect() ?? {};
    addWorkspaceItem({
      atomicNumber,
      amount: selections,
      position: { x, y },
    });
  }, [isLocked, atomicNumber, selections, addWorkspaceItem]);

  useEffect(() => {
    if (isNotification) setSelections(1);
  }, [isNotification]);

  return (
    <button
      type='button'
      ref={cardButton}
      title={name}
      className={container}
      onClick={onSelection}
      onContextMenu={decrementSelection}
      draggable={!isLocked}
      onDragStart={onDragStart}
    >
      <div className={badgeWrapper}>
        <Badge clicks={selections} />
      </div>

      <div className={content}>
        <span className={symbolStyle}>{symbol}</span>
        <span>{name}</span>
      </div>
      <span className={atomicNumberStyle}>{atomicNumber}</span>
    </button>
  );
}
