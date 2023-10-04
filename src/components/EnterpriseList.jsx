import enterprises from "../utils/enterprises.json";
import enterpriseImages from "../utils/enterprise_images.json";
import { Enterprise } from "./Enterprise";
import "../styles/EnterpriseList.css";
import { useContext, useState } from "react";
import { PaginationComponent } from "./PaginationComponent";
import { TextFieldComponent } from "./TextFieldComponent";
import { useEnterpriseForm } from "../hooks/useEnterpriseForm";
import { useList } from "../hooks/useList";
import { FilterContext } from "../providers/filter";
import TemporaryDrawer from "./TemporaryDrawer";

export const EnterpriseList = () => {
  const { filters } = useContext(FilterContext);
  const [page, setPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    pages,
    filteredList,
    currentPageList,
    getItemList,
    toPage,
    fromRecord,
    toRecord,
  } = useList({
    items: enterprises,
    initialFilters: filters,
  });
  const { form, handleInputChange, clearName } = useEnterpriseForm();

  const handlePageChange = (event, value) => {
    setPage(value);
    toPage(value);
  };

  const handleClearClick = () => {
    const newFilters = { ...filters, name: "" };
    clearName();
    setPage(1);
    getItemList({ filters: newFilters });
  };

  const handleTextFieldChange = (event) => {
    const newFilters = { ...filters, name: event.target.value };
    handleInputChange(event);
    setPage(1);
    getItemList({ filters: newFilters });
  };

  const flipDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleFilterButtonClick = () => {
    flipDrawer();
  };

  const regenerateComponent = ({ newFilters }) => {
    getItemList({ filters: newFilters });
    setPage(1);
  };

  const from = fromRecord(page);
  const to = toRecord(page);

  return (
    <>
      <TemporaryDrawer
        isOpen={isDrawerOpen}
        flipDrawer={flipDrawer}
        regenerateComponent={regenerateComponent}
      />

      <h2>Mipymes y CNA</h2>

      <TextFieldComponent
        value={form.name}
        handleClearClick={handleClearClick}
        handleInputChange={handleTextFieldChange}
        handleFilterButtonClick={handleFilterButtonClick}
      />

      <p className="header-text">
        {to == 0
          ? "Sin resultados"
          : `${from} - ${to}  de ${filteredList.length} resultados`}
      </p>

      <div className="list-container">
        <div className="list-group">
          {currentPageList.map((enterprise, index) => {
            let imageUrl = enterpriseImages[enterprise.name];
            if (!imageUrl) {
              imageUrl = "./src/assets/factory_blue.png";
            }
            return (
              <Enterprise
                key={index}
                enterprise={enterprise}
                imageUrl={imageUrl}
              />
            );
          })}
        </div>
      </div>

      <PaginationComponent
        pages={pages}
        currentPage={page}
        handlePageChange={handlePageChange}
      />
    </>
  );
};
