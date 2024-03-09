import { useState, useEffect } from "react";
import { fetchLocations } from "../../api"; // Предположим, что у вас есть функция fetchLocations для получения списка локаций

export const useLocations = () => {
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    fetchLocations().then((data) => {
      setLocations(data);
    });
  }, []);

  return { locations };
};
