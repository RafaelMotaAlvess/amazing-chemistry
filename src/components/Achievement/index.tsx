import { LOCKED, SMOKE, WATER } from '../../assets';
import type { Molecule } from '../../dataset';
import { container, image, molecule as moleculeStyle } from './styles.css';

interface AchievementProps {
  molecule: Molecule;
  isLocked?: boolean;
}

function moleculeToComponent(molecule: Molecule): React.JSX.Element {
  const texts = molecule.split(/\d/).filter(Boolean);
  const numbers = molecule.split(/\D/).filter(Boolean);

  return (
    <span>
      {texts.map((text, index) => {
        return (
          <span key={text + (numbers[index] ?? '')}>
            {text}
            <sub>{numbers[index]}</sub>
          </span>
        );
      })}
    </span>
  );
}

export function Achievement({ molecule, isLocked = true }: AchievementProps) {
  const images: Record<Molecule, string> = {
    H2O: WATER,
    CO2: SMOKE,
    NaCl: '',
    KBr: '',
    CaF2: '',
    MgCl2: '',
    HCl: '',
    H2S: '',
    'Ca(OH)2': '',
    'Mg(OH)2': '',
    KOH: '',
    Na2SO4: '',
    K2SO4: '',
    CaCO3: '',
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

      {!isLocked && (
        <span className={moleculeStyle}>{moleculeToComponent(molecule)}</span>
      )}
    </div>
  );
}
