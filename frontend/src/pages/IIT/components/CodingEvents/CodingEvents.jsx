import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CodingEvents = () => {
  const events = [
    { name: 'Top Coder', date: 'April 20-21' },
    { name: 'Coder Byte', date: 'April 20-21' },
    { name: 'Leet Code', date: 'April 20-21' },
    { name: 'Code Forces', date: 'April 20-21' },
    { name: 'Kaggle', date: 'April 20-21' },
    { name: 'Google Code Jam', date: 'April 20-21' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3, // Change slidesToScroll to 1 to ensure one card scrolls at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1224, // large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3, // Adjust slidesToScroll accordingly
        }
      },
      {
        breakpoint: 1124, // medium-large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 880, // medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const getBackgroundColor = (name) => {
    const firstLetter = name.charAt(0).toLowerCase();
    
    // Assigning colors based on ranges of first letters
    if ('axyzog'.includes(firstLetter)) {
      return 'bg-[rgb(93,174,255)]'; // Range: a-e
    } else if ('fhj'.includes(firstLetter)) {
      return 'bg-[#50e87c]'; // Range: f-k
    } else if ('lmbn'.includes(firstLetter)) {
      return 'bg-[#c8bbff]'; // Range: l-p
    } else if ('pqrist'.includes(firstLetter)) {
      return 'bg-[#ffdd80]'; // Range: q-u
    } else if ('kuvwcde'.includes(firstLetter)) {
      return 'bg-[#fec192]'; // Range: v-z
    } else {
      return 'bg-[#ffb1cc]'; // Default
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-[95%]">
        <div className="text-center py-2 rounded-t-lg">
          <h1 className="text-3xl font-semibold text-gray-800">CODING EVENTS</h1>
        </div>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="flex justify-center">
              <div className="mx-2"> {/* Added margin to each card */}
                <div className={`rounded-lg shadow-md overflow-hidden min-w-[220px] min-h-[220px] flex flex-col items-center justify-center ${getBackgroundColor(event.name)}`}>
                  <div className="px-6 py-4 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
                    <p className="text-gray-600 mt-2">{event.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CodingEvents;
