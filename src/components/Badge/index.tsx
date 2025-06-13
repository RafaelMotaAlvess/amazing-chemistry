import { container, selections } from './styles.css';

interface BadgeProps {
  clicks: number;
}

export function Badge({ clicks = 0 }: BadgeProps) {
  return clicks > 1 ? (
    <div className={container}>{<p className={selections}>{clicks}</p>}</div>
  ) : null;
}
