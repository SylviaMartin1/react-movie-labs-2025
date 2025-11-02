import React, { useState } from "react";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Spinner from '../spinner';
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

const formControl = 
  {
    margin: 1,
    minWidth: "200px",
    backgroundColor: "rgb(255, 255, 255)"
  };


export default function MovieFilters(props) {
    const { data, error, isPending, isError } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });

  if (isPending) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All"){
      genres.unshift({ id: "0", name: "All" });
    }
  
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); 
    };

    const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };


  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

   const handleYearChange = (e) => {
    handleChange(e, "year", e.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 1, flexWrap: "wrap" }}>
       <TextField
              sx={{...formControl, minWidth: 200}}
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
              value={props.titleFilter}
              onChange={handleTextChange}
    />

    <Tooltip title="Sort A-Z" arrow>
       <IconButton onClick={props.onSortAscending} sx={{ color: "white" }} >    
        <ArrowUpwardIcon />
      </IconButton>
      </Tooltip>
      <Tooltip title="Sort Z-A" arrow>
      <IconButton onClick={props.onSortDescending} sx={{ color: "white" }}>
        <ArrowDownwardIcon />
      </IconButton>
      </Tooltip>

        <FormControl  variant="filled" sx={{...formControl, m: 1, minWidth: 150, backgroundColor: "#fff"}}>
          <InputLabel id="genre-label" sx={{ color: "#000" }}>Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              defaultValue=""
              value={props.genreFilter}
              onChange={handleGenreChange}
              MenuProps={{
              PaperProps: {
                sx: {
                  '& .MuiMenuItem-root': { color: '#fff' } // makes the dropdown text white
                  }
                }
              }}>
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ ...formControl, m: 1, minWidth: 150, backgroundColor: "#fff" }}
        >
          <InputLabel id="year-label" sx={{ color: "#000" }}>
            Year
          </InputLabel>
          <Select
            labelId="year-label"
            id="year-select"
            value={props.yearFilter}
            onChange={handleYearChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  '& .MuiMenuItem-root': { color: '#fff' } // makes the dropdown text white
                  }
                }
              }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="Before 2010">Before 2010</MenuItem>
            <MenuItem value="Before 2000">Before 2000</MenuItem>
            <MenuItem value="Before 1990">Before 1990</MenuItem>
            <MenuItem value="Before 1980">Before 1980</MenuItem>
            <MenuItem value="Before 1970">Before 1970</MenuItem>
          </Select>
        </FormControl>

        <FormControl
        variant="filled"
        sx={{ ...formControl, m: 1, minWidth: 150, backgroundColor: "#fff" }}
      >
        <InputLabel id="language-label" sx={{ color: "#000" }}>
          Language
        </InputLabel>


        <Select
          labelId="language-label"
          id="language-select"
          value={props.languageFilter}
          onChange={(e) => props.onUserInput("language", e.target.value)}
          MenuProps={{
              PaperProps: {
                sx: {
                  '& .MuiMenuItem-root': { color: '#fff' } // makes the dropdown text white
                  }
                }
              }}
        >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">French</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
        <MenuItem value="de">German</MenuItem>
        <MenuItem value="it">Italian</MenuItem>
        <MenuItem value="ja">Japanese</MenuItem>
        <MenuItem value="zh">Chinese</MenuItem>

        </Select>
      </FormControl>
      <FormControl
  variant="filled"
  sx={{ ...formControl, m: 1, minWidth: 150, backgroundColor: "#fff" }}
>
  <InputLabel id="rating-label" sx={{ color: "#000" }}>
    Minimum Rating
  </InputLabel>
  <Select
    labelId="rating-label"
    id="rating-select"
    value={props.ratingFilter}
    onChange={(e) => props.onUserInput("rating", e.target.value)}
    MenuProps={{
              PaperProps: {
                sx: {
                  '& .MuiMenuItem-root': { color: '#fff' } // makes the dropdown text white
                  }
                }
              }}
  >
    <MenuItem value="All">All</MenuItem>
    <MenuItem value="9">9+</MenuItem>
    <MenuItem value="8">8+</MenuItem>
    <MenuItem value="7">7+</MenuItem>
    <MenuItem value="6">6+</MenuItem>
    <MenuItem value="5">5+</MenuItem>
  </Select>
</FormControl>


        </Box>
</>
  )


}