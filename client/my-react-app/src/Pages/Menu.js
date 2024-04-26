import Sidebar from "../Components/Sidebar";
import Task from "../Components/TaskProgress";

import add from '../Assets/Add.png'
import MenuPic from "../Assets/Menu.png"
import SearchBar from "../Components/SearchBar";
import pic from '../Assets/pic.png'
import TaskComplete from "../Components/TaskComplete";
import TaskToDo from "../Components/TaskToDo";
const Menu = () => {
    return (
       <div className="bg-slate-50">
         <div className=" flex flex-row ">

<div className="basis-1/4">
    <Sidebar  />
</div>
<div className="basis-3/4 w-full h-full ">
<nav className="flex items-center justify-between gap-14 my-4">
<div className="flex gap-4">
<img src={MenuPic} alt="Menu" className="w-4 h-4 m-2" />
<h2 className="text-lg font-medium">OctoTask Project</h2>
</div>
<SearchBar />
<div className="flex items-center mx-4">
<h1 className="text-md font-medium text-slate-800">username</h1>
<img
src={pic}
alt="Profile Picture"
className="w-8 h-8 rounded-full ml-2"
/>
</div>
</nav>
</div>
<div>
    
</div>
   
</div >
<div className="flex justify-end gap-6 mr-24">
<div className="bg-white rounded-xl"> 
<div className="m-4 bg-white  rounded m-4 my-8 flex flex-col gap-4">
<div className="flex justify-between">
        <h1 className="text-md font-medium text-Black ">on progress</h1>
        <p className="text-sm text-slate-600 underline-offset-1">See all </p>
    </div>
  <Task
    title="Create fondation color"
    description="All about Foundation color for the designer easy to work"
   
  />
  <Task
    title="Create fondation color"
    description="All about Foundation color for the designer easy to work"
  />
</div>

</div>

<div className="bg-white rounded-xl  ">
<div className="m-4 bg-white  rounded m-4 my-8 flex flex-col gap-4">
    <div className="flex justify-between">
        <h1 className="text-md font-medium text-Black ">Completed</h1>
        <p className="text-sm text-slate-600  underline-offset-1">See all </p>
    </div>
  <TaskComplete title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></TaskComplete>
  <TaskComplete title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></TaskComplete>
  
</div>
</div>

<div className="bg-white rounded-xl">
<div className="m-4 bg-white  rounded m-4 my-8 flex flex-col gap-4">
<div className="flex justify-between">
    
        <h1 className="text-md font-medium text-Black ">To do</h1>
        <p className="text-sm text-slate-600">See all </p>
    </div>
  <TaskToDo title="Create fondation color"
    description="All about Foundation color for the designer easy to work underline-offset-1"></TaskToDo>

<TaskToDo title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></TaskToDo>
  
  
</div>
</div>
</div>
       </div>
       
            
    );
}

export default Menu;
