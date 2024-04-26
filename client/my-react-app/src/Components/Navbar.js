import SearchBar from './SearchBar';
import pic from '../Assets/pic.png'
import MenuPic from '../Assets/Menu.png'
const Navbar = () => {
    return (<div>
        <div className="flex items-center justify-between gap-14 my-4">
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
</div>
    </div>  );
}
 
export default Navbar;