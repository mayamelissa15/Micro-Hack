import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import Sidebar from "../Components/Sidebar";
import Tableau from "../Components/Tableau";
import Team from "../Components/Team";
import User from "../Components/User"
const TeamLists = () => {
    return ( <div className="bg-[#F6F5FB] lg:flex lg:basis ">
        <div className="basis-2/12">
            <Sidebar></Sidebar>
        </div>
        <div className="lg:basis-8/12 bg-slate-50">
            <div className="ml-8 mt-8">
           <Navbar></Navbar>
            </div>
           <Tableau></Tableau>
        </div>
        <div className="mx-auto mr-6 lg:basis-2/12 lg:pt-4  lg:pr-4 bg-slate-50">
            <User></User>
        </div>
    </div> );
}
 
export default TeamLists;