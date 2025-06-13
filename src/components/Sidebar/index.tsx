import { useCallback, useMemo } from 'react';
import { container, content, horizontalBar } from './styles.css';
import { AtomCard } from '../AtomCard';
import { useSidebar } from '../../hooks';

export function Sidebar() {
  const { isOpen, onClose, onOpen } = useSidebar();

  const renderAtoms = useMemo(
    () =>
      Array(1)
        .fill(0)
        .map((_, index) => (
          <AtomCard key={index} atomicNumber={1} name='Hidrogênio' symbol='H' />
        )),
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
