import TaskComplete from "./TaskComplete";

const Tasks = () => {
    return ( <div className="mx-64 p-16 bg-white rounded-md ">
        <div className="bg-white shadow-xl rounded-md">
            <h1 className="text-black text-2xl font-medium m-16 ">Completed</h1>
            <div className="grid grid-cols-2 gap-2  ">
            <TaskComplete title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></TaskComplete>
  <TaskComplete title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></TaskComplete><TaskComplete title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></TaskComplete>
  <TaskComplete title="Create fondation color"
    description="All about Foundation color for the designer easy to work"></TaskComplete>

            </div>
            </div>
    </div> );
}
 
export default Tasks;