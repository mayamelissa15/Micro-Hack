import React from 'react';
import point from "../Assets/points.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Team = ({ title, description ,color }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (  
        <div className=" lg:flex lg:justify-center lg:items-center lg:my-6 ">
            <div className="w-16 lg:w-96 lg:m-4 bg-white rounded-lg shadow-md lg:p-4">
                <div className="flex  lg:flex lg:justify-between ">
                <h1 className="text-xl font-bold text-black">Team Name</h1>
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
                <div className='my-2'>
                    <p className="text-lg font-medium text-gray-700 my-2 ">members</p>
                    <p className="text-md font-normal text-gray-600">Mellaz Maya, Hammou Houda, Meriem Hadi, Belaid Sarah, Benmalek Aya...</p>
    <h1 className="text-md font-medium text-Black ">Skill Level</h1>
                </div>
                

    

            </div>
            
        </div>
    );
}

export default Team;
