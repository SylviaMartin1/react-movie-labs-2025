//1. Import Statements
import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

//2. Main Functionality
/**
 * Homepage
 * useQuery() fetches the data from the TMDB api using the key and function
 */
const HomePage = (props) => {
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['discover'],
    queryFn: getMovies,
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
   * Stores the results in a variable called 'movies'
   */
  const movies = data.results;

  /**
   * redundant but still needed to keep app from crashing
   * filters movies for favourites
   * saves favourites in JSON format to local storage
   * dummy function which just sets movieId to true when added to favourites
   */
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  /**
   * returns page template with title, list of movies, and each movie with its own attached icons
   */
     return (
      <PageTemplate
        title="🎞️ Discover Movies"
        infoDescription="🏠Welcome to the homepage where you can:
        • Browse through a listing of movies which you may find interesting,
        • Learn more about movies by clicking the view button
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
export default HomePage;
