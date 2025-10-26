import { useQuery } from '@tanstack/react-query';
//import { useEffect, useState } from "react";
import {getMovie} from '../api/tmdb-api'

const useMovie = (id) => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['movie', { id }],
    queryFn: getMovie,
  });
  
  return { data, error, isPending, isError };
};

/* const useMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
}; */

export default useMovie;
