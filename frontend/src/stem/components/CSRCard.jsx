import React from 'react';

const CSRCard = ({ image, header, description, link, bgColor }) => {
    return (
        <div className={` shadow-lg rounded-lg overflow-hidden m-4 w-80 md:w-60 sm:w-50 lg:w-80 ${bgColor} hover:scale-105 transform transition-transform`}>
            <img className="w-full h-48 object-cover" src={image} alt={header} loading='lazy' />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 h-12 overflow-hidden text-white whitespace-nowrap overflow-ellipsis">{header}</h2>
                <p className="mb-4 h-18 overflow-hidden text-ellipsis">{description}</p>
                <a href={link} className="text-blue-900 font-semibold p-1 bg-orange-500 rounded-md hover:underline">Know More</a>
            </div>
        </div>
    );
};

export default CSRCard;
