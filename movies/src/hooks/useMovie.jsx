//1. Import Statements
import { useQuery } from '@tanstack/react-query';
import {getMovie} from '../api/tmdb-api'

//2. Main Functionality
/**
 * @function useMovie()
 * @description fetches a specific movie by its ID
 */
const useMovie = (id) => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['movie', { id }],
    queryFn: getMovie,
  });

  return { data, error, isPending, isError };
};
export default useMovie;
