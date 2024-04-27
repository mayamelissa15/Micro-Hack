import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const AddingTask = ({ title, content, onClose }) => {
    const [open, setOpen] = React.useState(false);
    const [taskTitle, setTaskTitle] = React.useState('');
    const [taskDate, setTaskDate] = React.useState('');
    const [geographicalZone, setGeographicalZone] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTaskTitle('');
        setTaskDate('');
        setGeographicalZone('');
        setDescription('');
        if (onClose) onClose();
    };

    const handleSave = () => {
        // Add your save logic here
        console.log("Task Title:", taskTitle);
        console.log("Task Date:", taskDate);
        console.log("Geographical Zone:", geographicalZone);
        console.log("Description:", description);
        handleClose();
    };

    return (
        <div>
            <Button class="rounded-md text-md font-normal text-white font-medium bg-[#AA8CFF]  px-4 py-2" onClick={handleOpen}>Adding Task</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText className='grid grid-rows-5 gap-2'>
                        <label className="text-sm" for="taskTitle">Task Title:</label>
                        <input
                            id="taskTitle"
                        py-2      class="focus:border-none shadow-md  px-6   w-96"
                            type="text"
                            
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                        />
                        <label className="text-sm" for="taskDate">Task Date:</label>
                        <input
                            id="taskDate"
                            class="focus:border-none shadow-md  px-6 py-2 text-slate-900 font-medium  w-96"
                            type="date"
                            
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                        />
                        <label className="text-sm" for="geographicalZone">Geographical Zone:</label>
                        <input
                            id="geographicalZone"
                            class="focus:border-none shadow-md  px-6 py-2 text-slate-900 font-medium  w-96"
                            type="text"
                            value={geographicalZone}
                            onChange={(e) => setGeographicalZone(e.target.value)}
                        />
                        <label className="text-sm" for="description">Description:</label>
                        <input
                            id="description"
                            class="focus:border-none shadow-md  px-6 py-2 text-slate-900 font-medium  w-96"
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions class="flex justify-evenly gap-4">
                    <Button onClick={handleSave} class='bg-white text-black font-normal text-md text-center  rounded-md px-6 py-2 m-4 shadow-md'>Cancel</Button>
                    <Button onClick={handleClose} class='bg-[#AA8CFF] text- font-normal text-md text-center text-white rounded-md px-6 py-2 m-4 shadow-md'>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddingTask;