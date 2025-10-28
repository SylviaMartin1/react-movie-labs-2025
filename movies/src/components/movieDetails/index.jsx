import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import MovieRecommendations from "../movieRecommendations";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
const [drawerOpen, setDrawerOpen] = useState(false);


  return (
    <>
      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: "bold" }} >
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip,  color: '#ffffff'}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root, color: '#ffffff'}}>
        <Chip 
        icon={<AccessTimeIcon />} 
        label={`${movie.runtime} min.`}
        sx={{ color: '#ffffff' }} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
          sx={{ color: '#ffffff' }}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
          sx={{ color: '#ffffff' }}
        />
        <Chip label={`Released: ${movie.release_date}`}
        sx={{ color: '#ffffff' }} />
      </Paper>

      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip, color:'#ffffff'}} />
          </li>
        ))}
     </Paper>

      <Paper component="ul" sx={{...root, mt:6}}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: "bold", color:"#fff" }} >
        Recommended Movies
      </Typography>
       <MovieRecommendations movie={movie} />
      </Paper>

           <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;
