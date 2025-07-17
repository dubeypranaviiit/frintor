import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import './search.css';

const Search = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className='flex flex-col items-center mt-2 p-2 max-w-[90]'>
      <div>
        <img className='main-logo' src="/frintor.png" alt='logo' />
      </div>

      <div className='search-bar bg-gray-200 shadow-md rounded-full p-0 flex gap-1 min-width'>
       
        <div className='bg-white flex items-center rounded-s-xl'>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className=' p-2 rounded-s-xl shadow-md'
          >
            <option value='' disabled>Browse</option>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='flex-1 flex items-center bg-white rounded-e-xl'>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='text-field p-2 flex-1 shadow-md'
            placeholder='Search...'
          />
          <button onClick={handleSearch} className='search-button rounded-e-xl shadow-md'>
            <IoSearchSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
