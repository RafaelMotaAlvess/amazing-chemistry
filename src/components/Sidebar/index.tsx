import { useCallback, useMemo } from 'react';
import { container, content, horizontalBar } from './styles.css';
import { AtomCard } from '../AtomCard';
import { useSidebar } from '../../hooks';

import { elements } from '../../dataset';

export function Sidebar() {
  const { isOpen, onClose, onOpen } = useSidebar();

  const renderAtoms = useMemo(
    () =>
      elements
        .sort((a, b) => a.atomicNumber - b.atomicNumber)
        .map(element => <AtomCard key={element.symbol} {...element} />),
    []
  );

  const onHorizontalBarClick = useCallback(() => {
    if (isOpen) onClose();
    else onOpen();
  }, [isOpen, onClose, onOpen]);

  return (
    <>
      <aside className={container} data-open={isOpen}>
        <div className={content}>{renderAtoms}</div>
      </aside>

      <button
        type='button'
        className={horizontalBar}
        data-open={isOpen}
        onClick={onHorizontalBarClick}
      />
    </>
  );
}
