import { LocationItem } from "./LocationItem"; // Предположим, что у вас есть компонент LocationItem для отображения информации о локации
import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useLocations } from "../hooks/useLocations"; // Импортируем хук для получения списка локаций

export const LocationList = () => {
  const { locations } = useLocations(); // Получаем список локаций с помощью хука useLocations
  return (
    <div>
      {locations.map((location) => (
        <Collapse
          key={location.id}
          className="location"
          title={location.name}
          content={
            <CharacterList
              ids={location.residents.map((resident) => {
                const id = resident.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </div>
  );
};
