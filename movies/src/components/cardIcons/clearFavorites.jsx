import React, { useContext, useState } from "react";
import { Fab } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { MoviesContext } from "../../contexts/moviesContext";
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ClearFavoritesFab = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);   
  const handleCloseDialog = () => setOpenDialog(false); 

  const handleClearFavorites = (e) => {
    e.preventDefault();
    context.clearFavorites(movie);
    setOpenDialog(false);
    setOpenSnackbar(true);
  };
  
   const hasFavorites = context.favorites.length > 0;

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };


  return (
    <>
    <Tooltip title="Clear favourites" arrow>
    <Fab
      color="primary"
      sx={{ position: "fixed", top: 64, left: 16 }}
      onClick={handleOpenDialog}
      aria-label="clear all favorites"
    >
      <DeleteForeverIcon />
    </Fab>
    </Tooltip>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Clear All Favourites</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mt: 1 }}>
             {hasFavorites
              ? "Are you sure you want to clear all favourites?"
              : "Nothing to clear."}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
           {hasFavorites && (
          <Button onClick={handleClearFavorites} color="error">Yes</Button>
           )}
        </DialogActions>
      </Dialog>



    <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Cleared all favourites"
        />
    </>
  );
};

export default ClearFavoritesFab;
