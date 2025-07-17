import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CustomCardSlider from '../cards/CustomCardSlider';
import { collegeData, cardData, colleges } from '../../Static/dummydata/dummy';

const CollegeCard = () => {

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [college, setCollege] = useState("Btech");
  const handleScrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(100, containerWidth / 2);
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(100, containerWidth / 2);
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCollege = (colleges) => {
    setCollege(colleges);
  };


  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);





  return (
    <div className="flex flex-col mb-11 items-center mt-10 overflow-hidden" >
      <div className="flex max-w-7xl w-full px-4">
        <h1 className="text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl">
          Explore Our Programs
        </h1>
      </div>

      <CustomCardSlider cards={cardData} college={college} />
    </div>
  )
}

export default CollegeCard
