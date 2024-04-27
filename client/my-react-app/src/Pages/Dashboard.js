// Dashboard.js
import React ,{useState} from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import {  useNavigate  } from 'react-router-dom';
import Cerclepercent from "../Components/Cerclepercent";
import '../styles/Dashboard.css'


const Dashboard = () => {
  const navigate = useNavigate();
  const handleProjectClick = (id) => {
    navigate(`/Project/${id}`);
  };
  const data = [
    {
      id: 1,
      projectName: "Project 1",
      dateOfCreation: "2024-04-26",
      executionTime: "5s"
    },
    {
      id: 2,
      projectName: "Project 2",
      dateOfCreation: "2024-04-25",
      executionTime: "10s"
    },
    
  ];
  const [total,settotal]=useState(0)
  const [inprog,setinprog]=useState(0)
  const [completed,setcompleted]=useState(0)
  const [waiting,settwaiting]=useState(0)
  return (
    <div className="flex basis-1/4 bg-gray-100 min-h-screen">
      
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>

      {/* Tableau de bord */}
      <div className="basis-3/4 container ml-64  px-4 py-8">
        <Navbar></Navbar>

        <table className="mt-8 w-full bg-white shadow-md rounded-lg overflow-hidden">
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
                  {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-3">{item.id}</td>
              <td className="py-2 px-3" onClick={() => handleProjectClick(item.id)}>{item.projectName}</td>
              <td className="py-2 px-3">{item.dateOfCreation}</td>
              <td className="py-2 px-3">
                <button className="bg-green-100 text-green-500 text-md font-medium rounded-2xl py-1 px-4">{item.executionTime}</button>
              </td>
              <td className="py-2 px-3">
                {/* Ajoutez les actions en fonction de vos besoins */}
                <button className="text-green-500 underline underline-offset-1 font-medium m-2" >Edit</button>
                <button className="text-red-500 underline underline-offset-1 font-medium m-2">Delete</button>
              </td>
            </tr>
          ))}
            
            {/* Ajoutez plus de lignes de données au besoin */}
          </tbody>
        </table>
        <div>
        <div className="partone">
          <Cerclepercent />
          <h2 className="maintitle">Projects</h2>
          <div className="Projectsat">
            <div className="right">
              <div className="total">
                <p className="title">Total</p>
                <div>
                  <div></div>
                  <h2 className="titleh2">{total}</h2>
                </div>
              </div>
              <div className="inprogress">
                <p className="title">Completed</p>
                <div>
                  <div></div>
                  <h2 className="titleh2">{completed}</h2>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="completed">
                <p className="title">In Progress</p>
                <div>
                  <div></div>
                  <h2 className="titleh2">{inprog}</h2>
                </div>
              </div>
              <div className="waiting">
                <p className="title">Waiting</p>
                <div>
                  <div></div>
                  <h2 className="titleh2">{waiting}</h2>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="parttwo">
          <h2>Next deadlines</h2>
          <span></span>
          <h2>Project name</h2>
          <p>Sunday 20 December</p>
          <span></span>
          <h2>Project name</h2>
          <p>Sunday 20 December</p>
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
