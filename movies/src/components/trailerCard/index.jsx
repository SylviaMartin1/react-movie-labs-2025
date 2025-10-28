import React from "react";
import { useQuery } from "@tanstack/react-query";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { getMovieTrailer } from "../../api/tmdb-api";

const MovieTrailer = ({ movieId }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trailer", { id: movieId }],
    queryFn: getMovieTrailer,
  });

  if (isLoading) return <div>Loading trailer...</div>;
  if (isError || !data.results.length) return <div>No trailer available</div>;

  // pick the first trailer
  const trailer = data.results[0];

  return (
    <Paper sx={{ p: 2, mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Trailer ▶️
      </Typography>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name}
        sx={{ width: "100%", height: 400 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Paper>
  );
};

export default MovieTrailer;
