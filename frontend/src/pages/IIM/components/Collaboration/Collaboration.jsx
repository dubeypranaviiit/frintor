import React,{useState} from 'react';

function Collaboration() {
  // Data for each collaboration entry
  const collaborations = [
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'Impact of Social Media on Mental Health',
      university: 'MIT'
    },
    {
      department: 'Computer Science',
      professor: 'John Doe',
      research: 'Machine Learning Algorithms',
      university: 'Stanford University'
    },
    {
      department: 'Biology',
      professor: 'Jane Roe',
      research: 'Genetic Engineering',
      university: 'Harvard University'
    },
    {
      department: 'Physics',
      professor: 'Albert Newton',
      research: 'Quantum Mechanics',
      university: 'Caltech'
    },
    {
      department: 'Mathematics',
      professor: 'Isaac Euler',
      research: 'Number Theory',
      university: 'Princeton University'
    },
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'AI in Healthcare',
      university: 'MIT'
    },
    {
      department: 'Psychology',
      professor: 'Sigmund Freud',
      research: 'Cognitive Behavioral Therapy',
      university: 'Yale University'
    },
    {
      department: 'Chemistry',
      professor: 'Marie Curie',
      research: 'Radiochemistry',
      university: 'University of Oxford'
    },
    {
      department: 'Economics',
      professor: 'Adam Smith',
      research: 'Behavioral Economics',
      university: 'University of Chicago'
    },
    {
      department: 'History',
      professor: 'Howard Zinn',
      research: 'Civil Rights Movement',
      university: 'Boston University'
    },
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'Robotics',
      university: 'MIT'
    },
    {
      department: 'Environmental Science',
      professor: 'Rachel Carson',
      research: 'Climate Change',
      university: 'UC Berkeley'
    },
    {
      department: 'Philosophy',
      professor: 'Plato Aristotle',
      research: 'Ethics and Morality',
      university: 'University of Cambridge'
    },
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'Renewable Energy',
      university: 'MIT'
    },
    {
      department: 'Sociology',
      professor: 'Max Weber',
      research: 'Social Stratification',
      university: 'University of Michigan'
    },
    {
      department: 'Political Science',
      professor: 'John Locke',
      research: 'Governance and Policy',
      university: 'Columbia University'
    },
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'Nanotechnology',
      university: 'MIT'
    },
    {
      department: 'Anthropology',
      professor: 'Margaret Mead',
      research: 'Cultural Anthropology',
      university: 'Duke University'
    },
    {
      department: 'Linguistics',
      professor: 'Noam Chomsky',
      research: 'Syntax and Semantics',
      university: 'MIT'
    },
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'Biomechanics',
      university: 'MIT'
    }
  ];


  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(visibleCount + 6);
  };
  
  const showLess = ()=>{
    setVisibleCount(6);
  }

  return (
    <div className="p-6 flex flex-col mt-4">
      <div className="w-[95%] mx-auto">
        <div className="text-center  rounded-t-lg">
          <h1 className="text-3xl font-bold ">COLLABORATION</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 rounded-b-lg">
          {collaborations.slice(0, visibleCount).map((collab, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
              <h3 className="text-blue-900 text-xl font-semibold mb-2">{collab.department}</h3>
              <div className="text-gray-700">
                <p><strong>Professor:</strong> {collab.professor}</p>
                <p><strong>Research:</strong> {collab.research}</p>
                <p><strong>University:</strong> {collab.university}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < collaborations.length ? (
          <div className="text-center mt-4">
            <button 
              onClick={showMore} 
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Show More
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <button 
              onClick={showLess} 
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collaboration;