import React from "react";
import delhi from "../../Static/CityImg/delhi.png";
import mumbai from "../../Static/CityImg/mumbai.png";
import bangalore from "../../Static/CityImg/bangalore.png";
import kolkata from "../../Static/CityImg/kolkata.png";
import hyderabad from "../../Static/CityImg/hyderabad.png";

const TopCollegesPlaces = () => {
  const places = [
    {
      id: 1,
      name: "Delhi",
      img: delhi,
    },
    {
      id: 2,
      name: "Mumbai",
      img: mumbai,
    },
    {
      id: 3,
      name: "Bangalore",
      img: bangalore,
    },
    {
      id: 4,
      name: "Kolkata",
      img: kolkata,
    },
    {
      id: 5,
      name: "Hyderabad",
      img: hyderabad,
    },
  ];
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-4 mb-4">
        <h1 className=" text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl ">
          Top College Places
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center ">
          {places.map((place) => (
            <div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[150px]">
                <img
                  src={place.img}
                  alt={place.name}
                  className="h-[100px]"
                />
                <div className="p-4">
                  <p className="font-bold text-xl text-gray-800 mb-2">
                    {place.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCollegesPlaces;
