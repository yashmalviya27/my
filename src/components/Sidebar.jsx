import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsGraphUpArrow, BsTable, BsPerson, BsGear } from 'react-icons/bs';
import { FiUser } from "react-icons/fi";
import GlobalContext from '../Context/Context';
import { AiFillHome } from "react-icons/ai";
import { GoFileDirectory, GoGoal } from "react-icons/go";
import { SiNginxproxymanager } from "react-icons/si";
import { FaHandshake } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import sidebarIcon from '../svg/img/sidebarIcon.png';
import Automation from '../svg/img/Automation';

const Sidebar = () => {
  const menuData = [
    { title: 'Dashboard', icon: <AiFillHome />, url: '/dashboard', subMenu: [] },
    { title: 'Raw Data', icon: <BsGraphUpArrow />, url: '/', subMenu: [] },
    { title: 'Leads', icon: <GoFileDirectory />, url: '/', subMenu: [] },
    { title: 'Deals', icon: <FaHandshake />, url: '/', subMenu: [] },
    { title: 'Accounts', icon: <MdProductionQuantityLimits />, url: '/', subMenu: [] },
    { title: 'Contacts', icon: <FiUser />, url: '/', subMenu: [] },
    { title: 'Automation', icon: <Automation />, url: '/automation', subMenu: [] },
    { title: 'Goals', icon: <GoGoal />, url: '/', subMenu: [] },
    { title: 'Products', icon: <SiNginxproxymanager />, url: '/', subMenu: [] },
    { title: 'Competitors', icon: <BsGear />, url: '/', subMenu: [] },
  ];

  const { setSelectedMenu, setSelectedSubMenu } = useContext(GlobalContext);
  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedActiveIndex = localStorage.getItem('activeMenuIndex');
    if (savedActiveIndex !== null) {
      setActive(Number(savedActiveIndex));
    } else {
      setActive(0); // Default to 'Dashboard'
    }
  }, []);

  useEffect(() => {
    if (active !== null) {
      setSelectedMenu(menuData[active]);
      localStorage.setItem('activeMenuIndex', active);
    }
  }, [active]);

  useEffect(() => {
    if (active !== null && setActive !== null) {
      setSelectedSubMenu(menuData[active]?.subMenu[setActive]);
    }
  }, [setActive]);

  const redirectTo = () => {
    navigate('/');
  };

  return (
    <div className="fixed w-[200px] bg-[#232222]"> 
      <div className="flex flex-col items-center py-4">
        <span onClick={redirectTo}>
          <img src={sidebarIcon} alt="" className='h-20 w-30' />
        </span>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col text-white w-full pl-2">
          {menuData.map((menu, index) => (
           <SidebarMenu
              key={index}
              menu={menu}
              index={index}
              setActive={setActive}
              setHover={setHover}
              active={active}
              hover={hover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SidebarMenu = ({ menu, index, setActive, setHover, active, hover }) => {
  const isActive = active === index;
  const isHover = hover === index;

  return (
    <Link to={menu.url} >
      <div
        className={`relative flex flex-row items-center w-full text-white px-4 py-3 cursor-pointer
          ${isActive ? "bg-black text-white rounded-l-lg" : ""}
          ${isHover && !isActive ? "hover:bg-black hover:text-white hover:rounded-l-lg" : ""}
          `}
        onClick={() => {
          setActive(index);
        }}
        onMouseEnter={() => {
          setHover(index);
        }}
        onMouseLeave={() => {
          setHover(null);
        }}
      >
        {(isActive || isHover) && (hover === active - 1) && (
          <>
            <div className="absolute right-0 top-[-15px] h-[15px] w-[15px] bg-black"></div>
            <div className="absolute right-0 top-[-15px] h-[15px] w-[15px] bg-[#232222] rounded-br-full"></div>
            <div className="absolute right-0 bottom-[-15px] h-[15px] w-[15px] bg-black"></div>
            <div className="absolute right-0 bottom-[-15px] h-[15px] w-[15px] bg-[#232222] rounded-tr-full"></div>
          </>
        )}
        {(isActive || isHover) && (hover !== active + 1) && (
          <>
            <div className="absolute right-0 top-[-15px] h-[15px] w-[15px] bg-black"></div>
            <div className="absolute right-0 top-[-15px] h-[15px] w-[15px] bg-[#232222] rounded-br-full"></div>
            <div className="absolute right-0 bottom-[-15px] h-[15px] w-[15px] bg-black"></div>
            <div className="absolute right-0 bottom-[-15px] h-[15px] w-[15px] bg-[#232222] rounded-tr-full"></div>
          </>
        )}
        <div
          className={`text-2xl mr-3 p-2 rounded-lg ${
            isActive || isHover ? 'bg-white text-black' : 'bg-transparent text-white'
          } ${isHover && !isActive ? 'hover:bg-white hover:text-black' : ''}`}
        >
          
          {menu.icon}
        </div>
        <span className="text-sm">{menu.title}</span>
      </div>
    </Link>
  );
};

export default Sidebar;
