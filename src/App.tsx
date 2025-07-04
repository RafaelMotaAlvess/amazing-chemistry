import { useMemo } from 'react';
import { IMAGE_BACKGROUND } from './assets';
import {
  Achievement,
  AchievementButton,
  AchievementModal,
  Sidebar,
  WorkspaceArea,
} from './components';
import { useModal, useRecipes } from './hooks';
import { type Molecule, recipes } from './dataset';
import { achievementButtonWrapper, container, image } from './styles.css';

function App() {
  const { onOpen } = useModal();
  const { recipes: savedRecipes } = useRecipes();

  const renderAchievements = useMemo(() => {
    return recipes.map(recipe => {
      const isUnlocked = !savedRecipes.find(
        item => item.result?.formula === recipe.result.formula
      );

      return (
        <Achievement
          key={recipe.result.formula}
          molecule={recipe.result.formula as Molecule}
          name={recipe.result.name}
          isLocked={isUnlocked}
        />
      );
    });
  }, [savedRecipes]);

  return (
    <main className={container}>
      <div className={achievementButtonWrapper}>
        <AchievementButton onClick={onOpen} />
      </div>

      <img
        className={image}
        src={IMAGE_BACKGROUND}
        alt='Imagem de fundo'
        title='Imagem de fundo'
        draggable='false'
      />

      <WorkspaceArea />

      <Sidebar />

      <AchievementModal>{renderAchievements}</AchievementModal>
    </main>
  );
}

export default App;
