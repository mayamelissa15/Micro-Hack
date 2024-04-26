import plus from '../Assets/Plus.png'
import pic from '../Assets/pic.png'
const User = () => {
    return ( <div>
        <div className="bg-white shadow-md  rounded-md my-8 py-2 w-64">
        <div className=' flex justify-between gap-12'>
            <h2 className='text-medium text-black font-medium mx-2'>Users</h2>
            <div className='flex'>
            <img src={plus} className=' p-2 w-4 h-4'></img>
            <button className='bg-slate-100 text-black px-4 rounded-md mx-2'>See all</button>
            </div>
        </div>
        
        <div className='mt-4'>
        <div className="flex justify-between mx-4">
        <h1 className="text-sm font-medium text-slate-700 py-2">user-8887</h1>
        <img
        src={pic}
        alt="Profile Picture"
        className="w-8 h-8 rounded-full m-2"
        />
        </div></div>
        <div className='mt-2'>
        <div className="flex justify-between mx-4">
        <h1 className="text-sm font-medium text-slate-700 py-2">user-8887</h1>
        <img
        src={pic}
        alt="Profile Picture"
        className="w-8 h-8 rounded-full m-2"
        />
        </div></div>
        
        </div>
    </div> );
}
 
export default User;