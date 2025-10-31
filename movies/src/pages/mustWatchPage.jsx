//1. Import Statements
import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatchList from "../components/cardIcons/removeFromWatchList";
import WriteReview from "../components/cardIcons/writeReview";

//2. Main Functionality
const MustWatchPage = () => {
    const {mustWatch: movieIds } = useContext(MoviesContext);
    
    // Create an array of queries and run in parallel.
      const mustWatchQueries = useQueries({
        queries: movieIds.map((movieId) => {
          return {
            queryKey: ['movie', { id: movieId }],
            queryFn: getMovie,
          }
        })
      });

    // Check if any of the parallel queries is still loading.
    const isPending = mustWatchQueries.find((m) => m.isPending === true);
    
    if (isPending) {
        return <Spinner />;
    }
    
    const movies = mustWatchQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    });

     return (
    <PageTemplate
      title="📌Your Watchlist"
       infoDescription="This page lists all of the movies that you have added to your watch list."
      movies={movies}
      action={(movie) => {
        return (
          <>
           <RemoveFromWatchList movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MustWatchPage;
