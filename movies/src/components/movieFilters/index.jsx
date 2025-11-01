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

    
        <IconButton onClick={props.onSortAscending} sx={{ color: "white" }} >
          
        <ArrowUpwardIcon />
      </IconButton>
     
      <IconButton onClick={props.onSortDescending} sx={{ color: "white" }}>
        <ArrowDownwardIcon />
      </IconButton>




        <FormControl  variant="filled" sx={{...formControl, m: 1, minWidth: 200, backgroundColor: "#fff"}}>
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
    }}
            >

            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        </Box>
</>
  )


}