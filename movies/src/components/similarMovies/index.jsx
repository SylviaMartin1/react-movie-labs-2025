import React from "react";
import { getSimilarMovies } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function SimilarMovies({ movie }) {
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
          sx={{ color: "#fff", backgroundColor: "secondary.main" }}
        />
      ))}
    </div>


        {/* <Grid container spacing={2}>
          {similarMovies.map((sm) => (
          <Grid size={6}>
            <Card>
              <CardMedia
              component="img"
              height="250"
              image={
                sm.poster_path
                  ? `https://image.tmdb.org/t/p/w500${sm.poster_path}`
                   : "/default-profile.jpg"
              }
              alt={sm.title}
              sx={{
                width: '100%',
                objectFit: 'contain'
              }}
            />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div" color="primary.contrastText">
                  {sm.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
      ))
      }
        </Grid> */}
      
      </>
    );
}