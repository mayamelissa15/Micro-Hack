import Sidebar from "../Components/Sidebar";
import Tableau from "../Components/Tableau";
import Team from "../Components/Team";
import User from "../Components/User"
const TeamLists = () => {
    return ( <div className="flex basis ">
        <div className="basis-2/12">
            <Sidebar></Sidebar>
        </div>
        <div className="basis-8/12 bg-slate-50">
           <Tableau></Tableau>
        </div>
        <div className="basis-2/12 pt-4  pr-4 bg-slate-50">
            <User></User>
        </div>
    </div> );
}
 
export default TeamLists;