import React from 'react';

const ImpactCard = ({ title, image, stats }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 flex flex-col items-center">
            <h3 className="text-black font-bold text-lg mb-4">{title}</h3>
            <img src={image} alt={title} className="w-24 h-24 mb-4" />
            <div className="text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="mb-2">
                        <span className="font-bold">{stat.value}</span>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImpactCard;
