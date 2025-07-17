import React, { useState } from 'react';

const SportsEvents = () => {
  const indoorEvents = [
    { name: 'Swimming', date: 'April 18-29', location: 'IITM' },
    { name: 'Badminton', date: 'April 18-29', location: 'AIIMS' },
    { name: 'Table Tennis', date: 'April 18-29', location: 'IIMC' },
    { name: 'Squash', date: 'April 18-29', location: 'NYU' },
  ];

  const outdoorEvents = [
    { name: 'Cricket', date: 'April 18-29', location: 'Harvard' },
    { name: 'Golf', date: 'April 18-29', location: 'IITD' },
    { name: 'Running', date: 'April 18-29', location: 'UBC' },
    { name: 'Tennis', date: 'April 18-29', location: 'IITG' },
  ];

  const [showIndoor, setShowIndoor] = useState(true);

  return (
    <div className="max-w-[90vw] mx-auto mt-10">
      <div className="text-center font-bold py-4 rounded-t-lg">
        <h1 className="text-3xl font-bold text-gray-800">Sports Events</h1>
      </div>
      <div className="rounded-b-lg">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`py-2 px-6 rounded-lg transition duration-300 ease-in-out ${
              showIndoor ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setShowIndoor(true)}
          >
            Indoor
          </button>
          <button
            className={`py-2 px-6 rounded-lg transition duration-300 ease-in-out ${
              !showIndoor ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setShowIndoor(false)}
          >
            Outdoor
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {showIndoor
            ? indoorEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">{event.name}</h2>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              ))
            : outdoorEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">{event.name}</h2>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SportsEvents;
