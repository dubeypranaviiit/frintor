import React, { useState } from 'react';
import Comparedropdowncard from './comapre/Comparedropdowncard';
import './compare.css'
import ComparisonTable from './table/ComparisionTable';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect } from 'react';
import  api  from '../../api';

const CompareAllCollege = () => {
  const [dummyData, setDummyData] = useState([]);
  const [college2, setCollege2] = useState([]);
  const [selectedType, setSelectedType] = useState('btech'); // Default type

  const fetchData = async () => {
    // console.log('fetching data');
    try {
      const response = await api.get('/colleges');
      if (response.data.success) {
        setDummyData(response.data.data);
      } else {
        // console.log('Error fetching data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeCollege = (college) => {
    setCollege2(college2.filter((c) => c !== college));
  };

  const buttonClass = (type) => (
    `px-4 py-2 mr-2 rounded ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} hover:bg-blue-600`
  );

  return (
    <div style={{  minHeight: '80vh', height: '100%' }}>
     
      <div className="flex justify-center items-center">
        
        <div className="max-w-4xl w-[90vw] bg-transparent mt-4 p-1 mb-4 rounded-lg ">
   
          <h2 className="text-3xl font-semibold text-center">
            Select Colleges to Compare
          </h2>
          <div className="flex justify-center mt-4">
            <button
              className={buttonClass('btech')}
              onClick={() => setSelectedType('btech')}
            >
              BTech
            </button>
            <button
              className={buttonClass('mtech')}
              onClick={() => setSelectedType('mtech')}
            >
              MTech
            </button>
            <button
              className={buttonClass('mba')}
              onClick={() => setSelectedType('mba')}
            >
              MBA
            </button>
          </div>
          <div className="flex flex-col flex-wrap lg:gap-5 gap-3 md:gap-6 sm:gap-2 justify-between p-4 items-center w-full ">
            <div className=''>
              <Comparedropdowncard
                type={selectedType} // Pass the selected type
                data={dummyData}
                setSelectedCollege={setCollege2}
                selectedCollege={college2}
              />
            </div>
            <div className="w-full min-h-[20vh]">
              <div className='flex flex-wrap gap-3 items-center justify-start'>
                {college2.map((college) => (
                  <div key={college} className='flex gap-1 py-1 px-3 justify-start items-center border rounded-full bg-blue-50'>
                    <p className='text-sm font-sm'>{college}</p>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeCollege(college)}
                    >
                      <AiOutlineClose className='bg-red-50 rounded-full' />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-col items-center'>
        {college2.length > 0 && dummyData.length > 0 && (
          <ComparisonTable college2={college2} data={dummyData} />
        )}
      </div>
    </div>
  );
};

export default CompareAllCollege;