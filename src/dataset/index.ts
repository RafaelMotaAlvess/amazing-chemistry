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
  | 'HF'
  | 'H2S'
  | 'Ca(OH)2'
  | 'Mg(OH)2'
  | 'KOH'
  | 'Na2SO4'
  | 'K2SO4'
  | 'CaCO3';

export interface RecipeInputsProps {
  atomicNumber: number;
  amount: number;
}

export interface RecipeResultProps {
  name: string;
  formula: Molecule;
}

export interface RecipeProps {
  inputs: RecipeInputsProps[];
  result: RecipeResultProps;
}

export { elements, recipes };
