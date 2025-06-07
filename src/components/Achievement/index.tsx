import { LOCKED, SMOKE, WATER } from '../../assets';
import { container, image, molecule as moleculeStyle } from './styles.css';

type AchievementMolecule = 'H2O' | 'CO2';

interface AchievementProps {
  molecule: AchievementMolecule;
  isLocked?: boolean;
}

export function Achievement({ molecule, isLocked = true }: AchievementProps) {
  const molecules: Record<AchievementMolecule, string> = {
    H2O: 'H²O',
    CO2: 'CO²',
  };

  const images: Record<AchievementMolecule, string> = {
    CO2: SMOKE,
    H2O: WATER,
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
        <span className={moleculeStyle}>{molecules[molecule]}</span>
      )}
    </div>
  );
}
