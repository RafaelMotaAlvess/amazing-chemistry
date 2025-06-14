import { LOCKED, SMOKE, WATER } from '../../assets';
import type { Molecule } from '../../dataset';
import { container, image, molecule as moleculeStyle } from './styles.css';

interface AchievementProps {
  molecule: Molecule;
  isLocked?: boolean;
}

export function Achievement({ molecule, isLocked = true }: AchievementProps) {
  const images: Record<Molecule, string> = {
    'H²O': WATER,
    'CO²': SMOKE,
    NaCl: '',
    KBr: '',
    'CaF²': '',
    'MgCl²': '',
    HCl: '',
    'H²S': '',
    'Ca(OH)²': '',
    'Mg(OH)²': '',
    KOH: '',
    'Na²SO⁴': '',
    'K²SO⁴': '',
    'CaCO³': '',
  };

  const label = isLocked ? 'Bloqueado' : images[molecule];

  return (
    <div className={container} title={label}>
      <img
        className={image}
        src={isLocked ? LOCKED : images[molecule]}
        alt={label}
        title={label}
      />

      {!isLocked && <span className={moleculeStyle}>{molecule}</span>}
    </div>
  );
}
