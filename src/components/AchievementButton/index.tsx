import { Icon } from '../Icon';
import { container } from './style.css';

export function AchievementButton() {
  return (
    <button type='button' className={container}>
      <Icon name='trophy' size={36} />
    </button>
  );
}
