import { useCallback, useState } from 'react';
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
}

export function AtomCard({ symbol, name, atomicNumber }: AtomCardProps) {
  const [selections, setSelections] = useState<number>(1);

  const onSelection = useCallback(() => {
    const MAX_SELECTIONS = 100;
    setSelections(selection =>
      selection === MAX_SELECTIONS ? selection : selection + 1
    );
  }, []);

  const decrementSelection = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
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
