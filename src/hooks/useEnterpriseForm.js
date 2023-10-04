import { useContext, useState } from "react";
import provinces from "../utils/provinces.json";
import municipalities from "../utils/municipalities.json";
import actors from "../utils/actors.json";
import activities from "../utils/activities.json";
import { FilterContext } from "../providers/filter";

const initialForm = {
  search: "",
  province: provinces[0],
  municipality: "Todos los municipios",
  actor: actors[0],
  activity: activities[0],
  withContact: false,
};

export const useEnterpriseForm = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const [municipalityList, setMunicipalityList] = useState(
    municipalities[filters.province]
  );

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const newForm = { ...filters, [name]: value };

    if (name === "province") {
      setMunicipalityList(municipalities[value]);
      newForm.municipality = "Todos los municipios";
    }

    // console.log(filters);
    // console.log(newForm);
    setFilters(newForm);
  };

  const handleCheckChange = () => {
    const newForm = { ...filters, withContact: !filters.withContact };
    setFilters(newForm);
  };

  const clearName = () => {
    const newForm = { ...filters, name: "" };
    setFilters(newForm);
  };

  const clearFilters = () => {
    setFilters(initialForm);
  };

  return {
    form: filters,
    handleInputChange,
    handleCheckChange,
    clearName,
    clearFilters,
    municipalityList,
    provinces,
    actors,
    activities,
  };
};
