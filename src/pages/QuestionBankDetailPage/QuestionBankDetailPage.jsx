import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../../components/QuestionBanksDetails/Header";
import SearchSection from "../../components/SearchSection/SearchSection";
import ShowEntriesSection from "../../components/ShowEntriesSection/ShowEntriesSection";
import QuestionBankDetailTable from "../../components/QuestionBanksDetails/QuestionBankDetailTable";
import Pagination from "../../components/Pagination/Pagination";
import QuestionBankDetailTableData from "../../constants/QuestionBankDetailTableData";

const QuestionBankDetailPage = () => {
  const { exam } = useParams();
  const location = useLocation();
  const questionBank = location.state;
  const [currentPage, setCurrentPage] = useState(1);

  const [questions, setQuestions] = useState(QuestionBankDetailTableData);

  const entries = 5;

  const handleDetails = (question) => {
    console.log("Details for question:", question);
  };

  const handleDelete = (question) => {
    console.log(`Delete question ID: ${question.id}`);
    setQuestions(questions.filter((q) => q.id !== question.id));
  };

  const handleBulkDelete = (selectedQuestions) => {
    console.log(
      `Bulk delete triggered for selected questions: ${selectedQuestions}`
    );
    setQuestions(questions.filter((q) => !selectedQuestions.includes(q.id)));
  };
  

  const totalPages = Math.ceil(questions.length / entries);
  const indexOfLastEntry = currentPage * entries;
  const indexOfFirstEntry = indexOfLastEntry - entries;
  const currentData = questions.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (!questionBank) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold text-red-500">
          No details available!
        </h1>
        <p>Exam: {exam}</p>
      </div>
    );
  }

  return (
    <>
      <Header questionBank={questionBank} />
      <SearchSection
        searchOptions={[
          "Subject",
          "Topic",
          "Tags",
          "Created Date",
          "Modified Date",
          "Question Type",
        ]}
      />
      <ShowEntriesSection />
      <QuestionBankDetailTable
        data={currentData}
        onDetails={handleDetails}
        onDelete={handleDelete}
        onBulkDelete={handleBulkDelete}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default QuestionBankDetailPage;
