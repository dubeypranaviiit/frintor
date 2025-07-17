// ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ message }) => {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-lg mb-4">{message}</p>
      <Link to="/">
        <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700">
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
