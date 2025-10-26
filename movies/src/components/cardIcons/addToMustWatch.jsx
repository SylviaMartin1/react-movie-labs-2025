import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Tooltip from '@mui/material/Tooltip';


const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };

  return (
   <Tooltip title="Add to WatchList" arrow>
    <IconButton aria-label="add to watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" sx={{ '&:hover': { color: 'pink'}}} />
    </IconButton>
    </Tooltip>
  );
};
export default AddToMustWatchIcon;