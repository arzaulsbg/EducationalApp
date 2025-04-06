import React from 'react';

function CoursePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Course 1', 'Course 2', 'Course 3'].map((course) => (
          <div key={course} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">{course}</h3>
            <p className="text-gray-600">Description of {course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePage; 