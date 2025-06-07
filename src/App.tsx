import { IMAGE_BACKGROUND } from './assets';
import { Achievement, AtomCard } from './components';
import { container, image } from './styles.css';

function App() {
  return (
    <main className={container}>
      <AtomCard symbol='H' name='Hidrogênio' atomicNumber={1} />
      <Achievement molecule='H2O' isLocked={false} />
      <Achievement molecule='H2O' />
      <Achievement molecule='CO2' isLocked={false} />

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
