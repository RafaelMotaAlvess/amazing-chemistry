import { useMemo } from "react";
import { IMAGE_BACKGROUND } from "./assets";
import { Achievement, AchievementButton, AchievementModal } from "./components";
import { achievementButtonWrapper, container, image } from "./styles.css";

function App() {
  const renderAchievements = useMemo(
    () =>
      Array(100)
        .fill(0)
        .map((_, index) => <Achievement key={index} molecule="H2O" isLocked />),
    []
  );

  return (
    <main className={container}>
      <div className={achievementButtonWrapper}>
        <AchievementButton />
      </div>

      <img
        className={image}
        src={IMAGE_BACKGROUND}
        alt="Imagem de fundo"
        title="Imagem de fundo"
        draggable="false"
      />

      <AchievementModal>{renderAchievements}</AchievementModal>
    </main>
  );
}

export default App;
