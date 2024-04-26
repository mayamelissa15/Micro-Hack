import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import add from '../Assets/Add.png';
import Addition from '../Assets/Addition.png'; 
import Settings from '../Assets/settings.png';
import padlock from '../Assets/padlock.png';
import teams from '../Assets/team.png';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white text-black flex flex-col justify-between rounded-4xl">
      <div className="py-4 px-6">
        <ul className="m-2 p-4">
          {/* Ajouter les liens ici */}
          <li className="cursor-pointer flex items-center justify-around rounded transition-colors duration-300 bg-[#AA8CFF] text-white font-normal text-md text-center text-white rounded-xl p-2">
            <img src={add} className="justify-around" alt="Add" /> 
            <Link to="/new-project">New Project</Link> {/* Lien vers la page New Project */}
          </li>

          <li className="mt-4 text-center text-slate-700 text-sm font-medium px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={Addition} className="mr-2" alt="Add" /> 
            <Link to="/dashboard">My projects</Link> {/* Lien vers la page My projects */}
          </li>
          <li className="mt-4 text-center text-slate-700 text-sm font-medium px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={Settings} className="mr-2" alt="Settings" /> 
            <Link to="/settings">Settings</Link> {/* Lien vers la page Settings */}
          </li>
          <li className="mt-4 text-center text-slate-700 text-sm font-medium px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={padlock} className="mr-2" alt="Policy" /> 
            <Link to="/policy">Policy</Link> {/* Lien vers la page Policy */}
          </li>
          <li className="mt-4 text-center text-slate-700 text-sm font-medium px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-xl duration-500 flex items-center">
            <img src={teams} className="mr-2" alt="Teams" /> 
            <Link to="/Team-list">Teams</Link> {/* Lien vers la page Teams */}
          </li>
        </ul>
      </div>
      <div className="py-4 px-6">
      </div>
    </div>
  );
};

export default Sidebar;
