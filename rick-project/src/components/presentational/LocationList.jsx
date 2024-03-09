import React, { useState } from "react";
//import { Collapse } from "./Collapse";
import Collapse from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useLocations } from "../hooks/useLocations";

const LocationList = () => {
  const { locations } = useLocations();
  const [expandedLocation, setExpandedLocation] = useState(null);

  const toggleLocation = (locationId) => {
    setExpandedLocation((prevLocation) => (prevLocation === locationId ? null : locationId));
  };

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
          expanded={expandedLocation === location.id}
          onToggle={() => toggleLocation(location.id)}
        />
      ))}
    </div>
  );
};

export default LocationList;
