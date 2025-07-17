import React from 'react'
import ContinuousSlider from './ContinuousSlider'

const IntroPage = () => {
  return (
    <div className='flex flex-col mb-10 bg-gray-100'>
      
      <div className="flex  mt-6 justify-center gap-3">
        <div className=" flex  w-[80vw] max-sm:w-[98vw] gap-10 ">
          <div className="flex-1 justify-center items-center max-lg:hidden max-h-[100] relative overflow-hidden">
            <h1 className="text-4xl font-bold mb-6 z-50">
              Find Your Dream Jobs
            </h1>
           
            <p className="text-lg text-gray-600 z-50 mb-3">
              Discover global opportunities to learn, showcase your skills, earn
              CV points, and land your dream job with ease.
            </p>
            <div className="flex gap-2 justify-start flex-wrap mt-10">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Get Started</button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md">Learn More</button>
            </div>

          </div>

          <div className="flex-1 ">
          <img src = "/job_girl.jpg"  className="realtive right-0 rounded-md"  loading='lazy'/>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
      
        <div className='h-[80px] w-[550px] p-1 flex flex-col justify-center items-center max-xl:hidden '>
          <p1 className = "text-gray-600 font-semibold"> Get placed in</p1>
          <h1 className=' text-lg font-semibold text-blue-600'>Top Companies</h1>
        </div>
      <ContinuousSlider/>
   
      </div>
    </div>
  )
}

export default IntroPage