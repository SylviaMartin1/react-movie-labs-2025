//1. Import Statements
import React, { useState, useContext } from 'react';
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from '@mui/material/IconButton';
import AddchartIcon from '@mui/icons-material/Addchart';
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";


//2. Main Functionality
export default function StatsButton({ }) {
    const [open, setOpen] = useState(false); 
    const handleOpen = () => setOpen(true);   
    const handleClose = () => setOpen(false); 

     const context = useContext(MoviesContext);

    const statsData = {
    totalFavorites: context.favorites.length,
    totalMustWatch: context.mustWatch.length,
  };


    return(
    <>
    <IconButton color="primary" aria-label="stats" onClick={handleOpen}>
    <AddchartIcon />
    </IconButton>

    <Dialog open={open} onClose={handleClose} sx={{color:'grey'}}>
        <DialogTitle sx={{color:'white'}}> Site Statistics</DialogTitle>
        <DialogContent>
           <Typography variant="body1" sx={{ color: 'white', mt: 1, whiteSpace: 'pre-line' }}>
            Total Favorites: {statsData.totalFavorites} <br />
            Total Must Watch: {statsData.totalMustWatch}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
    );  
}
