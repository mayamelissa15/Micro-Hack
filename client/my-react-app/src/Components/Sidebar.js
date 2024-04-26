import React from 'react';
import add from '../Assets/Add.png';
import Addition from '../Assets/Addition.png'; 
import Settings from '../Assets/settings.png';
import padlock from '../Assets/padlock.png';
const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64  bg-white text-black flex flex-col justify-between rounded-3xl">
      <div className="py-4 px-6">
        <ul className="m-2 p-4">
        <li className=" cursor-pointer  flex items-center justify-around rounded transition-colors duration-300 bg-[#AA8CFF] text-white font-normal text-md text-center rounded-xl p-2">
            <img src={add} className="justify-around" alt="Add" /> New Project 
          </li>

          <li className="mt-4 text-center text-sm  font-medium  px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={Addition} className="mr-2" alt="Add" /> My projects
          </li>
          <li className="mt-4 text-center text-sm font-medium  px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={Settings} className="mr-2" alt="Add" /> Settings
          </li>
          <li className="mt-4 text-center text-sm font-medium  px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={padlock} className="mr-2" alt="Add" />Policy
          </li>
         
        </ul>
      </div>
      <div className="py-4 px-6">
        
      </div>
    </div>
  );
};

export default Sidebar;
