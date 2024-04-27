import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const MyModal = ({content}) => {
  const [open, setOpen] = useState(false);
  const [optsequence, setoptsequence] = useState([]);
  const [Time, setTime] = useState(0);
  console.log(content)
  const handleOpen = () => {
    setOpen(true);
    const registerURL = `http://localhost:5000/optimize/${content}`;
        axios.post(registerURL, {withCredentials:true})
        .then(response => {
            console.log('Enregistrement réussi :', response.data);
            setoptsequence(response.data.sequence)
            setTime(response.data.time)
        })
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement :', error);
            console.error('Erreur lors de l\'enregistrement - Server Response:', error.response);
        });
        };


  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Optimization result
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Optimal sequence: {optsequence}
        Total time: {Time}
      </Typography>
      <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
    </Box>
  );

  return (
    <div>
      <Button onClick={handleOpen} className="bg-green-100 text-green-500 text-md font-medium rounded-2xl py-1 px-4">Optimise</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modalBody}
      </Modal>
    </div>
  );
};

export default MyModal;
