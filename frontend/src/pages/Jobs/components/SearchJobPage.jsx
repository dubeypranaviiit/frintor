import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import Loader from '../../../components/customloader/Loader';

const placeholderImage = "https://via.placeholder.com/64";

const SearchJobPage = () => {
    const [jobs, setJobs] = useState([]);
    const [query, setQuery] = useState('');
    const [searchQuery, setSearchQuery] = useState('jobs in india');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = useMemo(() => ({
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
            query: searchQuery,
            page: page,
            num_pages: '1',
            date_posted: 'all'
        },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_JOB_KEY ,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    }), [searchQuery, page]);

    const fetchJobs = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.request(options);
            setJobs(response.data.data);
        } catch (error) {
            console.error(error);
            setError('Failed to load jobs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [options]); // useEffect now depends only on options, not page or searchQuery directly

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(query);
        setPage(1);
    };

    const formatLocation = (city, state, country) => {
        const locationArray = [city, state, country].filter(Boolean);
        return locationArray.join(', ');
    };

    const renderContent = () => {
        if (loading && jobs.length === 0) {
            return (
                <div className='h-full w-full bg-gray-200 justify-center items-center flex min-h-[50vh]'>
                    <Loader className='mx-auto' />
                </div>
            );
        }

        if (error) {
            return (
                <div className='h-full w-full flex flex-col justify-center items-center min-h-[50vh]'>
                    <p className="text-center text-red-500 text-lg">{error}</p>
                    <span className="text-9xl">😔</span>
                </div>
            );
        }

        if (loading) {
            return (
                <div className='h-full w-full bg-gray-200 justify-center items-center flex min-h-[50vh]'>
                    <Loader className='mx-auto' />
                </div>
            );
        }

        if (jobs.length === 0) {
            return (
                <div className='h-full w-full flex flex-col justify-center items-center min-h-[50vh]'>
                    <p className="text-center text-red-500 text-lg">No jobs found for your search....</p>
                    <span className="text-9xl">😐</span>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job, index) => (
                    <div key={index} className="bg-white p-4 shadow rounded-lg">
                        <img 
                            src={job.employer_logo || placeholderImage} 
                            alt={job.employer_name} 
                            className="w-16 h-16 object-contain rounded-full mb-2" 
                            loading='lazy'
                        />
                        <h2 className="text-xl font-semibold mb-2">{job.job_title}</h2>
                        <p className="text-gray-600 mb-2">{job.employer_name}</p>
                        <p className="text-gray-600 mb-2">{job.job_employment_type}</p>
                        {formatLocation(job.job_city, job.job_state, job.job_country) && (
                            <p className="text-gray-600 mb-2">
                                {formatLocation(job.job_city, job.job_state, job.job_country)}
                            </p>
                        )}
                        <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Apply Now</a>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={`p-4 ${loading || error || jobs.length === 0 ? 'min-h-[80vh] flex-col items-center justify-center bg-gray-100 w-[100vw]' : ''}`}>
            <h1 className="text-2xl font-bold mb-4 bg-blue-900 p-4 text-white rounded-md">Search Job Listings</h1>
            <form onSubmit={handleSearch} className="mb-4">
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    className="p-2 border border-gray-300 rounded-md mr-2 min-w-[40vw]"
                    placeholder="Enter job title, keywords, or company"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Search</button>
            </form>
            {renderContent()}
            {!loading && jobs.length > 0 && (
                <div className="flex justify-around gap-5 my-4">
                    <button 
                        onClick={handlePreviousPage} 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <button 
                        onClick={handleNextPage} 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchJobPage;
