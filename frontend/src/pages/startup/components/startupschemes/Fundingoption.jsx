import React from 'react';

const Fundingoption = () => {
  const Fundingoption = [
    {
      title: 'Seed Fund Scheme',
      description: 'Financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialisation.',
      link: 'https://seedfund.startupindia.gov.in/'
    },
    {
      title: 'Funding Guide for Startups',
      description: 'Your virtual guide to startup funding. A startup might require funding for one, a few, or all of the following purposes.',
      link: 'https://www.startupindia.gov.in/content/sih/en/funding.html'
    },
    {
      title: 'Startup India Investor Connect',
      description: 'Startup India Investor Connect is a platform that connects startups with investors to facilitate investment opportunities.',
      link: 'https://investorconnect.startupindia.gov.in/'
    },
    {
      title: 'Fund of Funds',
      description: 'A corpus for contribution to various AIFs registered with SEBI for funding of startups.',
      link: 'https://www.sidbivcf.in/en/funds/ffs'
    },
  ];

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Funding</h2>
        <p className="text-center mb-12">Explore the Funding landscape with Startup India and tap into some of the models most relevant for your startup to grow.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {Fundingoption.map((option, index) => (
            <a href={option.link} target='_blank' key={index} className="bg-white shadow-lg max-w-[500px] rounded-lg p-6 border border-gray-200 hover:border-orange-500 transition duration-200 ease-in-out">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 1h2a2 2 0 002-2v-7a2 2 0 00-2-2h-3m-6 4h.01M12 8V5a2 2 0 00-2-2H6a2 2 0 00-2 2v3m6 0H3m0 0v7a2 2 0 002 2h3m6 0h.01M6 19v3m0 0h3m-3 0h-.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{option.description}</p>
              <a href={option.link} className="text-orange-500 hover:text-orange-600 font-medium" target='_blank'>Know more</a>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fundingoption;