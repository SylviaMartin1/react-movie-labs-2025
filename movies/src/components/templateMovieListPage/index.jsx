import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import MovieFilters from "../movieFilters";
import Fab from '@mui/material/Fab';
import FilterListIcon from '@mui/icons-material/FilterList';
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
  const [page, setPage] = useState(1);

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
      if (yearFilter === "All") return true;
      if (yearFilter === "Before 2010") return Number(m.release_date?.slice(0,4)) < 2010;
      if (yearFilter === "Before 2000") return Number(m.release_date?.slice(0,4)) < 2000;
      if (yearFilter === "Before 1990") return Number(m.release_date?.slice(0,4)) < 1990;
      if (yearFilter === "Before 1980") return Number(m.release_date?.slice(0,4)) < 1980;
      if (yearFilter === "Before 1970") return Number(m.release_date?.slice(0,4)) < 1970;
      return m.release_date?.slice(0, 4) === yearFilter;
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

const moviesPerPage = 16;
  const lastMovieShown = page * moviesPerPage;
  const firstMovieShown = lastMovieShown - moviesPerPage;
  const numberOfMoviesShown = displayedMovies.slice(firstMovieShown, lastMovieShown);

 const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
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

      <Tooltip title="Refine" arrow>
      <Fab
      color="primary"
      sx={{ position: "fixed", left: 16, bottom: 16 }}
      onClick={() => setShowFilters(!showFilters)}
    >
      <FilterListIcon />
    </Fab>
    </Tooltip>

      <Grid container sx={{flex: "1 1 500px"}}>
      <MovieList action={action} movies={numberOfMoviesShown}></MovieList>
      </Grid>
    </Grid>
    <Stack spacing={2} sx={{ width: '100%', alignItems: 'center', mt: 2 }}>
    <Pagination
    count={Math.ceil(displayedMovies.length / moviesPerPage)} showFirstButton showLastButton //whole number   
    page={page}     
    onChange={handlePageChange}    
    color="primary"
    sx={{
      '& .MuiPaginationItem-root': { color: '#ffffff'},
      '& .Mui-selected': { backgroundColor: '#e50914', color: '#fff'},
    }}
    />
   </Stack>
    </>
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