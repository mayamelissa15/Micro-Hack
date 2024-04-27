import React from 'react';
import { Link } from 'react-router-dom';
import add from '../Assets/Add.png';
import Addition from '../Assets/Addition.png';
import Settings from '../Assets/settings.png';
import padlock from '../Assets/padlock.png';
import teams from '../Assets/team.png';
import Terms from '../Pages/Terms';
<<<<<<< Updated upstream

=======
import logo from '../Assets/logo.png'
>>>>>>> Stashed changes
const Sidebar = () => {
  const style = {
    height: 80,
    width: 80,
  };
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white text-black flex flex-col justify-between rounded-4xl hidden lg:flex">
      {/* Utilisez la classe hidden lg:flex pour masquer la sidebar sur les petits écrans */}
      <div className="py-4 px-6">
        <div style={style}><img src={logo}></img></div>
        <ul className="m-2 p-4">

          <li className="cursor-pointer flex items-center justify-around rounded transition-colors duration-300 bg-[#AA8CFF] text-white font-normal text-md text-center text-white rounded-xl p-2">
            <button><img src={add} className="justify-around" alt="Add" /></button>
            <Link to="/Add">New Project</Link> 
          </li>

          <li className="mt-4 text-center text-slate-700 text-sm font-medium px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={Addition} className="mr-2" alt="Add" /> 
            <Link to="/">My projects</Link>
          </li>
          <li className="mt-4 text-center text-slate-700 text-sm font-medium px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={Settings} className="mr-2" alt="Settings" /> 
            <Link to="/Terms">Terms</Link>
          </li>
          <li className="mt-4 text-center text-slate-700 text-sm font-medium px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={padlock} className="mr-2" alt="Policy" /> 
            <Link to="/policy">Policy</Link> 
          </li>
          <li className="mt-4 text-center text-slate-700 text-sm font-medium px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={teams} className="mr-2" alt="Teams" /> 
            <Link to="/Team-list">Teams</Link> 
          </li>
        </ul>
      </div>
      <div className="py-4 px-6">
      </div>
    </div>
  );
};

export default Sidebar;
