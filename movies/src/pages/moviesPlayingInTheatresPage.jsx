//1. Import Statements
import React from "react";
import { getMoviesPlayingInTheatres } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

//2. Main Functionality
const MoviesPlayingInTheatresPage = (props) => {
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['moviesPlayingInTheatres'],
    queryFn: getMoviesPlayingInTheatres,
  })


  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

     return (
      <PageTemplate
        title="📽️Now Playing In Theatres"
        infoDescription="🎫Welcome to the Now Playing in Theatres page where you can:
        • View movies that are currently in theatre,
        • Learn more about the movies by clicking the view button
        • Mark them as favourites using the heart icon 
        • Add them to your watchlist using the 'add to watchlist' button.
        • Filter, sort, and search using the refine floating action button on the bottom left."
        movies={movies}
        action={(movie) => {
         return (
            <>
            <AddToFavoritesIcon movie={movie} />
            <AddToMustWatchIcon movie={movie} />
          </>
          )
        }}
      />
  );
};
export default MoviesPlayingInTheatresPage;
