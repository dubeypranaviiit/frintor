import React, { useState, useEffect, useCallback } from "react";
import api from "./../../api";
import "./FindCollege.css";
import { useNavigate } from "react-router-dom";

const FindCollege = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const setCollegeid = (college) => {
    navigate(`/collegeInformation/${college._id}`);
  };

  // Fetch colleges from the API
  const fetchColleges = async (term) => {
    if (!term) {
      setFilteredColleges([]);
      return;
    }

    setIsLoading(true); // Start loading
    try {
      //   const response = await api.get(
      //     `http://localhost:9005/colleges/namedummy?searchTerm=${encodeURIComponent(
      //       term
      //     )}`
      const response = await api.get(
        `${
          process.env.REACT_APP_BACKEN_URL
        }/colleges/namedummy?searchTerm=${encodeURIComponent(term)}`
      );
      if (response.data.success) {
        setFilteredColleges(response.data.data.colleges); // Update filtered colleges
      } else {
        setFilteredColleges([]);
      }
    } catch (error) {
      console.error("Error fetching colleges:", error);
      setFilteredColleges([]); // Reset on error
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedFetchColleges = useCallback(debounce(fetchColleges, 1500), []); // 2-second delay

  useEffect(() => {
    debouncedFetchColleges(searchTerm); // Call the debounced function on search term change
  }, [searchTerm, debouncedFetchColleges]); // Include debouncedFetchColleges in dependencies

  return (
    <div className="find-college-container min-h-full">
      <div className="oxford">
        <img src="/oxford.jpg" alt="college" loading="lazy" />
      </div>
      <h1 className="margin-top-20 text-white font-semibold z-50 text-3xl">
        Find College Details here
      </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a college..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {isLoading && <div className="loading">Loading...</div>}{" "}
        {/* Show loading indicator */}
        {searchTerm && filteredColleges.length > 0 && (
          <div className="search-dropdown">
            {filteredColleges.map((college) => (
              <div
                key={college._id}
                className="dropdown-item"
                onClick={() => setCollegeid(college)}
              >
                {college.collegename}
              </div>
            ))}
          </div>
        )}
        {searchTerm && filteredColleges.length === 0 && !isLoading && (
          <div className="p-3 bg-white ">No colleges found.</div>
        )}
      </div>
    </div>
  );
};

export default FindCollege;
