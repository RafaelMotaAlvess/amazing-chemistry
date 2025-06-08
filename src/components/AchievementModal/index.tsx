import ReactModal from 'react-modal';
import type { PropsWithChildren } from 'react';
import { useModal } from '../../hooks';
import {
  achievements,
  closeButton,
  container,
  content,
  overlay,
  title,
} from './styles.css';
import { Icon } from '../Icon';

interface AchievementModalProps extends Required<PropsWithChildren> {
  onClose?: () => void;
}

export function AchievementModal({ children, onClose }: AchievementModalProps) {
  const { isOpen, onClose: onCloseModal } = useModal();

  function handleClose(): void {
    onClose?.();
    onCloseModal();
  }

  return (
    <ReactModal
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName={overlay}
      className={container}
    >
      <div className={content}>
        <button
          type='button'
          title='Fechar'
          className={closeButton}
          onClick={handleClose}
        >
          <Icon name='close' />
        </button>

        <h3 className={title}>Sua coleção química</h3>

        <div className={achievements}>{children}</div>
      </div>
    </ReactModal>
  );
}
