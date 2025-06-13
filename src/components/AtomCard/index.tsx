import {
  container,
  content,
  symbol as symbolStyle,
  atomicNumber as atomicNumberStyle,
} from './styles.css';

interface AtomCardProps {
  symbol: string;
  name: string;
  atomicNumber: number;
}

export function AtomCard({ symbol, name, atomicNumber }: AtomCardProps) {
  return (
    <button type='button' className={container} title={name}>
      <div className={content}>
        <span className={symbolStyle}>{symbol}</span>
        <span>{name}</span>
      </div>
      <span className={atomicNumberStyle}>{atomicNumber}</span>
    </button>
  );
}
