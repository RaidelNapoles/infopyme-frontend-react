import { createContext, useState } from "react";
import provinces from "../utils/provinces.json";

export const FilterContext = createContext();

const initialProvince = provinces[0];

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    name: "",
    province: initialProvince,
    municipality: "Todos los municipios",
    actor: "Todos los actores económicos",
    activity: "Todas las actividades",
    withContact: false,
  });
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
