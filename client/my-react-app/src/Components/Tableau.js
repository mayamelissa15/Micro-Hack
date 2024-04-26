import Team from "./Team";
import plus from "../Assets/Plus.png"
import Navbar from "./Navbar";
const Tableau = () => {
    return (
    
    
    <div className="bg-white shadow-md  rounded-md  mt-8 mx-16  ">
        
        <div className=' flex justify-between gap-12'>
            <h2 className='text-medium text-2xl text-black font-medium m-4 '>Teams List</h2>
            
            <img src={plus} className="ml-4 h-6 w-6 m-6 cursor-pointer" ></img>
            
            
        </div>
        <div className="grid grid-cols-2">
        <div >
        <div className="flex justify-around gap-6 w-96 mx-4">
            <h1 className="mr-12 text-green-500 text-md font-medium "> Available</h1>
            <p className="mx-12 font-medium text-black text-sm underline underline-offset-1">See all</p>
        </div> 
             <Team></Team>
             <Team></Team>
            
        </div>
        <div >
        <div className="flex justify-between gap-6 w-96 ">
            <h1 className="mx-12 text-red-500 text-md font-medium "> Busy</h1>
            <p className="mx-12 text-black text-sm font-medium underline mx-4 underline-offset-1">See all</p>
        </div> 
             <Team></Team>
        </div>
        
        </div>
        
    </div>  );
}
 
export default Tableau;