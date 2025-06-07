import { useEffect, useRef } from 'react';
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

  const isFirstRender = useRef<boolean>(true);

  const expand = isNotification ? containerExpanded : containerContracted;

  useEffect(() => {
    if (isFirstRender.current) isFirstRender.current = false;
  }, []);

  return (
    <div className={`${container} ${expand}`} onClick={onClick}>
      <button type='button' className={button}>
        <Icon name='trophy' size={36} />
      </button>

      {!isFirstRender.current && (
        <div className={messageWrapper}>
          <p className={message}>Você desbloqueou um novo elemento químico!</p>
        </div>
      )}
    </div>
  );
}
