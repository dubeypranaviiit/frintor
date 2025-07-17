import React from 'react';

const Culture = () => {
  const events = [
    { name: 'Annual Festival', date: 'April 18-20', location: 'IIMB' },
    { name: 'Cultural Showcase', date: 'April 18-20', location: 'IIMB' },
    { name: 'Community Event', date: 'April 18-20', location: 'IIMB' },
  ];

  return (
    <div className="p-8">
      <div className=" font-bold text-center py-4 rounded-t-lg text-2xl ">
        CULTURE EVENTS
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
              <p className="text-gray-600 mt-2">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
