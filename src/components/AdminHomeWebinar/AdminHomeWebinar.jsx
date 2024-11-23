import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AdminHomeWebinar = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Host Your First Webinar
      </h2>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center mb-8 gap-6">
        <div className="flex-1 p-6 bg-blue-200 rounded-lg shadow-md flex flex-col justify-center border border-black">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Invite your audience to{" "}
            <span className="text-blue-500 font-bold">'ALP CBT - 1'</span>
          </h3>
          <p className="text-gray-600 mb-6">
            No launch is complete without a good shout out. Share on channels
            like Instagram, Twitter, and Telegram right away.
          </p>
          <button className="self-start bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all flex items-center">
            Share your webinar on social media <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className="flex-1 border border-black h-56">
          <img
            src="https://t4.ftcdn.net/jpg/05/73/55/33/360_F_573553322_RpMXMcqcytlH3fuAgcwmgAVoAxIOHZK1.jpg"
            className="w-full h-full object-cover rounded-lg shadow-md"
            alt="Webinar Banner"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-blue-200 p-6 h-56 flex flex-col justify-between rounded-lg shadow-md border border-black hover:shadow-lg transition-all">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Track the performance of this webinar with robust in-built analytics
          </h3>
          <a
            href="/insights"
            className="flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium mt-2"
          >
            Show me the insights <FaArrowRight className="ml-2" />
          </a>
        </div>

        <div className="bg-blue-200 p-6 h-56 flex flex-col justify-between rounded-lg shadow-md border border-black hover:shadow-lg transition-all">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Your community members are going to be so excited about this!
          </h3>
          <a
            href="/insights"
            className="flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium mt-2"
          >
            Message your community right away <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-700 mt-10 mb-6 text-center">
        Launch Your First Course
      </h2>
      <div className="flex flex-col lg:flex-row items-stretch bg-blue-50 p-6 rounded-lg shadow-md border border-black h-56">
        <div className="flex-[3] pr-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            🎉 Congratulations on your first successful registration for
              ' Basic Science and Engineering ' !
          </h3>
          <p className="text-gray-700 text-md">
            Keep up the excellent work : Continue promoting your courses to grow
            your reach and impact even further !
          </p>
        </div>

        <div className="flex-[1] flex items-center justify-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all flex items-center text-md font-semibold">
            Go to Live Courses <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeWebinar;
