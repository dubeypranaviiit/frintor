import React from "react";
import './ExploreCourses.css';
const CourseCard = ({
  type,
  name,
  duration,
  fees,
  totalcollege,
  coursesLink,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto  w-[250px]">
    <div className="p-4">
      <div className="flex items-center mb-3">
        <div className="bg-gray-300 text-black rounded-md text-center py-1 px-3 text-sm custom_height type">
          {type}
        </div>
        <div className="ml-3 text-gray-700 text-lg font-semibold custom_height">{name}</div>
      </div>
      <div className="flex justify-between text-gray-600 mb-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 3a1 1 0 011-1h2a1 1 0 011 1v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0V8H9a1 1 0 01-1-1V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">{duration}</span>
        </div>
        <div className="text-sm font-semibold">{fees}</div>
      </div>
      <div className="flex justify-between text-gray-600 mb-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 3a1 1 0 011-1h2a1 1 0 011 1v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0V8H9a1 1 0 01-1-1V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">Colleges: {totalcollege}</span>
        </div>
        
      </div>
      <div className="text-sm">{coursesLink && <a href={coursesLink} className="text-blue-500">View Courses</a>}</div>
    </div>
    
  </div>
);

export default CourseCard;
