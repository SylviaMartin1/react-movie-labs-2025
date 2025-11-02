//1. Import Statements
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";


//2. Main Functionality
export default function InfoButton({ description }) {
    const [open, setOpen] = useState(false); 
    const handleOpen = () => setOpen(true);   
    const handleClose = () => setOpen(false); 

    return(
    <>
    <IconButton color="primary" aria-label="info" onClick={handleOpen}>
    <InfoIcon />
    </IconButton>

    <Dialog open={open} onClose={handleClose} sx={{color:'grey'}}>
        <DialogTitle sx={{color:'white'}}>About  </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mt: 1, color:'white', whiteSpace: "pre-line"}}>
            {description || "This page provides useful information."}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
    );  
}
