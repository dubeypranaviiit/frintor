import React, { useEffect, useState } from 'react'
import './startupnews.css'
import NewsCard from '../../../../components/news/NewsCard';
import axios from 'axios'
import News from '../../../../components/news/News';
const StartupNews = () => {
    
  
    return (
      <div >
       <News topic = {"startups "}/>
      </div>
    );
  };

export default StartupNews
