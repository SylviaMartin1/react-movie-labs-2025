import React from "react";
import { getMovieRecommendations } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner';
import Chip from "@mui/material/Chip";

export default function MovieRecommendations({ movie }) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['recommendations', { id: movie.id }],
    queryFn: getMovieRecommendations,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const recommendations = data.results;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {recommendations.map((rec) => (
        <Chip
          key={rec.id}
          label={rec.title}
          clickable
          sx={{ color: "#fff", backgroundColor: "secondary.main" }}
        />
      ))}
    </div>
  );
}
