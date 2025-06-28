import { useCallback, useMemo, useRef, useState } from 'react';
import {
  container,
  content,
  helpButton,
  helpButtonBoldText,
  helpPopover,
  helpPopoverText,
  horizontalBar,
} from './styles.css';
import { AtomCard } from '../AtomCard';
import { useSidebar } from '../../hooks';

import { elements } from '../../dataset';
import { Icon } from '../Icon';

export function Sidebar() {
  const { isOpen, onClose, onOpen } = useSidebar();

  const [isOpenHelp, setIsOpenHelp] = useState<boolean>(false);

  const containerRef = useRef<HTMLElement>(null);

  const onHorizontalBarClick = useCallback(() => {
    if (isOpen) {
      setIsOpenHelp(false);
      onClose();
    } else onOpen();
  }, [isOpen, onClose, onOpen]);

  const onHelp = useCallback(() => {
    setIsOpenHelp(prev => !prev);
  }, []);

  const renderAtoms = useMemo(
    () =>
      elements
        .sort((a, b) => a.atomicNumber - b.atomicNumber)
        .map(element => <AtomCard key={element.symbol} {...element} />),
    []
  );

  return (
    <>
      <div className={helpPopover} data-open={isOpenHelp}>
        <p className={helpPopoverText}>
          • <span className={helpButtonBoldText}>Clique</span> no elemento para
          aumentar sua quantidade.
        </p>
        <p className={helpPopoverText}>
          •{' '}
          <span className={helpButtonBoldText}>Clique com o botão direito</span>{' '}
          do mouse para selecionar o elemento para a área de trabalho.
        </p>
        <p className={helpPopoverText}>
          • <span className={helpButtonBoldText}>Arraste</span> o elemento para
          a área de trabalho para criar novos elementos químicos.
        </p>
      </div>

      <button
        type='button'
        title={isOpenHelp ? 'Fechar' : 'Ajuda'}
        data-open={isOpen}
        className={helpButton}
        onClick={onHelp}
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
