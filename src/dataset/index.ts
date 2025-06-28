import { elements } from './elements.json';
import { recipes } from './recipes.json';

export interface ElementProps {
  symbol: string;
  name: string;
  atomicNumber: number;
  family: string;
}

export type Molecule =
  | 'H2O'
  | 'CO2'
  | 'NaCl'
  | 'KBr'
  | 'CaF2'
  | 'MgCl2'
  | 'HCl'
  | 'H2S'
  | 'Ca(OH)2'
  | 'Mg(OH)2'
  | 'KOH'
  | 'Na2SO4'
  | 'K2SO4'
  | 'CaCO3';

export interface RecipeProps {
  inputs: Array<{ atomicNumber: number; amount: number }>;
  result: {
    name: string;
    formula: Molecule;
  };
}

export { elements, recipes };
