import React from 'react';

const opportunities = [
  { text: 'Senior Staff Research', date: 'April 20-21', org: '' },
  { text: 'E-masters', date: 'April 20-21', org: '' },
  { text: 'Internship', date: 'April 20-21', org: '' },
  { text: 'Scholarship', date: 'April 20-21', org: 'PMFIR' },
  { text: 'Faculty Position', date: 'April 20-21', org: 'IITGN' },
  { text: 'PhD Scholar', date: 'April 20-21', org: 'MIT' },
  { text: 'Research Assistant', date: 'April 20-21', org: 'IITB' },
  { text: 'Visiting Student', date: '', org: '' },
  { text: 'Contractual Staff', date: '', org: '' },
  { text: 'Project Position', date: '', org: '' },
];

const Opportunities = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div className="text-3xl font-bold  mb-8">CHANCE / OPPORTUNITY</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
        {opportunities.map((opportunity, index) => (
          <OpportunityCard key={index} text={opportunity.text} date={opportunity.date} org={opportunity.org} />
        ))}
      </div>
    </div>
  );
};

const OpportunityCard = ({ text, date, org }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center">
    <div className="font-semibold text-lg mb-2">{text}</div>
    {date && <div className="text-sm text-gray-500 mb-2">{date}</div>}
    {org && <div className="text-sm text-gray-500">{org}</div>}
  </div>
);

export default Opportunities;
