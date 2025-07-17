import React, { useRef } from 'react';
import Carousel from "react-material-ui-carousel";
import items from "../../../../IIT_College_Link.json";

const Slide = ({ items }) => (
    <div className="rounded-lg p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <div key={i}>
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
            <h2 className="text-lg font-bold mt-2  overflow-hidden">{item.name}</h2>
            <div className="flex space-x-4">
                {item.event && <a href={item.event} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Event</a>}
                {item.career && <a href={item.career} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Career</a>}
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );

const CollegeEventLink = () => {
    const chunkSize = 4;
    const slides = [];
  
    for (let i = 0; i < items.length; i += chunkSize) {
      slides.push(items.slice(i, i + chunkSize));
    }
  
    return (
      <div className="flex justify-center  ">
      <div className=" w-[90vw] max-w-[1400px] ">
        <h4 className="text-2xl font-bold  text-center p-4 mt-12">College Events</h4>
        <Carousel animation="slide" autoPlay={true} indicators={true}>
          {slides.map((slide, i) => (
            <Slide key={i} items={slide} />
          ))}
        </Carousel>
      </div>
      </div>
    );
  };

export default CollegeEventLink;
