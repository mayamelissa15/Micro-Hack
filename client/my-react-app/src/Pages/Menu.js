import Sidebar from "../Components/Sidebar";
import Task from "../Components/Task";
import add from '../Assets/Add.png'

const Menu = () => {
    return (
        <div className="flex justify-evenly">
            <div>
                <Sidebar className="mr-4" />
            </div>

            <div className="flex flex-col bg-white m-8 p-8 gap-4 items-center rounded-lg shadow-md">
    <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-bold text-black">To do</h2>
        <li className="cursor-pointer flex items-center justify-around rounded-xl transition-colors duration-300 bg-[#AA8CFF] text-white font-normal text-md text-center rounded-xl p-2">
            <img src={add} className="justify-around" alt="Add" /> New Project
        </li>
    </div>


    <div className="flex justify-between gap-4">
        <Task title="Create fondation color" description="All about Foundation color for the designer easy to work" />
        <Task title="Create fondation color" description="All about Foundation color for the designer easy to work" />
        <Task title="Create fondation color" description="All about Foundation color for the designer easy to work" />
    </div>
  
</div>


        </div>
    );
}

export default Menu;
