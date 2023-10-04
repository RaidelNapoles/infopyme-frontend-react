import { useState } from "react";
import { filterItems } from "../utils/filterUtil";

const RECORDS_BY_PAGE = 20;

export const useList = ({ items, initialFilters }) => {
  const initialRecords = filterItems({ items, filters: initialFilters });

  const getPages = (length) => {
    let totalPages = parseInt(length / RECORDS_BY_PAGE);
    if (length % RECORDS_BY_PAGE != 0) totalPages += 1;
    // console.log(totalPages);
    return totalPages;
  };

  const [pages, setPages] = useState(getPages(initialRecords.length));
  const [filteredList, setFilteredList] = useState(initialRecords);
  const [currentPageList, setCurrentPageList] = useState(
    initialRecords.slice(0, RECORDS_BY_PAGE)
  );

  const getItemList = ({ filters }) => {
    const initialList = filterItems({ items, filters });
    setPages(getPages(initialList.length));
    setFilteredList(initialList);
    setCurrentPageList(initialList.slice(0, RECORDS_BY_PAGE));
  };

  const toPage = (page) => {
    setCurrentPageList(
      filteredList.slice((page - 1) * RECORDS_BY_PAGE, page * RECORDS_BY_PAGE)
    );
  };

  const fromRecord = (page) => {
    return (page - 1) * RECORDS_BY_PAGE + 1;
  };

  const toRecord = (page) => {
    return Math.min(page * RECORDS_BY_PAGE, filteredList.length);
  };

  return {
    pages,
    filteredList,
    currentPageList,
    getItemList,
    toPage,
    fromRecord,
    toRecord,
  };
};
