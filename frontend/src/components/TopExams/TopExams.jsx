import React from "react";
import Examdata from "./ExamData";
import "./Topexams.css"; // Import custom CSS for additional styling

const ExamCard = ({
  img,
  examtype,
  examname,
  participatingcolleges,
  examdate,
  examlevel,
}) => (
  <div className="exam-card bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img
          src={img}
          alt="exam"
          className="w-12 h-12 rounded-full me-2"
        />
        <div>
          <span className="bg-gray-200 px-2 py-1 text-black rounded text-center">
            {examtype}
          </span>
          <p className="text-gray-700 mb-2 text-xl font-semibold">
            {examname}
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-700">Participating Colleges</p>
        <p className="text-sm text-gray-500 font-semibold">
          {participatingcolleges}
        </p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-700">Exam Date</p>
        <p className="text-sm text-gray-500 font-semibold">{examdate}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-700">Exam Level</p>
        <p className="text-sm text-gray-500 font-semibold">{examlevel}</p>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-4 mt-2">
        <a href="#" className="text-blue-500 text-sm">
          Application Process
        </a>
        <a href="#" className="text-blue-500 text-sm text-end">
          Exam Info
        </a>
      </div>
    </div>
  </div>
);

const TopExams = () => {
  return (
    <div className="top-exams-container">
      <div className="w-full max-w-7xl mx-auto mt-4 mb-4">
        <h1 className="text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl custom_center">
          Top Exams
        </h1>
        <div className="exam-grid">
          {Examdata.map((exam, index) => (
            <ExamCard key={index} {...exam} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopExams;
