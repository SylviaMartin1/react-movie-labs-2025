import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromList = (e) => {
    e.preventDefault();
    context.removeFromFavorites(movie);
    context.removeFromMustWatch(movie);
  };
  return (
    <IconButton
      aria-label="remove from list"
      onClick={handleRemoveFromList}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromListIcon;
