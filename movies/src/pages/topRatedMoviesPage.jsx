//1. Import Statements
import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

//2. Main Functionality
const TopRatedMoviesPage = (props) => {
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['topRated'],
    queryFn: getTopRatedMovies,
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

  /**
   * Returns page template with title, list of movies, and icons attached to each movie
   */
     return (
      <PageTemplate
        title="⭐Top Rated Movies"
        infoDescription="🏅Welcome to the Top Rated Movies page where you can:
        • View the top rated movies of all time,
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
export default TopRatedMoviesPage;
