import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CustomCard = ({ header, semiheader, description, img, bg,url }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(url);
    }
    return (
        <Link className={`border border-gray-300 rounded-lg p-4 flex items-center mb-4 max-w-sm relative flex-1 hover:cursor-pointer min-h-[150px] max-sm:min-h-[180px] transform transition-transform duration-500 hover:-translate-y-2`} style={{ backgroundColor: bg }}  to = {url}>
            <div className='flex flex-col justify-start z-10  h-full'>
                <h3 className="text-lg font-semibold">{header}</h3>
                <div className='flex flex-col'>
                    <p className="text-gray-600 font-semibold">{semiheader}</p>
                    <p className="text-sm text-gray-800">{description}</p>
                </div>
            </div>
            <img src={img} alt={header} className="h-full w-50 object-contain ml-auto absolute right-1 bottom-1 pt-4" />
        </Link>
    );
};

export default CustomCard;
