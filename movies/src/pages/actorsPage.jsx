//1. Import Statements
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getActors } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import PageHeader from "../components/pageHeader";


//2. Main Functionality
/**
 * SearchPage
 * useQuery() fetches the data from the TMDB api using the key and function
 */
const ActorsPage = (props) => {
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['actors'],
    queryFn: getActors,
  })

  /**
   * If the fetch is loading, the spinner component is displayed
   */
  if (isPending) {
    return <Spinner />
  }

  /**
   * If the fetch fails, an error message is displayed
   */
  if (isError) {
    return <h1>{error.message}</h1>
  }  

  /**
   * Stores the results in a variable called 'actors'
   */
  const actors = data.results;

   return (
    <Box sx={{ p: 3 }}>
    <PageHeader
     title="🎭 Popular Actors"
     infoDescription="🎭Welcome to the Actors page where you can view popular actors."
    />

      <Grid container spacing={3}>
        {actors.map((actor) => (
          <Grid item key={actor.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 280, mx: "auto", textAlign: "center" }}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
                sx={{ height: 400, objectFit: "cover" }}
              />
              <CardContent sx={{color:"white"}}>
                <Typography variant="h5" sx={{fontWeight:"bold"}}>{actor.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
                  Known for: {actor.known_for.map((movie) => movie.title || movie.name).join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ActorsPage;
