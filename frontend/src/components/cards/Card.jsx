import React, { useRef, useEffect, useState } from 'react';
import './Card.css';

const Card = ({ image, title, description, points, footer }) => {
  const containerRef = useRef(null);
  const [hiddenIndexes, setHiddenIndexes] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    const hidden = [];
    points.forEach((point, index) => {
      const el = document.createElement('div');
      el.className = 'point';
      el.innerText = point;
      document.body.appendChild(el);
      if (el.scrollWidth > el.clientWidth) {
        hidden.push(index);
      }
      document.body.removeChild(el);
    });
    setHiddenIndexes(hidden);
  }, [description, points, footer]); // Update when content changes


  return (
    <div>
    <div className="card flex-col width overflow-hidden">
    <div className="flex ">
     
      <div className="flex flex-col flex-grow ml-4 ">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800 title-container">{title}</h2>
            <div className="description-container">
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        </div>
       
       
      </div>
      <div className="flex-shrink-0 w-35">
        <img className="card-image w-full h-auto object-cover rounded-lg" src={image} alt={title} />
      </div>
      
    </div>
    <div className="points-container-wrapper">
      <div className="points-container flex flex-wrap gap-2 my-4" ref={containerRef}>
        {points.map((point, index) => (
          <div key={index} className={`point  text-sm ${hiddenIndexes.includes(index) ? 'hidden' : ''}`}>
            {point}
          </div>
        ))}
      </div>
    </div>


        <div className="mt-4">
          <p className="text-sm text-gray-600">{footer}</p>
        </div>
    </div>
    </div>
  );
};

export default Card;
