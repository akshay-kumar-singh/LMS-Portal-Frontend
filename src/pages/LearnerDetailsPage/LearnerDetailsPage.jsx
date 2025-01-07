import React, { useState } from "react";
import { useParams } from "react-router-dom";
import learnersData from "../../constants/LearnersData";
import LearnerDetailsSidebar from "../../components/LearnerDetailsSidebar/LearnerDetailsSidebar";
import LearnerInformationPage from "../LearnerInformationPage/LearnerInformationPage";
import LearnerCoursesPage from "../LearnerCoursesPage/LearnerCoursesPage";
import LearnerWebinarsPages from "../LearnerWebinarsPages/LearnerWebinarsPages";
import LearnerDigitalProductPage from "../LearnerDigitalProductPage/LearnerDigitalProductPage";
import LearnerTelegramCommunityPage from "../LearnerTelegramCommunityPage/LearnerTelegramCommunityPage";
import LearnerPurchaseHistoryPage from "../LearnerPurchaseHistoryPage/LearnerPurchaseHistoryPage";
import LearnerMyWalletPage from "../LearnerMyWalletPage/LearnerMyWalletPage";

const LearnerDetailsPage = () => {
  const { id } = useParams();
  const learner = learnersData.find((learner, index) => index === parseInt(id));

  const [activeSection, setActiveSection] = useState("Information");

  if (!learner) {
    return <div>Learner not found</div>;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "Information":
        return <LearnerInformationPage learner={learner} />;
      case "Courses":
        return <LearnerCoursesPage />;
      case "Webinar":
        return <LearnerWebinarsPages />;
      case "Digital Products":
        return <LearnerDigitalProductPage />;
      case "Telegram Communities":
        return <LearnerTelegramCommunityPage />;
      case "Purchase History":
        return <LearnerPurchaseHistoryPage />;
      case "My Wallet":
        return <LearnerMyWalletPage />;
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <LearnerDetailsSidebar
        learner={learner}
        onSectionChange={setActiveSection}
      />

      {/* Main content area */}
      <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default LearnerDetailsPage;
