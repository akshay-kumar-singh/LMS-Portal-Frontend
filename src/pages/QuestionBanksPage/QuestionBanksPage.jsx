import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/ProductsQuestionBanks/Header";
import SearchSection from "../../components/SearchSection/SearchSection";
import ShowEntriesSection from "../../components/ShowEntriesSection/ShowEntriesSection";
import QuestionBanksTable from "../../components/ProductsQuestionBanks/QuestionBanksTable";
import Pagination from "../../components/Pagination/Pagination";
import QuestionBankData from "../../constants/QuestionBankData";
import { useSearch } from "../../context/SearchContext"; 

const QuestionBanksPage = () => {
  const navigate = useNavigate();
  const { searchQuery, searchBy } = useSearch();
  const [data, setData] = useState(QuestionBankData); 
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEdit = (item) => {
    console.log("Edit clicked for:", item);
  };

  const handleDelete = (item) => {
    console.log("Delete clicked for:", item);
    setData((prevData) => prevData.filter((row) => row !== item));
  };

  const handleBulkDelete = (selectedItems) => {
    console.log("Bulk delete clicked for:", selectedItems);
    setData((prevData) =>
      prevData.filter((row) => !selectedItems.includes(row))
    );
    setSelectedRows([]);
  };

  const handleDetail = (item) => {
    navigate(`/admin/dashboard/products/questionbanks/details/${item.exam}`, {
      state: item, 
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Header />

      <SearchSection searchOptions={["exam", "subject", "topic"]} />

      <ShowEntriesSection />

      <QuestionBanksTable
        data={visibleData}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onBulkDelete={handleBulkDelete}
        onDetail={handleDetail}
        searchQuery={searchQuery} 
        searchBy={searchBy}      
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default QuestionBanksPage;
