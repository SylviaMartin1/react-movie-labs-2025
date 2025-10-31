//1. Import Statements
import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

//2. Main Functionality
/**
 * UpcomingMoviesPage
 * UseQuery() fetches the data from the api using key and function
 */
const UpcomingMoviesPage = () => {
   const { data, error, isPending, isError  } = useQuery({
      queryKey: ['upcoming'],
      queryFn: getUpcomingMovies,
    })

    /**
     * If the fetch is loading, displays the spinner component
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
     * Returns page template with title, list of movies, each movie with its own attached icons
     */
      return (
      <PageTemplate
        title="📅Upcoming Releases"
         infoDescription="This page displays movies that will be available for viewing or streaming soon."
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
export default UpcomingMoviesPage;   