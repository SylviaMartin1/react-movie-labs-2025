//1. Import Statements
import React from "react";
import { getTrendingMoviesThisWeek } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

//2. Main Functionality
/**
 * TrendingMoviesPage
 * UseQuery() fetches data from TMDB Api using query key and function
 */
const TrendingMoviesPage = (props) => {
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['trending'],
    queryFn: getTrendingMoviesThisWeek,
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

  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  /**
   * Returns a page template with the title, movie list, and icons attached to each movie
   */
     return (
      <PageTemplate
        title="🔥Trending Now "
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
export default TrendingMoviesPage;
