import React from 'react';
import ButtonTask from "./ButtonTask";
import point from "../Assets/points.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Task = ({ title, description ,color }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (  
        <div className="my-4 flex justify-center items-center h-full">
            <div className="w-64 h-64 bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between ">
                <button
        className={` text-xs text-red-500 font-semibold p-1 px-4 rounded-xl`}
      >
        To Do
      </button>
                    <Button onClick={handleClick} className="focus:outline-none">
                        <img src={point} alt="Task Image" className="m-2" />
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                        
                    </Menu>
                </div>
                <div className='m-2'>
                    <h2 className="text-xl font-bold text-black">{title}</h2>
                    <p className="text-sm font-normal text-gray-600">{description}</p>
                </div>
                <div className="mt-16 flex justify-between">
    <h1 className="text-md font-medium text-Black ">16h</h1>
    <p className="text-sm font-medium text-green-600">Start</p>
</div>
            </div>
        </div>
    );
}

export default Task;
