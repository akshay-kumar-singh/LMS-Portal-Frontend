import React from "react";
import Header from "../../components/LearnerInformation/Header";
import ProfileDetails from "../../components/LearnerInformation/ProfileDetails";
import AdditionalDetails from "../../components/LearnerInformation/AdditionalDetails";
import UnblockSection from "../../components/LearnerInformation/UnblockSection";
import LoginDetails from "../../components/LearnerInformation/LoginDetails";
import DownloadCourses from "../../components/LearnerInformation/DownloadCourses";
import ReferralDetails from "../../components/LearnerInformation/ReferralDetails";
import UTMDetails from "../../components/LearnerInformation/UTMDetails";
import DeleteLearner from "../../components/LearnerInformation/DeleteLearner";

const LearnerInformationPage = () => {
  return (
    <div className="p-6">
      <Header />
      <ProfileDetails />
      <AdditionalDetails  />
      <UnblockSection />
      <LoginDetails />
      <DownloadCourses />
      <ReferralDetails />
      <UTMDetails />
      <DeleteLearner />
    </div>
  );
};

export default LearnerInformationPage;
