import React from 'react'
import './startup.css'
import StartupCells from './components/startupcell/StartupCells'
import StartupNews from './components/startupnews/StartupNews'

import StartupSchemes from './components/startupschemes/StartupSchemes'
import Blogs from './components/blog/Blogs'
import Fundingoption from './components/startupschemes/Fundingoption'
import SchemesPolicies from './components/startupschemes/SchemesPolicies'
import Disclaimer from './Disclaimer'
import StartupGuide from './components/startupschemes/StartupGuide'
import Chatbot from '../../components/Chatbot'
const Startup = () => {
  return (
    <div className=''>
      <StartupCells/>
      <StartupNews/>
     
      <div className='mb-2 gradient-bg'>
      <Fundingoption/>
      <SchemesPolicies/>
      <Disclaimer/>
      <div className=''>
      <img src = "./hands.jpg" className='w-[99vw] object-cover mb-10' />
      </div>
      <StartupGuide/>
      
      </div>
     <Chatbot/>
      <StartupSchemes/>
      <Blogs/>
    </div>
  )
}

export default Startup
