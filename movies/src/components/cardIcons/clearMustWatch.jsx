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

const ClearMustWatchFab = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

   const handleOpenDialog = () => setOpenDialog(true);   
   const handleCloseDialog = () => setOpenDialog(false); 


  const handleClearWatchlist = (e) => {
    e.preventDefault();
    context.clearMustWatch(movie);
    setOpenDialog(false);
    setOpenSnackbar(true);
  };

  const hasMustWatch = context.mustWatch.length > 0;

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };


  return (
    <>
    <Tooltip title="Clear watchlist" arrow>
    <Fab
      color="primary"
      sx={{ position: "fixed", top: 64, left: 26 }}
      onClick={handleOpenDialog}
      aria-label="clear watchlist"
    >
      <DeleteForeverIcon />
    </Fab>
    </Tooltip>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Clear Watchlist</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {hasMustWatch
              ? "Are you sure you want to clear your watchlist?"
              : "Nothing to clear."}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          {hasMustWatch && (
          <Button onClick={handleClearWatchlist} color="error">Yes</Button>
          )}
        </DialogActions>
      </Dialog>

    <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Cleared watchlist"
        />
    </>
  );
};

export default ClearMustWatchFab;
