import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorPage from './../ErrorPage';


const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchdetails = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const decodedToken = jwtDecode(token);
        const userData = {
          email: decodedToken.email,
          email_verified: decodedToken.email_verified,
          nbf: decodedToken.nbf,
          name: decodedToken.name,
          picture: decodedToken.picture ,
        };
        setUser(userData);
      }
    }
    useEffect(() => {
      fetchdetails();
      setLoading(false);
    }, []);
  
    if (!user ) {
      return (
        <div className=" flex items-center justify-center">
          <ErrorPage />
          
        </div>
      );
    }
  
    return (
      <div className="flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex max-sm:flex-col justify-center">
            <div className="w-full md:w-1/3 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
              <img 
                className="w-32 h-32 rounded-full border-4 border-gray-200"
                src={user.picture}
                alt="User Profile"
                loading="lazy"
              />
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-400 mt-1">{user.email_verified ? 'Verified' : 'Not Verified'}</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center flex-1  max-sm:items-center">
              <div className="text-left mb-4">
                <h3 className=" font-semibold text-gray-700 mb-2 text-3xl max-sm:text-2xl">Profile Information</h3>
                <p className="text-gray-600"><span className="font-medium">Email:</span> {user.email}</p>
                <p className="text-gray-600"><span className="font-medium">Email Verified:</span> {user.email_verified ? 'Yes' : 'No'}</p>
                <p className="text-gray-600"><span className="font-medium">NBF:</span> {user.nbf}</p>
              </div>
              {/* Add any additional information or components here */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  
  