import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from '@mui/material/Tooltip';


const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(movie);
  };

  return (
    <Tooltip title="Add to Favourites" arrow>
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites }>
    <FavoriteIcon color="primary" fontSize="large" sx={{ '&:hover': { color: 'pink'} }} />
    </IconButton>
    </Tooltip>
  );
};

export default AddToFavoritesIcon;
