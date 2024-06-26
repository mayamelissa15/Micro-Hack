import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Tasks from "../Components/Tasks";
import TaskUser from "../Components/TaskUser";

const UserMenu = () => {
    return (
        <div className="bg-[#F6F5FB] lg:flex lg:basis ">
        <div className="lg:basis-2/12">
            <Sidebar></Sidebar>
        </div>
        <div className="lg:basis-8/12 bg-slate-50">
            <div className="pl-8 m-16">
               
            <Tasks></Tasks>
            </div>
           
        </div>
        <div className="basis-2/12 pt-4  pr-4 bg-slate-50">
            <TaskUser></TaskUser>
        </div>
    </div>
    );
}

export default UserMenu;
