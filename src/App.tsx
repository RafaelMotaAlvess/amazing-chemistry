import { IMAGE_BACKGROUND } from './assets';
import { AchievementButton } from './components';
import { achievementButtonWrapper, container, image } from './styles.css';

function App() {
  return (
    <main className={container}>
      <div className={achievementButtonWrapper}>
        <AchievementButton />
      </div>

      <img
        className={image}
        src={IMAGE_BACKGROUND}
        alt='Imagem de fundo'
        title='Imagem de fundo'
      />
    </main>
  );
}

export default App;
