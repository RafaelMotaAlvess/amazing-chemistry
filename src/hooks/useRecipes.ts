import { create } from 'zustand';
import type { RecipeProps } from '../dataset';

interface RecipesStore {
  recipes: RecipeProps[];
  addRecipe: (recipe: RecipeProps) => void;
}

export const useRecipes = create<RecipesStore>((set, get) => ({
  recipes: [],
  addRecipe: (recipe: RecipeProps) => {
    const { recipes } = get();
    if (!recipes.some(r => r.result.formula === recipe.result.formula)) {
      const newRecipes = [...recipes, recipe];
      set({ recipes: newRecipes });
    }
  },
}));
