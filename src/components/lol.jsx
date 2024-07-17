import React from 'react';
import Polygon from '../svg/img/Polygon';
import './Style.css';
import { Link } from 'react-router-dom';
import { Top } from './Frame';

// import Vector from '../svg/img/Vector.png'
// import SocialMediaIcon from '../svg/img/SocialMediaIcon';

function Automation({ data }) {
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
    <div>
    <Link to={"/social/" + modifiedString } className="flex bg-[#242428] h-auto rounded-xl text-white">
      <div className="container  ms-7">
        <div className="svg-container mt-4">
          <Polygon />
        </div>
        <img className="overlay-image mt-[35px] ms-[21px] size-10  align-middle" src={image} alt="" />
      </div>
      <div className="-ms-5 py-4">
        <h1 className="ms-10 text-lg text-white">{hadLine}</h1>
        <p className="px-10 text-[#b5b8bb] text-base text-description">{description}</p>
      </div>
    </Link>

<div className="block p-6 px-5 rounded-lg shadow bg-[#323236]">
<div className='flex'>
  <img src="" alt={hadLine} />
  <div className='size-full items-end grid justify-items-end'>
    <button
      className='grid justify-items-end rounded-2xl text-base bg-[#292929] px-3 h-[32px] align-middle'
      onClick={(e) => { e.preventDefault(); onConnectionToggle(index); }}
    >
      <div className='py-1'>{connected ? 'Disconnect' : 'Connect'}</div>
    </button>
  </div>
</div>
<h5 className="text-base font-bold tracking-tight text-white">
  {hadLine}
</h5>
<p className="font-normal text-sm -mb-1 leading-5 text-[#B5B8BB]">
  {description}
</p>
</div>

</div>
  );
};

export default Automation;
