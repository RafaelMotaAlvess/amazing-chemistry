import {
  LOCKED,
  WATER,
  CARBON_DIOXIDE,
  SODIUM_CHLORIDE,
  POTASSIUM_BROMIDE,
  MAGNESIUM_CHLORIDE,
  CALCIUM_FLUORIDE,
  HYDROCHLORIC_ACID,
  HYDROFLUORIC_ACID,
  HYDROGEN_SULFIDE,
  CALCIUM_HYDROXIDE,
  MAGNESIUM_HYDROXIDE,
  POTASSIUM_HYDROXIDE,
  SODIUM_SULFATE,
  POTASSIUM_SULFATE,
  CALCIUM_CARBONATE,
} from '../../assets';
import type { Molecule } from '../../dataset';
import { container, image, locked } from './styles.css';

interface AchievementProps {
  molecule: Molecule;
  name: string;
  isLocked?: boolean;
}

export function Achievement({
  molecule,
  name,
  isLocked = true,
}: AchievementProps) {
  const images: Record<Molecule, string> = {
    H2O: WATER,
    CO2: CARBON_DIOXIDE,
    NaCl: SODIUM_CHLORIDE,
    KBr: POTASSIUM_BROMIDE,
    CaF2: CALCIUM_FLUORIDE,
    MgCl2: MAGNESIUM_CHLORIDE,
    HCl: HYDROCHLORIC_ACID,
    HF: HYDROFLUORIC_ACID,
    H2S: HYDROGEN_SULFIDE,
    'Ca(OH)2': CALCIUM_HYDROXIDE,
    'Mg(OH)2': MAGNESIUM_HYDROXIDE,
    KOH: POTASSIUM_HYDROXIDE,
    Na2SO4: SODIUM_SULFATE,
    K2SO4: POTASSIUM_SULFATE,
    CaCO3: CALCIUM_CARBONATE,
  };

  const label = isLocked ? 'Bloqueado' : name;

  return (
    <div className={container} title={label}>
      <img
        className={isLocked ? locked : image}
        src={isLocked ? LOCKED : images[molecule]}
        alt={label}
        title={label}
      />
    </div>
  );
}
