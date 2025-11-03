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
import MovieCast from "../movieCast";
import MovieStreamingProviders from "../movieStreamingProviders";
import SimilarMovies from "../similarMovies";
import InfoButton from "../infoButton";
import { Link } from "react-router";
import AddToFavoritesIcon from "../cardIcons/addToFavorites";
import AddToMustWatchIcon from "../cardIcons/addToMustWatch";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  
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
        sx={{...root, }}
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

      <Paper component="ul" sx={{...root, mt:6,display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: "bold", color:"#fff" }} >
        Recommended Movies
         <InfoButton description="Based on user ratings and favourite data." />
      </Typography>
       <MovieRecommendations movie={movie} />
      </Paper>

      <Paper component="ul" sx={{...root, mt:6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: "bold", color:"#fff" }} >
        Similar Movies
         <InfoButton description="Based on keywords and genres." />
      </Typography>
       <SimilarMovies movie={movie} />
      </Paper>

        <Paper component="ul" sx={{...root, mt:6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: "bold", color:"#fff" }} >
        Streaming Providers
      </Typography>
       <MovieStreamingProviders movie={movie} />
      </Paper>

       <Paper component="ul" sx={{...root, mt:6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: "bold", color:"#fff" }} >
        Main Cast
      </Typography>
       <MovieCast movie={movie} />
      </Paper>

      <Paper component="div" sx={{ mt: 6 }}>
      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: "bold", color:"#fff" }} >
        Jump To
        </Typography>

      <Paper component="ul" sx={{...root, mt:0, justifyContent: "flex-start", display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
       <AddToFavoritesIcon movie={movie} sx={{color:"pink"}} />
       <AddToMustWatchIcon movie={movie} sx={{color: "orange"}}/>

        <Link to="/" style={{ textDecoration: "none" }}>
        <Chip
          label="Home"
          color="primary"
          clickable
          sx={{ ...{ color: "#fff" }, margin: 0.5 }}
          />
        </Link>

        <Link to="/movies/trending" style={{ textDecoration: "none" }}>
        <Chip
          label="Trending"
          color="primary"
          clickable
          sx={{ ...{ color: "#fff" }, margin: 0.5 }}
          />
        </Link>

        <Link to="/movies/topRated" style={{ textDecoration: "none" }}>
        <Chip
          label="Top Rated"
          color="primary"
          clickable
          sx={{ ...{ color: "#fff" }, margin: 0.5 }}
          />
        </Link>

        <Link to="/movies/nowPlayingInTheatres" style={{ textDecoration: "none" }}>
        <Chip
          label="In Theatres"
          color="primary"
          clickable
          sx={{ ...{ color: "#fff" }, margin: 0.5 }}
          />
        </Link>

        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
        <Chip
          label="Upcoming"
          color="primary"
          clickable
          sx={{ ...{ color: "#fff" }, margin: 0.5 }}
          />
        </Link>

        <Link to="/movies/favorites" style={{ textDecoration: "none" }}>
        <Chip
          label="Favorites"
          color="primary"
          clickable
          sx={{ ...{ color: "#fff" }, margin: 0.5 }}
          />
        </Link>

        <Link to="/movies/mustWatch" style={{ textDecoration: "none" }}>
        <Chip
          label="Watchlist"
          color="primary"
          clickable
          sx={{ ...{ color: "#fff" }, margin: 0.5 }}
          />
        </Link>
      </Paper>
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
