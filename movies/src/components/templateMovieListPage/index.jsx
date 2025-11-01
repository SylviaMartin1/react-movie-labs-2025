import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import MovieFilters from "../movieFilters";
import Fab from '@mui/material/Fab';
import FilterListIcon from '@mui/icons-material/FilterList';

function MovieListPageTemplate({ movies, title, action, infoDescription }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [showFilters, setShowFilters] = useState(false);
  const [sortAscending, setSortAscending] = useState(false);
  
  const genreId = Number(genreFilter);

   const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  const handleSortAscending = () => {
  setSortAscending(prev => !prev);
};

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

    if (sortAscending) {
  displayedMovies.sort((a, b) => a.title.localeCompare(b.title));
}

 

  return (
    <Grid container>
      
      <Grid size={12}>
        <Header title={title} infoDescription={infoDescription} />
      </Grid>

       {showFilters && (
      <Grid size={12} sx={{ mb: 2 }}>
        <MovieFilters
         onUserInput={handleChange}
         titleFilter={nameFilter}
         genreFilter={genreFilter}
         onSortAscending={handleSortAscending}
        />
       </Grid> 
       )}

        <Fab
      color="primary"
      sx={{ position: "fixed", left: 16, bottom: 16 }}
      onClick={() => setShowFilters(!showFilters)}
    >
      <FilterListIcon />
    </Fab>

      <Grid container sx={{flex: "1 1 500px"}}>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;

/* <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>, in second grid */