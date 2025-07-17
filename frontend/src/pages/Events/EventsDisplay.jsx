import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const EventsDisplay = ({ data }) => {
  // Array of dark color classes
  const darkColors = [
    'bg-blue-900',
    'bg-green-900',
    'bg-indigo-900',
    'bg-purple-900',
    'bg-yellow-900',
    'bg-red-900',
  ];

  // Reference to the scrollable div
  const scrollRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust this value to change scroll distance
        behavior: 'smooth'
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust this value to change scroll distance
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='overflow-hidden'>
      <h1 className='text-white font-semibold text-lg bg-blue-900 p-4'>
        Explore the Student Events
      </h1>
      <div className="relative mx-auto p-4">
        <button onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-l-md flex items-center">
          <FaArrowLeft className="mr-2" />
        </button>
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-hide p-4">
          {data.map((event, index) => (
            <div key={index} className={`${darkColors[index % darkColors.length]} text-white shadow-md rounded-lg p-6 mb-4`}>
              <h2 className="text-2xl font-bold mb-2 w-[300px] h-[3rem]">{event.studentevent}</h2>
              <p className="text-gray-300 mb-2"><strong>Date:</strong> {event.date}</p>
              <p className="text-gray-300 mb-2"><strong>Type:</strong> {event.type}</p>
              <div className="flex space-x-4">
                <a href={event.instagramlink} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Instagram</a>
                {event.websitelink && <a href={event.websitelink} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Website</a>}
                {event.linkedin && <a href={event.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">LinkedIn</a>}
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-r-md flex items-center">
        <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default EventsDisplay;
