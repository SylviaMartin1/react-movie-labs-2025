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
  const [yearFilter, setYearFilter] = useState("All");
  const [languageFilter, setLanguageFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [sortAscending, setSortAscending] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);

  
  const genreId = Number(genreFilter);

   const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre")setGenreFilter(value);
    else if (type === "year") setYearFilter(value);
    else if (type === "language") setLanguageFilter(value);
    else if (type === "rating") setRatingFilter(value);
  };

  const handleSortAscending = () => {
  setSortAscending(prev => !prev);
  setSortDescending(false);
};

const handleSortDescending = () => {
  setSortDescending(prev => !prev); 
  setSortAscending(false); 
}

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return yearFilter === "All"
        ? true
        : m.release_date?.slice(0, 4) === yearFilter;
    })
     .filter((m) => {
      return languageFilter === "All"
        ? true
        : m.original_language === languageFilter;
    })
    .filter((m) => {
    return ratingFilter === "All"
    ? true
    : m.vote_average >= Number(ratingFilter);
    });
  

        if (sortAscending) {
         displayedMovies.sort((a, b) => a.title.localeCompare(b.title));
      }
      
else if (sortDescending) {
  displayedMovies.sort((a, b) => b.title.localeCompare(a.title));
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
          yearFilter={yearFilter}
          languageFilter={languageFilter}
          ratingFilter={ratingFilter}
         onSortAscending={handleSortAscending}
         onSortDescending={handleSortDescending}
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