// CollegeTable.js

import React from 'react';

const CollegeTable = ({ collegeResponse }) => {
  return (
    <div className='flex items-center justify-center mb-4'>
    <div className="mt-8 w-[90vw]">
      <h2 className="text-2xl font-bold mb-4">Predicted Colleges</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                College Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                State
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {collegeResponse?.map((college, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{college.collegename}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{college.state}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{college.city}</td>
                {/* Adjust table data fields based on response structure */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default CollegeTable;
