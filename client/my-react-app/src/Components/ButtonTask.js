const ButtonTask = ({children}) => {
    return (  <div>
 <button 
            className="bg-orange-100 text-xs text-orange-500  font-semibold p-1 px-4 rounded-xl "
            
        >
            {children}
        </button>
    </div>);
}
 
export default ButtonTask;