import React from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function MovieCast({ movie }) {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ['cast', { id: movie.id }],
        queryFn: getMovieCredits,
      });

    if (isPending) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;

    const cast = data?.cast ? data.cast.slice(0, 6) : [];

     if (cast.length === 0) {
    return (
      <Typography variant="body1" color="white">
        No cast information available.
      </Typography>
    );
  }
    return (
       <>
        <Grid container spacing={2}>
          {cast.map((c) => (
          <Grid size={6}>
            <Card>
              <CardMedia
              component="img"
              height="250"
              image={
                c.profile_path
                  ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
                   : "/default-profile.jpg"
              }
              alt={c.name}
              sx={{
                width: '100%',
                objectFit: 'contain'
              }}
            />

              <CardContent>
                <Typography gutterBottom variant="body1" component="div" color="primary.contrastText">
                  {c.name} as {c.character}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
      ))
      }
        </Grid>
      
      </>
    );
}