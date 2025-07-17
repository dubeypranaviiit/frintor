import React from 'react';

function Disclaimer() {
  return (
    <div className='flex items-center justify-center mb-2'>
    <div className="bg-black text-white p-4 mb-4 w-[95vw] rounded-md">
      <p className="text-sm">
        The funding, schemes, and policy section is taken from the Startup India page. The link directs you there. We do not hold rights over this section and give credit to Startup India, a central government website. 
        <a href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline ml-1">
          Visit Startup India
        </a>
      </p>
    </div>
    </div>
  );
}

export default Disclaimer;
