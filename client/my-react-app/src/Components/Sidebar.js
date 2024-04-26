import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64  bg-slate-50 text-black flex flex-col justify-between rounded-3xl">
      <div className="py-4 px-6">
        <h1 className="text-xl font-bold">Sidebar</h1>
        <ul className="m-2 p-4">
          <li className="p-2 cursor-pointer rounded transition-colors duration-300 bg-[#AA8CFF] text-white font-normal text-xl text-center p-4 rounded-xl">
           New Project 
          </li>
          <li className="mt-4 text-center text-slate-400 font-normal  px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-xl duration-500">My projects</li>
         
        </ul>
      </div>
      <div className="py-4 px-6">
        
      </div>
    </div>
  );
};

export default Sidebar;
