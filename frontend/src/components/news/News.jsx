import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import { ClipLoader } from "react-spinners";
import './news.css'; // Ensure you have appropriate styles
import Loader from "../customloader/Loader";

const News = ({ topic }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleNewsCount, setVisibleNewsCount] = useState(6);
  const newsContainerRef = useRef(null);

  const fetchNews = async () => {
    const options = {
      method: "GET",
      url: "https://real-time-news-data.p.rapidapi.com/search",
      params: {
        query: `${topic} news and updates`,
        limit: "120",
        time_published: "anytime",
        country: "IN",
        lang: "en",
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_NEWS_KEY,
        "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.data.length > 0) {
        setNews(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        setError("No news found.");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("Failed to fetch news. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchNews();
  }, [topic]);

  const handleShowMore = () => {
    setVisibleNewsCount((prevCount) => prevCount + 4);
    setTimeout(() => {
      if (newsContainerRef.current) {
        newsContainerRef.current.scrollTo({
          top: newsContainerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <div className="container mx-auto mt-10 px-4 max-w-7xl w-full min-h-[50vh] mb-2">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Latest News and Updates
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh] bg-slate-200">
          <Loader />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-[20vh]">
          {error && (
            <div className="text-center text-red-500 mb-4 text-lg">{error}</div>
          )}
          <div className="flex-1 min-h-[20vh] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Sad face emoji */}
              <span role="img" aria-label="Sad Face" className="text-9xl">
                😕
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="news-container max-h-[70vh] overflow-y-auto no-scrollbar" ref={newsContainerRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {news.slice(0, visibleNewsCount).map((newsItem, index) => (
                <NewsCard key={index} news={newsItem} />
              ))}
            </div>
          </div>
          {visibleNewsCount < news.length && (
            <div className="text-center mt-2">
              <button
                className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={handleShowMore}
              >
                Show More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default News;
