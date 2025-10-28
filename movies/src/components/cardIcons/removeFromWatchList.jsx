import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchList = (e) => {
    e.preventDefault();
    context.removeFromFavorites(movie);
    context.removeFromMustWatch(movie);
  };
  return (
    <IconButton
      aria-label="remove from list"
      onClick={handleRemoveFromWatchList}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchListIcon;
