import Sidebar from "../Components/Sidebar";
import Task from "../Components/TaskProgress";
import React, { useState } from 'react'
import '../styles/Menu.css'
import Cerclepercent from "../Components/Cerclepercent";
import axios from 'axios'
import { useParams } from 'react-router-dom';

import add from '../Assets/Add.png'
import SearchBar from "../Components/SearchBar";
import pic from '../Assets/pic.png'
import TaskComplete from "../Components/TaskComplete";
import TaskToDo from "../Components/TaskToDo";
import Navbar from "../Components/Navbar";
const Menu = () => {
    const { id } = useParams();
    const [listTodo , setlistTodo]=useState([
      {
        'id':'1',
        "taskName": "Task 1",
        "time": "2 hours",
        "status": "In Progress",
        "team": "Team B",
        "description": "ce task est tres important."
      },
      {
        'id':'5',
        "taskName": "Task 2",
        "time": "1 hour",
        "status": "Completed",
        "team": "Team c",
        "description": "Praesent vitae est nec  facilisis in et nisl."
      },
      {
        'id':'8',
        "taskName": "Task 3",
        "time": "3 hours",
        "status": "Pending",
        "team": "Team C",
        "description": "Integer eget ex blandit."
      }
    ]
    )
    const [listdone , setlistdone]=useState([
      {  
        'id':'4',
        "taskName": "Task 1",
        "time": "2 hours",
        "status": "In Progress",
        "team": "Team d",
        "description": " consectetur adipiscing elit. Sed vitae urna vitae sapien convallis vulputate."
      },
      {
        'id':'17',
        "taskName": "Task 2",
        "time": "1 hour",
        "status": "Completed",
        "team": "Team B",
        "description": "Praesent vitae est nec enim condimentum facilisis in et nisl."
      },
      {
        'id':'15',
        "taskName": "Task 3",
        "time": "3 hours",
        "status": "Pending",
        "team": "Team C",
        "description": "Integer eget ex blandit, maximus lacus ut, convallis ex. Fusce ut magna ac felis blandit eleifend."
      }
    ]
    )
    const [listinpogress, setlistinprogress]=useState([
      {
        'id':'10',
        "taskName": "Task 1",
        "time": "2 hours",
        "status": "In Progress",
        "team": "Team A",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna vitae sapien convallis vulputate."
      },
      {
        'id':'11',
        "taskName": "Task 2",
        "time": "1 hour",
        "status": "Completed",
        "team": "Team B",
        "description": "Praesent vitae est nec enim condimentum facilisis in et nisl."
      },
      {
        'id':'12',
        "taskName": "Task 3",
        "time": "3 hours",
        "status": "Pending",
        "team": "Team C",
        "description": "Integer eget ex blandit, maximus lacus ut, convallis ex. Fusce ut magna ac felis blandit eleifend."
      }
    ]
    )
  
    const [day,setday]=useState(2)
    const [hour,sethour]=useState(12)
    const [minutes,setminutes]=useState(34)
    const [seconds,setseconds]=useState(19)
    const [tasksdone,settasksdone]=useState(10)
    const [tasksleft,settasksleft]=useState(3)
    const [description,setdescription]=useState('This captivating project combines technical expertise, interdisciplinary collaboration')
    const handleOpen = () => {
      const registerURL = `http://localhost:5000/get_project/${id}`;
          axios.post(registerURL, {withCredentials:true})
          .then(response => {
              console.log('Enregistrement réussi :', response.data);
              
          })
          .catch(error => {
              console.error('Erreur lors de l\'enregistrement :', error);
              console.error('Erreur lors de l\'enregistrement - Server Response:', error.response);
          });
          };
    
    return (
    <div className="bg-slate-50">
    <div className=" flex flex-row ">

<div className="basis-1/4">
    <Sidebar  />
</div>
<div className="basis-3/4 w-full h-full ">

<Navbar></Navbar>
<div className='top'>
            <Cerclepercent />
            <div className='deux'>
                <div className='time'>
                    <p>{day} Days  :</p>
                    <p>{hour} H  :</p>
                    <p>{minutes} Min  :</p>
                    <p>{seconds} S</p>
                </div>
                <div className='statics'>
                    <p>Total tasks Done: <span>{tasksdone} tasks done</span></p>
                    <p>Total tasks Left: <span>{tasksleft} tasks left</span></p>
                </div>
                
            </div>
            <div className='description'>
                <h2>Project description:</h2>
                <p>{description}</p>
            </div>
            

        </div>
</div>

<div>
    
</div>
   
</div >
<div className="flex justify-end gap-6 mr-24">
<div className="bg-white rounded-xl"> 
<div className="m-4 bg-white  rounded m-4 my-8 flex flex-col gap-4">
    <div className="flex justify-between">
        <h1 className="text-md font-medium text-Black ">on progress</h1>
        <p className="text-sm text-slate-600 underline-2">See all </p>
    </div>

    <div>
      {listinpogress.map((task) => (
        <Task
          key={task.id}
          title={task.taskName}
          description={task.description}
          status={task.status}
          time={task.time}
          team={task.team}
        />
      ))}
    </div>
</div>

</div>

<div className="bg-white rounded-xl  ">
<div className="m-4 bg-white  rounded m-4 my-8 flex flex-col gap-4">
    <div className="flex justify-between">
        <h1 className="text-md font-medium text-Black ">Completed</h1>
        <p className="text-sm text-slate-600  underline-offset-1">See all </p>
    </div>
    {listdone.map((task) => (
        <TaskComplete
          key={task.id}
          title={task.taskName}
          description={task.description}
          status={task.status}
          time={task.time}
          team={task.team}
        />
      ))}

  
</div>
</div>

<div className="bg-white rounded-xl">
<div className="m-4 bg-white  rounded m-4 my-8 flex flex-col gap-4">
<div className="flex justify-between">
    
        <h1 className="text-md font-medium text-Black ">To do</h1>
        <p className="text-sm text-slate-600">See all </p>
    </div>
    {listTodo.map((task) => (
        <TaskToDo
          key={task.id}
          title={task.taskName}
          description={task.description}
          status={task.status}
          time={task.time}
          team={task.team}
        />
      ))}
  
  
</div>
</div>
</div>
       </div>
       
            
    );
}

export default Menu;
