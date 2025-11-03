import React from "react";
import { getMovieStreamingProviders } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function MovieStreamingProviders({ movie }) {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ['streamingProviders', { id: movie.id }],
        queryFn: getMovieStreamingProviders,
      });

    if (isPending) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;

    const streamingProviders = (data?.results?.IE?.flatrate  || []).concat(data?.results?.IE?.rent  || []);

    return (
       <>
        <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start" >
          {streamingProviders.map((s) => (
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card sx={{ bgcolor: 'secondary.light' }}>
              <CardMedia
              component="img"
              height="40"
              image={
                s.logo_path
                  ? `https://image.tmdb.org/t/p/w500${s.logo_path}`
                  : "/default-profile.jpg"
              }
              alt={s.name}
              sx={{width: '150', height: '200', objectFit: 'contain'}}
            />

              <CardContent sx={{ height: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography gutterBottom variant="body1" component="div" color="primary.contrastText">
                  {s.provider_name}
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