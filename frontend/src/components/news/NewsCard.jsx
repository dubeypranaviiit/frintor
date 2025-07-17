import React from 'react';

const NewsCard = ({ news }) => {
  return (
    <a href={news.link} target="_blank" rel="noreferrer" className="block mb-1">
      <div className="bg-white rounded-lg  hover:shadow-sm transition-shadow duration-300">
        <div className="flex">
          <div className="p-3 flex-1 justify-between flex flex-col">
            <h2 className="text-lg font-semibold overflow-hidden">{news.title}</h2>
            <p className="text-sm text-gray-500">{new Date(news.published_datetime_utc).toLocaleString()}</p>
          </div>
          <div className="flex-shrink-0 p-4">
            <img src={news.photo_url} alt="news" className="h-32 w-32 object-cover rounded-r-lg" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
