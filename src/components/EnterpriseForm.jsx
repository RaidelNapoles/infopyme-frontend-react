import "../styles/EnterpriseForm.css";
import { Select } from "./Select";
import { CheckBox } from "./CheckBox";
import { Input } from "./Input";
import { useEnterpriseForm } from "../hooks/useEnterpriseForm";
import { useNavigate } from "react-router-dom";

export const EnterpriseForm = ({ regenerateComponent }) => {
  const {
    form,
    handleInputChange,
    handleCheckChange,
    municipalityList,
    provinces,
    actors,
    activities,
  } = useEnterpriseForm();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // navigate("/enterprises");
    regenerateComponent({ newFilters: form });
  };

  return (
    <>
      <h5 className="form-title">Búsqueda avanzada</h5>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <Input
            title={"Nombre de la empresa"}
            name={"name"}
            value={form.name}
            handleSelectChange={handleInputChange}
            placeholder={"Ej: Chocolatera, Cafeccino, Beyond Root..."}
          />

          <Select
            title={"Provincia"}
            name={"province"}
            value={form.province}
            handleSelectChange={handleInputChange}
            optionsList={provinces}
          />

          <Select
            title={"Municipio"}
            name={"municipality"}
            value={form.municipality}
            handleSelectChange={handleInputChange}
            optionsList={municipalityList}
          />

          <Select
            title={"Actores económicos"}
            name={"actor"}
            value={form.actor}
            handleSelectChange={handleInputChange}
            optionsList={actors}
          />

          <Select
            title={"Actividades"}
            name={"activity"}
            value={form.activity}
            handleSelectChange={handleInputChange}
            optionsList={activities}
          />

          <CheckBox
            title={"Solo los que tengan información de contacto"}
            name={"withContact"}
            value={form.withContact}
            handleCheckChange={handleCheckChange}
          />

          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};
