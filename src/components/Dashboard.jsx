import React from 'react';
import Polygon from '../svg/img/Polygon';
import './Style.css';
import { Link } from 'react-router-dom';
import { Top } from './Frame';

// import Vector from '../svg/img/Vector.png'
// import SocialMediaIcon from '../svg/img/SocialMediaIcon';

function Dashboard({ data }) {
  return (
   
    <div className='mt-6'>
      <div className='z-10 '>
        <Top/>

      </div>
      <div className='ps-3 pe-5'>

      <Category title="Google" items={data.filter(item => item.type === 'Google')} />
      <Category title="Microsoft" items={data.filter(item => item.type === 'Microsoft')} />
      <Category title="Other" items={data.filter(item => item.type !== 'Microsoft'&& item.type !== 'Google')} />
      </div>
    </div>
    
  );
}

const Category = ({ title, items }) => {
  return (
    <div className="mb-10">
      <h2 className="text-[#848694] text-xl ms-1 mb-2 ">{title}</h2>
      <div className="grid gap-10 grid-cols-2 -mb-4">
        {items.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            url={item.url}
            hadLine={item.hadLine}
            description={item.description}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

const Item = ({ image, url, hadLine, description, type }) => {
  let modifiedString = hadLine.replace(/\s+/g, '').toLowerCase();
  return (
    <Link to={"/social/" + modifiedString } className="flex bg-[#242428] h-auto rounded-xl text-white">
      <div className="py-6 px-3 ms-7">
        <img className=" size-20  align-middle" src={image} alt="" />
      </div>
      <div className="-ms-5 py-4">
        <h1 className="ms-10 text-lg text-white">{hadLine}</h1>
        <p className="px-10 text-[#b5b8bb] text-base text-description">{description}</p>
      </div>
    </Link>
  );
};

export default Dashboard;
