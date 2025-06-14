import { elements } from './elements.json';
import { recipes } from './recipes.json';

export interface ElementProps {
  symbol: string;
  name: string;
  atomicNumber: number;
  family: string;
}

export type Molecule =
  | 'H²O'
  | 'CO²'
  | 'NaCl'
  | 'KBr'
  | 'CaF²'
  | 'MgCl²'
  | 'HCl'
  | 'H²S'
  | 'Ca(OH)²'
  | 'Mg(OH)²'
  | 'KOH'
  | 'Na²SO⁴'
  | 'K²SO⁴'
  | 'CaCO³';

export interface RecipeProps {
  inputs: string[];
  result: {
    name: string;
    formula: Molecule;
  };
}

export { elements, recipes };
