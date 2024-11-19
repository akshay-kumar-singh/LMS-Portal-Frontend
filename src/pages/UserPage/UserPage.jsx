import React from 'react';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import UserCourses from '../../components/UserCourses/UserCourses';

const UserPage = () => {
  return (
    <div>
      <UserNavbar />
      <main className="container mx-auto p-4">
        <UserCourses />
      </main>
    </div>
  );
};

export default UserPage;