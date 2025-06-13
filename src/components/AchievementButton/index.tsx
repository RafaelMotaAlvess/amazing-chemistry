import { useNotification } from '../../hooks';
import { Icon } from '../Icon';
import {
  button,
  container,
  containerContracted,
  containerExpanded,
  message,
  messageWrapper,
} from './style.css';

interface AchievementButtonProps {
  onClick?: () => void;
}

export function AchievementButton({ onClick }: AchievementButtonProps) {
  const { isNotification } = useNotification();

  const expand = isNotification ? containerExpanded : containerContracted;

  return (
    <div className={`${container} ${expand}`} onClick={onClick}>
      <button type='button' className={button}>
        <Icon name='trophy' size={36} />
      </button>

        <div className={messageWrapper}>
          <p className={message}>Você desbloqueou um novo elemento químico!</p>
        </div>
    </div>
  );
}
