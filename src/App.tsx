import { AtomCard } from './components';
import { container } from './styles.css';

function App() {
  return (
    <main className={container}>
      <AtomCard symbol='H' name='Hidrogênio' atomicNumber={1} />
    </main>
  );
}

export default App;
