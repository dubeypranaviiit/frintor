import React, { useState, useEffect } from 'react';
import api from '../../../api';
import './collegenavbar.css'; // Assuming you have custom styles in collegenavbar.css
import CollegeTable from '../CollegeTable/CollegeTable';

const CollegePredictorInputs = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [course, setCourses] = useState([]);
  const [rank, setRank] = useState('');
  const [state, setState] = useState('');
  const [category, setCategory] = useState('General');
  const [branch, setBranch] = useState('B.Sc (Nursing)');
  const [collegeResponse, setCollegeResponse] = useState([]); // Initialize as an empty array
  const exams = ['JEE Main', 'NEET', 'DU Entrance', 'Others'];

  const getCourses = async () => {
    try {
      const response = await api.get('/courses/allcoursename');
      setCourses(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleExamChange = (e) => {
    setSelectedExam(e.target.value);
  };

  const handleRankChange = (e) => setRank(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleCourseChange2 = (e) => setBranch(e.target.value);

  const handleSubmit2 = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if selectedExam or selectedCourse is empty
    if (!selectedExam || !selectedCourse) {
      alert('Please select both Exam/University and Course.');
      return;
    }

    // Use form validation via HTML5 by checking validity
    if (!e.target.checkValidity()) {
      return;
    }

    // Convert inputs to lowercase
    const formattedRank = parseInt(rank);
    const formattedState = state.toLowerCase();
    const formattedCategory = category.toLowerCase();
    const formattedCourse = branch.toLowerCase();
    const formattedExams = selectedExam.toLowerCase();
    setCollegeResponse([])
    try {

      const response = await api.post('/cutoffs/predictor', {
        rank: formattedRank,
        state: formattedState,
        category: formattedCategory,
        branch: formattedCourse,
        course: selectedCourse,
        exams: formattedExams,
      });

      if (response.data.success === true) {
        // console.log(response.data.data);
        setCollegeResponse(response.data.data);
        setRank('');
        setState('');
        setCategory('General');
        setBranch('B.Sc (Nursing)');
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="bg-gray-800 text-white p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">
          College Predictor 2024 for JEE Main, NEET, DU and other top Universities and Exams
        </h1>
        <div className="display-handler justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Select Course */}
          <div className="relative">
            <select
              value={selectedCourse}
              onChange={handleCourseChange}
              className="block appearance-none w-full bg-white text-black py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="" disabled>Select Course</option>
              {course.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-4-4h8z"/></svg>
            </div>
          </div>

          {/* Select Exam/University */}
          <div className="relative">
            <select
              value={selectedExam}
              onChange={handleExamChange}
              className="block appearance-none w-full bg-white text-black py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            >
              <option value="" disabled>Select Exam/University</option>
              {exams.map((exam) => (
                <option key={exam} value={exam}>
                  {exam}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-4-4h8z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className='display-handler justify-center items-center'>
        <div className="flex justify-center items-center w-[95vw] bg-gray-100 mt-4 mb-4">
          <div className="bg-white p-8 rounded shadow-md w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">College Predictor</h1>
            <form onSubmit={handleSubmit2}>
              <div className='display-handler flex-wrap justify-evenly'>
                <div className="mb-4 input_width">
                  <label className="block text-gray-700">Enter your rank</label>
                  <input
                    type="number"
                    value={rank}
                    onChange={handleRankChange}
                    className="mt-1 p-2 w-full border rounded"
                    required
                  />
                </div>
                <div className="mb-4 input_width">
                  <label className="block text-gray-700">Select State</label>
                  <select
                    value={state}
                    onChange={handleStateChange}
                    className="mt-1 p-2 w-full border rounded"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="State1">State1</option>
                    <option value="State2">State2</option>
                    {/* Add more states as needed */}
                  </select>
                </div>
              </div>
              <div className='display-handler flex-wrap justify-evenly'>
                <div className="mb-4 input_width">
                  <label className="block text-gray-700">Reservation Category</label>
                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="mt-1 p-2 w-full border rounded"
                    required
                  >
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    {/* Add more categories as needed */}
                  </select>
                </div>
                <div className="mb-4 input_width">
                  <label className="block text-gray-700">Select Course</label>
                  <select
                    value={branch}
                    onChange={handleCourseChange2}
                    className="mt-1 p-2 w-full border rounded"
                    required
                  >
                    <option value="B.Sc (Nursing)">B.Sc (Nursing)</option>
                    <option value="MBBS">MBBS</option>
                    <option value="B.Tech">B.Tech</option>
                    {/* Add more courses as needed */}
                  </select>
                </div>
              </div>
              <div className='justify-center items-center flex'>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 max-w-[250px]"
                >
                  Check results
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Conditionally render CollegeTable if collegeResponse is not empty */}
      {(collegeResponse.length >0) && <CollegeTable collegeResponse={collegeResponse} />}
    </div>
  );
};

export default CollegePredictorInputs;
