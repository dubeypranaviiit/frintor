import React, { useEffect, useState } from 'react';
import api from './../../../api';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './CollegeDetails.css';
import ErrorPage from '../../ErrorPage';
 // Import the ErrorPage component

const CollegeDetails = () => {
  const [college, setCollege] = useState(null);
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [cutoff, setCutoff] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(8);
  const [loading, setLoading] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [error, setError] = useState(null); // Add state for error

  const showMoreCourses = () => {
    setVisibleCourses(prevVisibleCourses => prevVisibleCourses + 4);
  };

  const collegebyid = async () => {
    try {
      const response = await api.get(`/colleges//searchidummy/${id}`);

      if (response.data.success) {
        setCollege(response.data.data);
        // setCourse(response.data.data.course);
        setCourse(response.data.data.courses);
        console.log(course)
        setCutoff(response.data.data?.cutoffs);
        console.log(response.data.data);
      } else {
        // console.log('Error fetching college details');
        setError('Error fetching college details.'); // Set error message
      }
    } catch (error) {
      // console.log('Error:', error);
      setError('Error fetching college details.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    collegebyid();
  }, [id]);

  useEffect(() => {
    if (college) {
      setLoadingCourses(false);
    }
  }, [college]);

  if (loading) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <ErrorPage message={error} />; // Render ErrorPage component if there's an error
  }

  return (
    <div className="hide-scrollbar relative">
      <div className='flex justify-center items-center'>
        <img src='/oxford.jpg' className='w-[98vw] object-cover h-[60vh] rounded-xl' alt="College" loading='lazy' />
      </div>
      <div className="flex justify-start ps-[1vw] items-center text-center mt-4 mb-2">
        <p className="college-name">{college.collegename}</p>
      </div>
      
      <div className='flex justify-center  items-start mt-2 mb-4'>
        <div className="flex flex-row gap-11 max-w-[98vw] flex-wrap p-4 rounded-lg bg-white">
          {Object.entries(college).map(([key, value]) => (
            key !== '_id' && key !== '__v' && key !== 'courses' && key !== 'cutoffs' && key !== 'image' && key.toUpperCase() !== "SEARCHCOUNT" && (
              <div 
              key={key} 
              className="flex flex-col shadow-none border-none p-4 max-w-[300px] text-ellipsis break-words"
            >
                <span className="text-gray-600 text-sm uppercase ">{key}</span>
                {key === 'website' ? (
                  <a href={value} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">{value}</a>
                ) : (
                  <span className="font-semibold">{value?.toString()}</span>
                )}
              </div>
            )
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center'>
        <p className='ps-[1vw] text-2xl font-semibold'>Explore the programs</p>
        {loadingCourses ? (
          <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
          </div>
        ) : (
          
          <div className="flex flex-wrap justify-between p-[1vw]">
           
            {course?.slice(0, visibleCourses).map(course => (
              <div key={course._id} className="max-w-sm mx-1 my-4 bg-white shadow-sm rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{course.coursename}</div>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(course).map(([key, value]) => (
                      key !== '_id' && key !== '__v' && key !== 'coursename' && key.toLowerCase() !== "searchcount" && (
                        <div key={key} className="flex flex-col">
                          <span className="text-sm uppercase font-semibold">{key}</span>
                          <span className="text-gray-600">{value?.toString()}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {visibleCourses < course?.length && !loadingCourses && (
          <div className='flex justify-center items-center w-full'>
            <button
              onClick={showMoreCourses}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 my-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* <div className='flex flex-col justify-center p-1'>
        <p className='ps-[4vw] text-2xl font-semibold '>Know the cutoffs</p>
        {loadingCourses ? (
          <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
          </div>
        ) : (
          <div className='flex justify-center items-center mb-4 mt-2'>
            <TableContainer component={Paper} className='max-w-[95vw]'>
              <Table sx={{ minWidth: 650 }} aria-label="cutoff table">
                <TableHead>
                  <TableRow sx={{ fontWeight: 'bold' }}>
                    <TableCell align="center">Course</TableCell>
                    <TableCell align="center">Branch</TableCell>
                    <TableCell align="center">General Male</TableCell>
                    <TableCell align="center">General Female</TableCell>
                    <TableCell align="center">OBC Male</TableCell>
                    <TableCell align="center">OBC Female</TableCell>
                    <TableCell align="center">SC Male</TableCell>
                    <TableCell align="center">SC Female</TableCell>
                    <TableCell align="center">ST Male</TableCell>
                    <TableCell align="center">ST Female</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cutoff?.slice(0, visibleCourses).map(course => (
                    <TableRow key={course._id} sx={{ justifyContent: 'center', textAlign: 'center' }}>
                      <TableCell align="center">{course.course.coursename}</TableCell>
                      <TableCell align="center">{course.course.branchname}</TableCell>
                      <TableCell align="center">{course.general?.male}</TableCell>
                      <TableCell align="center">{course.general?.female}</TableCell>
                      <TableCell align="center">{course.obcncl?.male}</TableCell>
                      <TableCell align="center">{course.obcncl?.female}</TableCell>
                      <TableCell align="center">{course.sc?.male}</TableCell>
                      <TableCell align="center">{course.sc?.female}</TableCell>
                      <TableCell align="center">{course.st?.male}</TableCell>
                      <TableCell align="center">{course.st?.female}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}

        {visibleCourses < cutoff?.length && !loadingCourses && (
          <div className='flex justify-center items-center w-full'>
            <Button
              onClick={showMoreCourses}
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Show More
            </Button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CollegeDetails;
