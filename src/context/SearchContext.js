import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchBy, setSearchBy] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchCategoryChange = (category) => {
    setSearchBy(category);
  };

  return (
    <SearchContext.Provider
      value={{
        searchBy,
        searchQuery,
        handleSearchQueryChange,
        handleSearchCategoryChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
