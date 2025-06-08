import { useMemo } from 'react';
import { IMAGE_BACKGROUND } from './assets';
import { Achievement, AchievementButton, AchievementModal } from './components';
import { useModal } from './hooks';
import { achievementButtonWrapper, container, image } from './styles.css';

function App() {
  const { onOpen } = useModal();

  const renderAchievements = useMemo(
    () =>
      Array(100)
        .fill(0)
        .map((_, index) => <Achievement key={index} molecule='H2O' isLocked />),
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
      />

      <AchievementModal>{renderAchievements}</AchievementModal>
    </main>
  );
}

export default App;
