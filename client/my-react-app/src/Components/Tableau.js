import Team from "./Team";
import plus from "../Assets/Plus.png"
import Navbar from "./Navbar";
import TestComponent from "./TestComponent";
const Tableau = () => {
    return (
    
    
    <div className="bg-white shadow-xl  rounded-xl  m-16 p-6  ">
        
        <div className=' flex justify-between gap-12 m-8 '>
            <h2 className='text-medium text-3xl text-black font-medium '>Teams List</h2>
            <TestComponent></TestComponent>
            
        </div>
        <div className="grid grid-cols-2">
        <div >
        <div className="lg:flex lg:justify-around gap-2 lg:w-96 ">
            <h1 className="mr-8 text-green-500 text-xl font-medium "> Available</h1>
            <p className="lg:mx-12 py-1 font-medium text-black text-sm underline underline-offset-1">See all</p>
        </div> 
             <Team></Team>
             <Team></Team>
            
        </div>
        <div >
        <div className="lg:flex lg:justify-around gap-2 lg:w-96 ">
            <h1 className="mr-8 text-red-500 text-xl font-medium "> Busy </h1>
            <p className="lg:mx-12 py-1 font-medium text-black text-sm underline underline-offset-1">See all</p>
        </div> 
             <Team ></Team>
             <Team></Team>
        </div>
        
        </div>
        
    </div>  );
}
 
export default Tableau;