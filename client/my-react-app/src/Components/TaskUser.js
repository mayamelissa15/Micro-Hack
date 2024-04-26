import ToDo from "../Components/ToDo"
import InProg from "./InProg";
const TaskUser = () => { 
    return ( <div className="bg-white w-96 rounded-md shadow-lg overflow-hidden my-6 p-8 gap-4">
        <h1 className="text-black text-3xl font-medium">Tasks</h1>
    <InProg  title="Create fondation color"
        description="All about Foundation color for the designer easy to work"></InProg>
       <ToDo  title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></ToDo>
    <ToDo  title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></ToDo>
    <ToDo  title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></ToDo>
    </div> );
}
 
export default TaskUser;