import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from './db/pipelineData';

function Pipeline() {
  const location = useLocation();
  let component = location.pathname.split("/social/")[1]?.replace(/\s+/g, '').toLowerCase();
  console.log("Component", component);

  // Logging the data to verify import
  console.log("Pipeline Data:", data);

  const componentData = data.filter(dataObj => {
    let modifiedString = dataObj?.name.replace(/\s+/g, '').toLowerCase();
    return modifiedString === component;
  });

  const currentData = componentData[0] || {}; // Get the first element or an empty object if no match

  console.log("Data from pipeline db", currentData);

  return (
    <div className='flex items-center -mt-2 pr-5 justify-center h-screen'>
      <div className='screen flex items-center bg-[#242428] p-52 rounded-lg shadow-lg max-h-screen max-w-screen'>
        <div className='mr-4'>
          <img className='size-52' src='./pipelineIco/calendar' alt={currentData.hadLine1 || 'Default Alt Text'} />
        </div>
        <div>
          <h2 className='text-white text-lg font-semibold'>
            {currentData.hadLine1} <span className='mx-2'>—</span> {currentData.hadLine2}
          </h2>
          <p className='text-gray-400 mt-2'>
            {currentData.description}
          </p>
          <button className='mt-4 bg-white text-black py-2 px-4 rounded'>
            Connect to Gmail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pipeline;
