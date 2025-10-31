//1. Import Statements
import React from "react";
import { getMoviesPlayingInTheatres } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

//2. Main Functionality
/**
 * MoviesPlayingInTheatresPage
 * UseQuery() fetches data from TMDB Api using key and function
 */
const MoviesPlayingInTheatresPage = (props) => {
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['moviesPlayingInTheatres'],
    queryFn: getMoviesPlayingInTheatres,
  })

  /**
   * If the fetch is loading, the spinner component is displayed
   */
  if (isPending) {
    return <Spinner />
  }

  /**
   * If the fetch fails, an error message is displayed
   */
  if (isError) {
    return <h1>{error.message}</h1>
  }  

  /**
   * The results from the fetch are stored in a variable called 'movies'
   */
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  /**
   * Returns page template component with title, movies list, each movie with its own attached icons
   */
     return (
      <PageTemplate
        title="📽️Now Playing In Theatres"
         infoDescription="This page displays the movies that are currently playing in theatres."
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
