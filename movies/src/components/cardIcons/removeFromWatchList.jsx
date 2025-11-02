import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import Tooltip from '@mui/material/Tooltip';

const RemoveFromWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchList = (e) => {
    e.preventDefault();
    context.removeFromFavorites(movie);
    context.removeFromMustWatch(movie);
  };
  return (
    <Tooltip title="Remove" arrow>
    <IconButton
      aria-label="remove from list"
      onClick={handleRemoveFromWatchList}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
    </Tooltip>
  );
};

export default RemoveFromWatchListIcon;
