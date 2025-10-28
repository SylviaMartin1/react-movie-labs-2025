import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [open, setOpen] = useState(false);
  

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
   <Tooltip title="Add to WatchList" arrow>
    <IconButton aria-label="add to watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" sx={{ '&:hover': { color: 'pink'}}} />
    </IconButton>
    </Tooltip>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added to watchlist"
        action={action}
      />
    </>
  );
};
export default AddToMustWatchIcon;