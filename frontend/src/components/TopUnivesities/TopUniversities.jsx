import React from "react";
import './topuniversity.css'
const UniversityCard = ({
  name,
  location,
  program,
  fees,
  rank,
  reviews,
  coursesLink,
  brochureLink,
  compareLink,
  image,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[80vw] p-2 items-center max-w-[358px]">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <div
        className="absolute top-0 left-0 text-white text-xs px-2 py-1"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-lightgray-500 mb-2">{location}</p>
      </div>
    </div>
    <div className="p-4">
      <p className="text-sm text-gray-700 mb-2">{program}</p>
      <div className="flex justify-between">
        <p className="text-sm text-gray-700 mb-2">₹{fees} First Year Fees</p>
        <p className="text-sm text-gray-500 mb-2">{reviews} reviews</p>
      </div>

      <hr />
      <p className="text-sm text-gray-700 mb-2">Ranked {rank}</p>
      <hr />

      <hr />
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3">
          <div className="col-span">
            <a href={coursesLink} className="text-blue-500 text-sm">
              View All Courses and fees
            </a>
          </div>
          <hr />
          <div className="col-span">
            <a href={brochureLink} className="text-blue-500 text-sm">
              Download Brochure
            </a>
          </div>
          <hr />
          <div className="col-span">
            <a href={compareLink} className="text-blue-500 text-sm">
              Compare
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TopUniversities = () => {
  const universities = [
    {
      name: "IIT Madras - Indian Institute of Technology [IITM]",
      location: "Chennai, Tamil Nadu | AICTE",
      program: "BE/B.Tech",
      fees: "2.15 Lacs",
      rank: "227 out of 1400 QS",
      reviews: 352,
      coursesLink: "#",
      brochureLink: "#",
      compareLink: "#",
      image:
        "https://images.collegedunia.com/public/college_data/images/appImage/1509430807cover.jpg?h=145&w=342&mode=stretch",
    },
    {
      name: "IIT Madras - Indian Institute of Technology [IITM]",
      location: "Chennai, Tamil Nadu | AICTE",
      program: "BE/B.Tech",
      fees: "2.15 Lacs",
      rank: "227 out of 1400 QS",
      reviews: 352,
      coursesLink: "#",
      brochureLink: "#",
      compareLink: "#",
      image:
        "https://images.collegedunia.com/public/college_data/images/appImage/1509430807cover.jpg?h=145&w=342&mode=stretch",
    },
    {
      name: "IIT Madras - Indian Institute of Technology [IITM]",
      location: "Chennai, Tamil Nadu | AICTE",
      program: "BE/B.Tech",
      fees: "2.15 Lacs",
      rank: "227 out of 1400 QS",
      reviews: 352,
      coursesLink: "#",
      brochureLink: "#",
      compareLink: "#",
      image:
        "https://images.collegedunia.com/public/college_data/images/appImage/1509430807cover.jpg?h=145&w=342&mode=stretch",
    },
    {
      name: "IIT Madras - Indian Institute of Technology [IITM]",
      location: "Chennai, Tamil Nadu | AICTE",
      program: "BE/B.Tech",
      fees: "2.15 Lacs",
      rank: "227 out of 1400 QS",
      reviews: 352,
      coursesLink: "#",
      brochureLink: "#",
      compareLink: "#",
      image:
        "https://images.collegedunia.com/public/college_data/images/appImage/1509430807cover.jpg?h=145&w=342&mode=stretch",
    },
    // Add more universities here...
  ];

  return (
    <>
      <div className="w-full max-w-7xl mx-auto mt-9 mb-7 flex flex-col manage ">
        <h1 className=" text-gray-600 text-xl font-bold mb-4 ms-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl ">
          Top Universistes
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {universities.map((uni, index) => (
              <UniversityCard key={index} {...uni} />
            ))}
          </div>
        </div>

      </div>
      <hr />
    </>
  );
};

export default TopUniversities;
