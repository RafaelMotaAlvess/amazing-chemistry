import { useCallback, useMemo, useRef } from 'react';
import { container, content, helpButton, horizontalBar } from './styles.css';
import { AtomCard } from '../AtomCard';
import { useSidebar } from '../../hooks';

import { elements } from '../../dataset';
import { Icon } from '../Icon';

export function Sidebar() {
  const { isOpen, onClose, onOpen } = useSidebar();

  const containerRef = useRef<HTMLElement>(null);

  const onHorizontalBarClick = useCallback(() => {
    if (isOpen) onClose();
    else onOpen();
  }, [isOpen, onClose, onOpen]);

  const renderAtoms = useMemo(
    () =>
      elements
        .sort((a, b) => a.atomicNumber - b.atomicNumber)
        .map(element => <AtomCard key={element.symbol} {...element} />),
    []
  );

  return (
    <>
      <button
        type='button'
        title='Ajuda'
        data-open={isOpen}
        className={helpButton}
      >
        <Icon name='question-mark' />
      </button>

      <aside ref={containerRef} className={container} data-open={isOpen}>
        <div className={content}>{renderAtoms}</div>
      </aside>

      <button
        type='button'
        data-open={isOpen}
        title={isOpen ? 'Fechar' : 'Abrir'}
        className={horizontalBar}
        onClick={onHorizontalBarClick}
      />
    </>
  );
}
