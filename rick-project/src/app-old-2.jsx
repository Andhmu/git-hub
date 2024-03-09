import { LocationList } from "./components/presentational/LocationList"; // Импортируем компонент LocationList
import { EpisodeList } from "./components/presentational/EpisodeList";
import { Rick } from "./components/Rick";

function App() {
  return (
    <>
      <LocationList /> {/* Отображаем список локаций вместо списка эпизодов */}
      <EpisodeList />
    </>
  );
}

export default App;
