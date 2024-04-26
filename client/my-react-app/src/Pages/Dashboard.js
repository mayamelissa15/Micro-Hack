// Dashboard.js
import React from "react";
import Sidebar from "../Components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex basis-1/4 bg-gray-100 min-h-screen">
      
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>

      {/* Tableau de bord */}
      <div className="basis-3/4 container ml-64  px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="">
            <tr>
              <th className="text-md text-slate-700 py-4 px-3 text-left">ID</th>
              <th className="text-md text-slate-700 py-4 px-3 text-left">Project Name</th>
              <th className="text-md text-slate-700 py-4 px-3 text-left">Date of Creation</th>
              <th className="text-md text-slate-700 py-4 px-3 text-left">Execution Time</th>
              <th className="text-md text-slate-700 py-4 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Lignes de données ici */}
            <tr>
              <td className="py-2 px-3">1</td>
              <td className="py-2 px-3">Project 1</td>
              <td className="py-2 px-3">2024-04-26</td>
              <td className="py-2 px-3">2 hours</td>
              <td className="py-2 px-3">
                <button className="text-green-500 underline underline-offset-1 font-medium m-2">Accepter</button>
                <button className="text-red-500 underline underline-offset-1 font-medium m-2">Refuser</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3">2</td>
              <td className="py-2 px-3">Project 2</td>
              <td className="py-2 px-3">2024-04-25</td>
              <td className="py-2 px-3">1.5 hours</td>
              <td className="py-2 px-3">
                <button className="text-green-500 underline underline-offset-1 font-medium m-2">Accepter</button>
                <button className="text-red-500 underline underline-offset-1 font-medium m-2">Refuser</button>
              </td>
            </tr>
            {/* Ajoutez plus de lignes de données au besoin */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
