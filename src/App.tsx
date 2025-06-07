import { Achievement, AtomCard } from './components';
import { container } from './styles.css';

function App() {
  return (
    <main className={container}>
      <AtomCard symbol='H' name='Hidrogênio' atomicNumber={1} />
      <Achievement molecule='H2O' isLocked={false} />
      <Achievement molecule='H2O' />
      <Achievement molecule='CO2' isLocked={false} />
    </main>
  );
}

export default App;
