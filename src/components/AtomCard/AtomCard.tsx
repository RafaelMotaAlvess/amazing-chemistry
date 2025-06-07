import { container, content, symbol as symbolStyle, atomicNumber as atomicNumberStyle } from "./styles.css";

type AtomCardProps = {
  symbol: string;
  name: string;
  atomicNumber: number;
};

export function AtomCard({ symbol, name, atomicNumber }: AtomCardProps) {
  return (
    <div className={container}>
      <div className={content}>
        <span className={symbolStyle}>{symbol}</span>
        <span>{name}</span>
      </div>
      <span className={atomicNumberStyle}>{atomicNumber}</span>
    </div>
  );
}
