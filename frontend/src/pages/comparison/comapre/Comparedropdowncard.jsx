import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import options from './../options'; // Assuming options are imported correctly
import './compare.css';

const Comparedropdowncard = ({ type, selectedCollege, setSelectedCollege }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const colleges = options.find(option => option.type === type)?.colleges || [];
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSelectionDisabled, setIsSelectionDisabled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setFilteredColleges(
      colleges.filter(college =>
        college.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, colleges]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setIsDropdownVisible(term.length > 0); // Toggle dropdown visibility based on search term
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsDropdownVisible(false);
  };

  const handleSelectCollege = (college) => {
    setIsSelectionDisabled(true); // Disable selection button

    // Check if college already exists in selected list
    if (selectedCollege.includes(college)) {
      console.warn('College already selected.');
      setIsSelectionDisabled(false); // Re-enable selection button
      return;
    }

    // Check if maximum list size (5) is reached
    if (selectedCollege.length >= 5) {
      console.warn('Maximum 5 colleges can be selected.');
      setIsSelectionDisabled(false); // Re-enable selection button
      return;
    }

    setSelectedCollege(prev => [...prev, college]);
    setSearchTerm(''); // Clear search term after selection
    setIsDropdownVisible(false); // Hide dropdown
    setIsSelectionDisabled(false); // Re-enable selection button
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className={`${selectedCollege.length >= 5 ? "d-none " : "flex items-center border border-gray-300 rounded px-2 py-1"}`}>
        <AiOutlineSearch className={`${selectedCollege.length >= 5 ? "d-none" : "mx-1"}`} />
        <input
          type="text"
          className={`${selectedCollege.length >= 5 ? "d-none " : " text-gray-600  mx-1"}`}
          placeholder={selectedCollege.length >= 5 ? "Maximum 5 colleges selected" : "Search College"}
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setIsDropdownVisible(true)}
          disabled={isSelectionDisabled} // Disable input when selection is disabled
        />
        {searchTerm && (
          <AiOutlineClose
            className="text-gray-500 cursor-pointer"
            onClick={handleClearSearch}
          />
        )}
      </div>
      {isDropdownVisible && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto z-10">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college, index) => (
              <div
                key={index}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isSelectionDisabled ? 'pointer-events-none' : ''}`}
                onClick={() => handleSelectCollege(college)} // Prevent selection when disabled
              >
                {college}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comparedropdowncard;
