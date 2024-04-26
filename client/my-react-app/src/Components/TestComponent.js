import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const TestComponent = ({ title, content, onClose }) => {
    const [open, setOpen] = React.useState(false);
    const [teamName, setTeamName] = React.useState('');
    const [team, setTeam] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTeamName('');
        setTeam('');
        if (onClose) onClose();
    };

    const handleSave = () => {
        // Add your save logic here
        console.log("Team Name:", teamName);
        console.log("Team:", team);
        handleClose();
    };

    return (
        <div>
            <Button class="rounded-full text-xl font-medium text-black font-medium bg-slate-100 p-3 px-4" onClick={handleOpen}>+</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText className='grid grid-rows-2'>
                        <input
                            class="focus:border-none shadow-md  px-6 py-3 mb-2 w-64"
                            type="text"
                            placeholder="Team Name"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                        
                        <input
                            class="focus:border-none shadow-md  px-6 py-3 mb-2 w-64"
                            type="number"
                            placeholder="Skill level %"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
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

export default TestComponent;
