import React from 'react';

function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      {/* User Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/100" alt="Profile" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Username: johndoe</p>
            <p className="text-gray-600">Email: johndoe@example.com</p>
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Learning Progress</h2>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-gray-600 mt-2">70% Complete</p>
        </div>
        <h3 className="text-xl font-semibold mb-2">Completed Courses</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Course 1</li>
          <li>Course 2</li>
        </ul>
      </div>

      {/* Personalization & Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personalization & Settings</h2>
        <p className="text-gray-600">Preferred Language: English</p>
        <p className="text-gray-600">Theme: Light Mode</p>
        <p className="text-gray-600">Learning Goals: Complete 5 courses</p>
      </div>

      {/* Achievements & Rewards */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Achievements & Rewards</h2>
        <p className="text-gray-600">Badges Earned: 3</p>
        <p className="text-gray-600">Top Score: 95%</p>
      </div>

      {/* Support and Feedback */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Support and Feedback</h2>
        <p className="text-gray-600">Help Center</p>
        <p className="text-gray-600">Submit Feedback</p>
      </div>
    </div>
  );
}

export default ProfilePage; 