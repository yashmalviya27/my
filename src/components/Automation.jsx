import React, { useState } from 'react';
import './Style.css';
import { Top } from './Frame';
import { Link } from 'react-router-dom';

function Automation({ data }) {
  const [integrations, setIntegrations] = useState(data.map(item => ({ ...item, isConnected: false })));

  const handleConnect = (id) => {
    const updatedIntegrations = integrations.map(item => 
      item.id === id ? { ...item, isConnected: true } : item
    );
    setIntegrations(updatedIntegrations);
  };

  const handleDisconnect = (id) => {
    const updatedIntegrations = integrations.map(item => 
      item.id === id ? { ...item, isConnected: false } : item
    );
    setIntegrations(updatedIntegrations);
  };

  return (
    <div className='mt-6'>
      <div className='z-10 '>
        <Top />
      </div>
      <div className='ps-3 pe-5'>
        <Category 
          title="Integration" 
          items={integrations} 
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        />
      </div>
    </div>
  );
}

const Category = ({ title, items, onConnect, onDisconnect }) => {
  return (
    <div className="mb-10">
      <h2 className="text-[#848694] text-xl ms-1 mb-2 ">{title}</h2>
      <div className="grid gap-10 grid-cols-4 -mb-4">
        {items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            hadLine={item.hadLine}
            description={item.description}
            isConnected={item.isConnected}
            onConnect={onConnect}
            onDisconnect={onDisconnect}
          />
        ))}
      </div>
    </div>
  );
};

const Item = ({ id, image, hadLine, description, isConnected, onConnect, onDisconnect }) => {
  const modifiedString = hadLine.replace(/\s+/g, '').toLowerCase();
  return (
    <div className="block py-6  px-3 rounded-lg shadow bg-[#323236]">
      <div className='flex '>
        <img src={image} alt={hadLine} className=' size-[47px]' />
        <div className='size-full items-end grid justify-items-end'>
          {isConnected ? (
            <button
              className='grid justify-items-end rounded-2xl text-base bg-[#292929] px-3 h-[32px] align-middle'
              onClick={() => onDisconnect(id)}
            >
              Disconnect
            </button>
          ) : (
            // <button
            //   className='grid justify-items-end rounded-2xl text-base bg-[#292929] px-3 h-[32px] align-middle'
            //   onClick={() => onConnect(id)}
            // >
            //   Connect
            // </button>
            <Link to={"/social/" + modifiedString } className="flex bg-[#242428] h-auto rounded-xl text-white">Connect</Link>
          )}
        </div>
      </div>
      <h5 className="text-base font-bold tracking-tight text-white">
        {hadLine}
      </h5>
      <p className="font-normal text-sm -mb-1 leading-5 text-[#B5B8BB]">
        {description}
      </p>
    </div>
  );
};

export default Automation;
