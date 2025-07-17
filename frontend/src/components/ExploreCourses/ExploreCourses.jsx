import React, { useState } from "react";
import CourseCard from "./CourseCard"; // Assuming CourseCard component is in a separate file
import "./ExploreCourses.css"; // Custom CSS for additional styling

const ExploreCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState("Bachelors");
  const [visibleRows, setVisibleRows] = useState(2);

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
  };

  const handleShowMore = () => {
    setVisibleRows(visibleRows + 2);
  };

  const courseData = [
    {
      type: "Full Time",
      name: "B.Com General",
      duration: "3 Years",
      fees: "₹150,000",
      totalcollege: 3431,
      coursesLink: "#",
    },
    {
      type: "Full Time",
      name: "MBA",
      duration: "2 Years",
      fees: "₹300,000",
      totalcollege: 2100,
      coursesLink: "#",
    },
    {
      type: "Part Time",
      name: "Diploma in Design",
      duration: "1 Year",
      fees: "₹100,000",
      totalcollege: 1500,
      coursesLink: "#",
    },
    {
      type: "Full Time",
      name: "Ph.D. in Computer Science",
      duration: "4 Years",
      fees: "₹500,000",
      totalcollege: 500,
      coursesLink: "#",
    },
    {
      type: "Full Time",
      name: "MBA",
      duration: "2 Years",
      fees: "₹300,000",
      totalcollege: 2100,
      coursesLink: "#",
    },
    {
      type: "Part Time",
      name: "Diploma in Design",
      duration: "1 Year",
      fees: "₹100,000",
      totalcollege: 1500,
      coursesLink: "#",
    },
    {
      type: "Full Time",
      name: "Ph.D. in Computer Science",
      duration: "4 Years",
      fees: "₹500,000",
      totalcollege: 500,
      coursesLink: "#",
    },
    {
      type: "Full Time",
      name: "B.Com General",
      duration: "3 Years",
      fees: "₹150,000",
      totalcollege: 3431,
      coursesLink: "#",
    },
    {
      type: "Full Time",
      name: "MBA",
      duration: "2 Years",
      fees: "₹300,000",
      totalcollege: 2100,
      coursesLink: "#",
    },
    {
      type: "Part Time",
      name: "Diploma in Design",
      duration: "1 Year",
      fees: "₹100,000",
      totalcollege: 1500,
      coursesLink: "#",
    },
    {
      type: "Full Time",
      name: "Ph.D. in Computer Science",
      duration: "4 Years",
      fees: "₹500,000",
      totalcollege: 500,
      coursesLink: "#",
    },
  ];

  const courses = [
    { id: 1, name: "Bachelors" },
    { id: 2, name: "Masters" },
    { id: 3, name: "Doctorate" },
    { id: 4, name: "Diploma" },
    { id: 5, name: "Certification" },
  ];

  const itemsToShow = visibleRows * 2; // Adjust this multiplier based on the number of columns you expect per row.

  return (
    <div className="explore-courses-container">
      <div className="max-w-7xl mx-auto mt-4 mb-4">
        <h1 className="text-gray-600 text-2xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-custom">
          Explore Courses
        </h1>
        <div className="course-types flex gap-3 overflow-x-auto py-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-type-button px-6 py-2 rounded-lg text-center cursor-pointer whitespace-nowrap ${course.name === selectedCourse
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
                }`}
              onClick={() => handleCourseChange(course.name)}
            >
              {course.name}
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5`}>
          {courseData.slice(0, itemsToShow).map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {itemsToShow < courseData.length && (
          <button
            onClick={handleShowMore}
            className="bg-blue-500 text-white p-2 rounded-lg mt-2"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default ExploreCourses;
