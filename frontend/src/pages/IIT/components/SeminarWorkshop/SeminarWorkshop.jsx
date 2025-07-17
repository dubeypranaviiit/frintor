import React from "react";
import Carousel from "react-material-ui-carousel"; // Assuming this is compatible with Tailwind CSS approach
import { Box } from "@mui/material"; // Replace with Tailwind's div or Fragment

const items = [
  {
    date: "July 15",
    status: "Upcoming",
    title: "Advances in Machine Learning",
    location: "MIT",
  },
  {
    date: "August 20",
    status: "Upcoming",
    title: "Blockchain and Cryptocurrencies",
    location: "Stanford University",
  },
  {
    date: "September 5",
    status: "Ongoing",
    title: "Quantum Computing Explained",
    location: "Caltech",
  },
  {
    date: "October 11",
    status: "Ongoing",
    title: "Cybersecurity in the Modern Era",
    location: "UC Berkeley",
  },
  {
    date: "November 9",
    status: "Upcoming",
    title: "Data Science and Big Data",
    location: "University of Chicago",
  },
  {
    date: "December 2",
    status: "Upcoming",
    title: "Artificial Intelligence Ethics",
    location: "Harvard University",
  },
  {
    date: "January 18",
    status: "Upcoming",
    title: "IoT and Smart Cities",
    location: "Georgia Tech",
  },
  {
    date: "February 23",
    status: "Ongoing",
    title: "Augmented Reality and VR",
    location: "Carnegie Mellon University",
  },
  // 10 additional entries
  {
    date: "March 15",
    status: "Completed",
    title: "Natural Language Processing",
    location: "University of Oxford",
  },
  {
    date: "April 19",
    status: "Upcoming",
    title: "Deep Learning and Neural Networks",
    location: "Imperial College London",
  },
  {
    date: "May 10",
    status: "Ongoing",
    title: "Computer Vision and Image Recognition",
    location: "ETH Zurich",
  },
  {
    date: "June 7",
    status: "Upcoming",
    title: "Robotics and Automation",
    location: "Tokyo Institute of Technology",
  },
  {
    date: "July 12",
    status: "Canceled",
    title: "Big Data Analytics and Visualization",
    location: "National University of Singapore",
  },
  {
    date: "August 16",
    status: "Upcoming",
    title: "Human-Computer Interaction",
    location: "University of California, Berkeley",
  },
  {
    date: "September 20",
    status: "Completed",
    title: "Software Engineering for Machine Learning",
    location: "Massachusetts Institute of Technology",
  },
  {
    date: "October 25",
    status: "Ongoing",
    title: "Cybersecurity for the Internet of Things",
    location: "Nanyang Technological University",
  },
  {
    date: "November 8",
    status: "Upcoming",
    title: "Blockchain Applications in Business",
    location: " University of Toronto",
  },
  {
    date: "December 13",
    status: "Upcoming",
    title: "The Future of Artificial Intelligence",
    location: "École Polytechnique Fédérale de Lausanne",
  },
];

const Slide = ({ items }) => (
  <div className="rounded-lg p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {items.map((item, i) => (
      <div key={i}>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
          <p className="text-sm text-gray-500">{item.status}</p>
          <h2 className="text-lg font-bold mt-2 h-[3.5rem] overflow-hidden">{item.title}</h2>
          <p className="text-gray-500 h-[1.4rem] overflow-hidden">{item.date}</p>
          <p className="text-sm text-gray-500 mt-2 h-[1.4rem] overflow-hidden">{item.location}</p>
        </div>
      </div>
    ))}
  </div>
</div>

);

const SeminarWorkshop = () => {
  const chunkSize = 4;
  const slides = [];

  for (let i = 0; i < items.length; i += chunkSize) {
    slides.push(items.slice(i, i + chunkSize));
  }

  return (
    <div className="flex justify-center  ">
    <div className=" w-[90vw] max-w-[1400px] ">
      <h4 className="text-2xl font-bold  text-center p-4 mt-12">SEMINAR / WORKSHOP</h4>
      <Carousel animation="slide" autoPlay={true} indicators={true}>
        {slides.map((slide, i) => (
          <Slide key={i} items={slide} />
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default SeminarWorkshop;
