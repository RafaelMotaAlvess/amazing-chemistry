import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { useNotification, useWorkspace } from '../../hooks';
import {
  badgeWrapper,
  container,
  content,
  minusButton,
  badge,
  badgeSelections,
  atomicNumber as atomicNumberStyle,
  button as buttonStyle,
  symbol as symbolStyle,
} from './styles.css';
import { Icon } from '../Icon';

interface AtomCardProps {
  symbol: string;
  name: string;
  atomicNumber: number;
  amount?: number;
  isLocked?: boolean;
  isDraggable?: boolean;
}

export function AtomCard({
  symbol,
  name,
  atomicNumber,
  amount = 1,
  isLocked,
  isDraggable,
}: AtomCardProps) {
  const [selections, setSelections] = useState<number>(amount);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const { isNotification } = useNotification();
  const { addWorkspaceItem } = useWorkspace();

  const onSelection = useCallback(() => {
    if (isLocked) return;

    const MAX_SELECTIONS = 100;
    setSelections(selection =>
      selection === MAX_SELECTIONS ? selection : selection + 1
    );
  }, [isLocked]);

  const onDecrement = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (isLocked) return;

      setSelections(selection => (selection > 1 ? selection - 1 : 1));
    },
    [isLocked]
  );

  const onPutWorkspace = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();

      if (isLocked || !buttonRef.current) return;

      const { x, y } = buttonRef.current.getBoundingClientRect();
      addWorkspaceItem({
        atomicNumber,
        amount: selections,
        position: { x, y },
      });
    },
    [isLocked, atomicNumber, selections, addWorkspaceItem]
  );

  useEffect(() => {
    if (isNotification) setSelections(1);
  }, [isNotification]);

  return (
    <div className={container}>
      <button
        type='button'
        ref={buttonRef}
        title={name}
        draggable={!isLocked}
        className={buttonStyle}
        onClick={onSelection}
        onContextMenu={onPutWorkspace}
      >
        {selections > 1 && (
          <div className={badgeWrapper}>
            <div className={badge}>
              <p className={badgeSelections}>{selections}</p>
            </div>
          </div>
        )}

        <div className={content}>
          <span className={symbolStyle}>{symbol}</span>
          <span>{name}</span>
        </div>
        <span className={atomicNumberStyle}>{atomicNumber}</span>
      </button>

      {selections > 1 && !isDraggable && (
        <button type='button' className={minusButton} onClick={onDecrement}>
          <Icon name='minus' size={14} />
        </button>
      )}
    </div>
  );
}
