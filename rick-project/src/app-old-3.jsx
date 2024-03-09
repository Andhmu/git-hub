import { LocationList } from "./components/presentational/LocationList"; // Импортируем компонент LocationList
import { EpisodeList } from "./components/presentational/EpisodeList";
import { Rick } from "./components/Rick";

function App() {
  return (
    <>
      <details>
        <summary>Список локаций</summary>
        <LocationList /> {/* Отображаем список локаций вместо списка эпизодов */}
      </details>
      
      <details>
        <summary>Список эпизодов</summary>
        <EpisodeList />
      </details>
    </>
  );
}

export default App;
