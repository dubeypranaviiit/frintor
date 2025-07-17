import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ComparisonTable({ data, college2 }) {
  
  const selectedColleges = data.filter(college => college2.includes(college.collegename));

  // Extracting all facility names dynamically from the first object in data, excluding 'SEARCHCOUNT'
  const facilityNames = Object.keys(selectedColleges[0]).filter(key => key !== 'collegename' && key !== '_id' && key.toUpperCase() !== 'SEARCHCOUNT');

  return (
    <div className='mb-10 min-w-[300px] w-[85vw]'>
      <TableContainer component={Paper}>
        <h2 className="text-2xl font-semibold mb-4 ms-3 mt-3 text-center"> Comparison Table</h2>
        <Table aria-label="comparison table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: '600' }}>Facility</TableCell>
              {selectedColleges.map((college, index) => (
                <TableCell key={index} align="left" sx={{ fontWeight: '600' }}>
                  {college.collegename}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {facilityNames.map((facility, facilityIndex) => (
              <TableRow key={facilityIndex}>
                <TableCell component="th" scope="row" align="left" sx={{ fontWeight: '700', fontSize: '12px' }}>
                  {facility.toUpperCase()}
                </TableCell>
                {selectedColleges.map((college, collegeIndex) => (
                  <TableCell key={collegeIndex} align="left" sx={{ fontWeight: '400', fontSize: '12px' }}>
                    {typeof college[facility] === 'boolean' ? college[facility].toString() : college[facility]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ComparisonTable;
