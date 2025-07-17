import React, { useEffect, useRef } from 'react';


// import asianpaints from '/asianpaints.png';
// import flipkart from '/flipkart.png';
// import loreal from '/loreal.png';
// import wipro from '/wipro.png';
// import walmart from '/walmart.png';

const logos = [
  '/adityabirla.png',
  '/amazon.png',
  '/asianpaints.png',
  '/flipkart.png',
  '/loreal.png',
  '/wipro.png',
  '/walmart.png',
  '/adityabirla.png',
  '/amazon.png',
  '/asianpaints.png',
  '/flipkart.png',
  '/loreal.png',
  '/wipro.png',
  '/walmart.png'


];

const ContinuousSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let isHovered = false;

    const animate = () => {
      if (!isHovered) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    slider.addEventListener('mouseover', () => {
      isHovered = true;
    });

    slider.addEventListener('mouseout', () => {
      isHovered = false;
    });

    return () => {
      slider.removeEventListener('mouseover', () => { isHovered = true; });
      slider.removeEventListener('mouseout', () => { isHovered = false; });
    };
  }, []);

  return (
    <div className="slider-container overflow-hidden whitespace-nowrap" ref={sliderRef}>
      <div className="slider-content flex items-center ">
        {logos.concat(logos).map((logo, index) => (
          <img src={logo} alt={`Logo ${index}`} className="logo h-20 mx-2" key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContinuousSlider;
