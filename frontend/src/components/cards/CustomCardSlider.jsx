import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CustomCardSlider = ({ cards, college }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const carduseref = useRef(null);
  const [cardwidth, setCardwidth] = useState(300);
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

  }, []);


  const updateSlidesPerView = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const cardWidth = 300; // Adjust this value to match the width of your cards
      const newSlidesPerView = Math.floor(containerWidth / cardWidth);
      setSlidesPerView(newSlidesPerView);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesPerView) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesPerView + cards.length) % cards.length);
  };





  const handleScrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(280, containerWidth / 2); // Limit scroll to 100 pixels or display size - 50
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(280, containerWidth / 2); // Limit scroll to 100 pixels or display size - 50
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };



  return (
    <div className='max-width space-around'>
      <div className='flex'>
        <button
          onClick={handleScrollLeft}
          className=" bg-opacity-70 text-black p-2 rounded-full smooth-transition"
        >


          {
            containerWidth > 600 ? <FontAwesomeIcon icon={faChevronLeft} /> : <div></div>
          }
        </button>
        <div className='flex gap-11 w-full max-w-7xl mx-auto overflow-x-auto  overflow-handle p-3' ref={containerRef}>
          {cards.map((card) => (
            <Link to={`/${card.url.toLowerCase()}`}>
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
                points={card.points}
                footer={card.footer} />
            </Link>
          ))}

        </div>
        <button
          onClick={handleScrollRight}
          className=" bg-opacity-70 text-black p-2 rounded-full smooth-transition"
        >


          {
            containerWidth > 600 ? <FontAwesomeIcon icon={faChevronRight} /> : <div></div>
          }
        </button>
      </div>
    </div>

  );
};

export default CustomCardSlider;
