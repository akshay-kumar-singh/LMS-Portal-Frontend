import React from 'react';

const UserCourses = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white border rounded shadow">Course 1</div>
        <div className="p-4 bg-white border rounded shadow">Course 2</div>
        <div className="p-4 bg-white border rounded shadow">Course 3</div>
      </div>
    </div>
  );
};

export default UserCourses;