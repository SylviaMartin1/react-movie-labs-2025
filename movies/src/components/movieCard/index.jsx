import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router";
import Avatar from '@mui/material/Avatar';
import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Tooltip from '@mui/material/Tooltip';


export default function MovieCard({ movie, action }) { 
   const { favorites, addToFavorites, mustWatch, addToMustWatch } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    addToMustWatch(movie);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        action={
          movie.mustWatch ? (
            <Avatar sx={{ backgroundColor: 'orange' }}>
          <PlaylistAddIcon />
        </Avatar>
       ) : null
      }
        
       /*  title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        } */
      />

      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent sx={{color: '#ffffff'}}>
        <Grid container>
          <Grid size={{xs: 12}}>
            <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date.slice(0, 4)}
            </Typography>
          </Grid>

          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p" sx={{color: 'yellow'}}>
              <StarRateIcon fontSize="small" />
              {"  "} {Math.round(movie.vote_average *10) +"%"}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
        { <CardActions disableSpacing>
          {action(movie)}
          <Link to={`/movies/${movie.id}`}>
            {/* <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button> */}
            <Tooltip title="View movie" arrow>
            <IconButton aria-label="view movie" color="primary" sx={{ '&:hover': { color: 'pink'} }}>
            <VisibilityIcon />
            </IconButton> 
            </Tooltip> 
          </Link>
      </CardActions> }
    </Card>
  );
}
