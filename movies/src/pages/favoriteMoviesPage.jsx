import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import ClearFavoritesFab from "../components/cardIcons/clearFavorites";

const FavoriteMoviesPage = () => {
  const {favorites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries({
    queries: movieIds.map((movieId) => {
      return {
        queryKey: ['movie', { id: movieId }],
        queryFn: getMovie,
      }
    })
  });
  
  // Check if any of the parallel queries is still loading.
  const isPending = favoriteMovieQueries.find((m) => m.isPending === true);

  if (isPending) {
    return <Spinner />;
  }

  const movies = favoriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

    return (
      <>
    <PageTemplate
      title="❤️Your Favourites"
      infoDescription="🎫Welcome to the Favorite Movies page where you can:
        • View movies that you have marked as favourites,
        • Remove them from the list 
        • Add reviews for them
        • Filter, sort, and search using the refine floating action button on the bottom left."
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
    <ClearFavoritesFab />
    </>
  );
};

export default FavoriteMoviesPage;
