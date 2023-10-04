import { useContext } from "react";
import { FilterContext } from "../providers/filter";

export const useFilter = () => {
  const { filters } = useContext(FilterContext);

  // console.log(filters);

  const filterItems = ({ items }) => {
    return items.filter((item) => {
      let name = true;
      let province = true;
      let municipality = true;
      let actor = true;
      let activity = true;
      let withContact = true;

      if (filters.name != "") {
        name = item.name.toLowerCase().includes(filters.name.toLowerCase());
      }
      if (filters.province != "Todas las provincias") {
        province = filters.province === item.province;
      }
      if (filters.municipality != "Todos los municipios") {
        municipality = filters.municipality === item.municipality;
      }
      if (filters.actor != "Todos los actores económicos") {
        actor = filters.actor.toLowerCase() === item.actor.toLowerCase();
      }
      if (filters.activity != "Todas las actividades") {
        activity = item.sectors.includes(filters.activity);
      }
      if (filters.withContact) {
        withContact = item.phoneList.length > 0 || item.mailList.length > 0;
      }
      return (
        name && province && municipality && actor && activity && withContact
      );
    });
  };
  return { filterItems };
};
