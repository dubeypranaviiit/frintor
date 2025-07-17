import React from 'react';
const SchemesPolicies = () => {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Schemes & Policies</h2>
        <p className="mb-8">
          An insight into the schemes and policies landscape of the Indian Startup Ecosystem, 
          including steps taken by Startup India to ease the regulatory burden.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a 
              href="https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html"  className="bg-green-500 text-white rounded-lg p-6 w-80 shadow-lg text-left">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold mb-2">Notifications</h3>
            <p className="mb-4">
              Stay on top of all policy and regulatory updates that are important for your next startup move.
            </p>
            <a 
              href="https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Know more
            </a>
          </a>
          <a  href="https://www.startupindia.gov.in/content/sih/en/government-schemes.html" 
              target="_blank" 
               className="bg-blue-900 text-white rounded-lg p-6 w-80 shadow-lg text-left">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-2">Central Government Schemes</h3>
            <p className="mb-4">
              An aggregation of all Startup focused schemes and policies by the Central Government of India.
            </p>
            <a 
              href="https://www.startupindia.gov.in/content/sih/en/government-schemes.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Know more
            </a>
          </a>
          <a  
              href="https://www.startupindia.gov.in/content/sih/en/state-startup-policies.html" 
              target="_blank" className="bg-orange-500 text-white rounded-lg p-6 w-80 shadow-lg text-left">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2">Know Your State/UT</h3>
            <p className="mb-4">
              Know about the States’ and UTs’ startup policies for Indian startups.
            </p>
            <a 
              href="https://www.startupindia.gov.in/content/sih/en/state-startup-policies.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Know more
            </a>
          </a>
        </div>
      </div>
    );
  };
  
  export default SchemesPolicies;