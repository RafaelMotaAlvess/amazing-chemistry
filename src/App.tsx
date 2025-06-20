import { useMemo } from 'react';
import { IMAGE_BACKGROUND } from './assets';
import {
  Achievement,
  AchievementButton,
  AchievementModal,
  Sidebar,
} from './components';
import type { Molecule } from './dataset';
import { recipes } from './dataset/recipes.json';
import { useModal } from './hooks/useModal';
import { achievementButtonWrapper, container, image } from './styles.css';

function App() {
  const { onOpen } = useModal();

  const renderAchievements = useMemo(
    () =>
      recipes.map(recipe => (
        <Achievement
          key={recipe.result.formula}
          molecule={recipe.result.formula as Molecule}
          isLocked
        />
      )),
    []
  );

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

      <AchievementModal>{renderAchievements}</AchievementModal>

      <Sidebar />
    </main>
  );
}

export default App;
