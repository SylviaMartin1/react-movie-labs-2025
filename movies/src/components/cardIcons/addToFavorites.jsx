import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import { Link } from "react-router";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [open, setOpen] = useState(false);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(movie);
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
    <Tooltip title="Add to Favourites" arrow>
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites }>
    <FavoriteIcon color="primary" fontSize="large" sx={{ '&:hover': { color: 'pink'} }} />
    </IconButton>
    </Tooltip>
     <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message= {
        <span>
        Added to favorites!{" "}
        <Link to="/movies/favorites" style={{ color: "primary", textDecoration: "underline" }}>
        View favorites
        </Link>
        </span>
        }
        action={action}
      />
    </>
 
  );
};

export default AddToFavoritesIcon;
