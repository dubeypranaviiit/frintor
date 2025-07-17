import React from 'react';
import CSRCard from './CSRCard';

const csrData = [
     
        {
          image: '/robot.jpg',
          header: 'Robotics Labs',
          description: 'Advanced robotics labs equipped with state-of-the-art technology for hands-on learning and experimentation in robotics and automation...',
          link: '#',
          bgColor: 'bg-purple-500' // Updated background color
        },
        {
          image: '/bulb.jpg',
          header: 'Thinker Lab',
          description: 'A creative space where students explore ideas and innovate using modern tools and technology, fostering critical thinking and problem-solving skills...',
          link: '#',
          bgColor: 'bg-yellow-500' // Updated background color
        },
        {
          image: '/miniproject.jpg',
          header: 'Mini Projects',
          description: 'Engaging mini projects that encourage students to apply theoretical knowledge into practical solutions, enhancing their skills in various domains...',
          link: '#',
          bgColor: 'bg-indigo-500' // Updated background color
        },
        {
          image: '/webinar.jpg',
          header: 'Webinars',
          description: 'Interactive online sessions featuring industry experts and thought leaders discussing the latest trends, technologies, and innovations...',
          link: '#',
          bgColor: 'bg-pink-500' // Updated background color
        }
      ];
      
      // Example structure for sections array

const CSRSolution = () => {
    return (
        <div className='flex flex-col justify-center '>
            <h1 className=' text-white font-semibold text-lg bg-blue-900 p-4'>
                Stem Project Based Learning
            </h1>
        <div className="bg-gray-100  p-8 flex flex-wrap justify-center"
        style={{ backgroundImage: 'url(/bg-tech.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' } }
        > 
           
            {csrData.map((data, index) => (
                <CSRCard 
                    key={index}
                    image={data.image}
                    header={data.header}
                    description={data.description}
                    link={data.link}
                    bgColor={data.bgColor}
                />
            ))}
        </div>
        </div>
    );
};

export default CSRSolution;
