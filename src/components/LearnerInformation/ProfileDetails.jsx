import React from "react";
import { useParams } from "react-router-dom";
import learnersData from "../../constants/LearnersData";

const ProfileDetails = ({ name, email, joinedOn }) => {
    const { id } = useParams();
    const user = learnersData[id]; 
    
  return (
    <div className="max-w-[65%] mb-6 mx-auto">
      <h2 className="text-xl font-medium mb-2">Profile Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={user.name}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={user.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            defaultValue={user.phone}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            defaultValue={user.role}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Mentor">Mentor</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="state">
            State
          </label>
          <select
            id="state"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            <option value="New York">New York</option>
            <option value="Florida">Florida</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="language">
            Language
          </label>
          <select
            id="language"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
