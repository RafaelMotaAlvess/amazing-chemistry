import { useCallback, useMemo } from 'react';
import { container, content, horizontalBar } from './styles.css';
import { AtomCard } from '../AtomCard';
import { useSidebar } from '../../hooks';

export function Sidebar() {
  const { isOpen, onClose, onOpen } = useSidebar();

  const renderAtoms = useMemo(
    () =>
      Array(2)
        .fill(0)
        .map((_, index) => (
          <AtomCard
            key={index}
            atomicNumber={index ? 8 : 1}
            name={index ? 'Oxigênio' : 'Hidrogênio'}
            symbol={index ? 'O' : 'H'}
          />
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
