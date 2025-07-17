import React from "react";
import "./Home.css";

import Search from "../../components/search/Search";
import TopColleges from "../../components/TopColleges/TopColleges";
import ExploreCourses from "../../components/ExploreCourses/ExploreCourses";
import TopUniversities from "../../components/TopUnivesities/TopUniversities";
import News from "../../components/news/News";
import TopExams from './../../components/TopExams/TopExams';
import CollegeCard from '../../components/collegecard/CollegeCard';
import Chatbot from "../../components/Chatbot";
function HomePage() {
 


  
  return (
    <div>
      <Search />
     
      <CollegeCard />
      <TopColleges />
      <hr/>
      <News topic={'IIT,IIM,Indian education,Btech,MBA'}/>
      <TopUniversities />
      <ExploreCourses />
      <TopExams/>
      <Chatbot/>
    </div>
  );
}

export default HomePage;
