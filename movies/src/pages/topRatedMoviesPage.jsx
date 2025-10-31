//1. Import Statements
import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

//2. Main Functionality
/**
 * TopRatedMoviesPage
 * UseQuery fetches data from the tmdb api using query key and function
 */
const TopRatedMoviesPage = (props) => {
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['topRated'],
    queryFn: getTopRatedMovies,
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
   * Returns page template with title, list of movies, and icons attached to each movie
   */
     return (
      <PageTemplate
        title="⭐Top Rated Movies"
         infoDescription="This page displays the most rated movies of all time."
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
export default TopRatedMoviesPage;
