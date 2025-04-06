import React from 'react';

function MyLearningPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">My Learning</h1>
      {/* Active Learning Path or Courses */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Active Courses</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Course Name</h3>
          <p className="text-gray-600">Instructor: Jane Doe</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <p className="text-gray-600 mt-2">50% Complete</p>
          <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors">Resume Course</button>
        </div>
      </div>

      {/* Completed Courses/Content */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Completed Courses</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Course Title - Completed on 01/01/2023</li>
          <li>Course Title - Completed on 02/01/2023</li>
        </ul>
      </div>

      {/* Progress Tracker */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-gray-600 mt-2">75% Complete</p>
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personalized Recommendations</h2>
        <p className="text-gray-600">Next Steps: Advanced Python Course</p>
      </div>

      {/* Resources & Learning Materials */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resources & Learning Materials</h2>
        <p className="text-gray-600">Downloadable Content: PDFs, Videos</p>
      </div>

      {/* Interactive Features */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Interactive Features</h2>
        <p className="text-gray-600">Join Discussions and Forums</p>
      </div>
    </div>
  );
}

export default MyLearningPage; 