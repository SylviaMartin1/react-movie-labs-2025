import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import Tooltip from '@mui/material/Tooltip';

const RemoveFromFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.removeFromFavorites(movie);
  };
  return (
     <Tooltip title="Remove" arrow>
    <IconButton
      aria-label="remove from list"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
    </Tooltip>
  );
};

export default RemoveFromFavoritesIcon;
