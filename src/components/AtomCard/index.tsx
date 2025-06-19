import { useCallback, useState, type MouseEvent } from 'react';
import {
  container,
  content,
  symbol as symbolStyle,
  atomicNumber as atomicNumberStyle,
  badgeWrapper,
} from './styles.css';
import { Badge } from '../Badge';

interface AtomCardProps {
  symbol: string;
  name: string;
  atomicNumber: number;
  amount?: number;
}

export function AtomCard({
  symbol,
  name,
  atomicNumber,
  amount = 1,
}: AtomCardProps) {
  const [selections, setSelections] = useState<number>(amount);

  const onSelection = useCallback(() => {
    const MAX_SELECTIONS = 100;
    setSelections(selection =>
      selection === MAX_SELECTIONS ? selection : selection + 1
    );
  }, []);

  const decrementSelection = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setSelections(selection => (selection > 1 ? selection - 1 : 1));
  }, []);

  return (
    <button
      type='button'
      title={name}
      className={container}
      onClick={onSelection}
      onContextMenu={decrementSelection}
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
