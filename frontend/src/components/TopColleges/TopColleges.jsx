import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { topTenColleges } from "../../Static/dummydata/dummy";
import "./TopCollegescss.css";

const TopColleges = () => {
  const [college, setCollege] = useState("Btech");
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(100, containerWidth / 2);
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(100, containerWidth / 2);
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCollege = (colleges) => {
    setCollege(colleges);
  };

  const collegeData = [
    {
      id: 1,
      type: "Btech",
    },
    {
      id: 2,
      type: "Mtech",
    },
    {
      id: 3,
      type: "MBA",
    },
  ];

  return (
    <div className="mb-6">
      <div className="w-full max-w-7xl mx-auto item-center mb-6">
        <h1 className="text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
          Top 10 Colleges
        </h1>
        <div className="flex items-center justify-between">
          <button
            onClick={handleScrollLeft}
            className="carousel-button bg-opacity-70 text-black p-2 rounded-full smooth-transition"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div
            className="flex gap-3 w-full max-w-7xl mx-auto overflow-x-auto overflow-handle"
            ref={containerRef}
          >
            {collegeData.map((colleges) => (
              <div
                key={colleges.id}
                className={`scrollbar-hide px-6 mx-1 py-2 hover:cursor-pointer rounded-lg transition-all duration-300 ${colleges.type === college
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                  }`}
                onClick={() => {
                  handleCollege(colleges.type);
                }}
              >
                {colleges.type}
              </div>
            ))}
          </div>
          <button
            onClick={handleScrollRight}
            className="carousel-button bg-opacity-70 text-black p-2 rounded-full smooth-transition"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="flex flex-col mt-4 ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Rank
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        College
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Ranking
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Cutoff
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Application Deadline
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Fees
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {topTenColleges.map((college) => (
                      <tr key={college.rank}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          #{college.rank}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="text-base font-bold">
                            {college.name}
                          </span>
                          <br />
                          <div>{college.location} | {college.rating}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {college.ranking}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {college.cutoff}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {college.deadline}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {college.fees}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopColleges;
