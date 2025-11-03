import React from "react";
import { getSimilarMovies } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner';
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router";

export default function SimilarMovies({ movie }) {
  const navigate = useNavigate();

    const { data, error, isPending, isError } = useQuery({
        queryKey: ['similar', { id: movie.id }],
        queryFn: getSimilarMovies,
      });

    if (isPending) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;

    const similarMovies = data?.results || [];

    return (
       <>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {similarMovies.map((sm) => (
        <Chip
          key={sm.id}
          label={sm.title}
          clickable
          onClick={() => navigate(`/movies/${sm.id}`)}
          sx={{ color: "#fff", backgroundColor: "secondary.main" }}
        />
      ))}
    </div>  
      </>
    );
}