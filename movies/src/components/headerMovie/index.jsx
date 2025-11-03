import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkIcon from '@mui/icons-material/Link';
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import Tooltip from '@mui/material/Tooltip';

const MovieHeader = (props) => {
  const movie = props.movie;
  const navigate = useNavigate();

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>


      <Tooltip title="Watch Movie" arrow>
      <a href={movie.homepage}>
          <LinkIcon color="primary" fontSize="large" sx={{'&:hover': {color: 'yellow'}}} />
        </a>
        </Tooltip>

      <Typography variant="h4" component="h3"  sx={{ color: '#ffffff', fontWeight:"bold", fontFamily:"Poppins" }}>
        {movie.title}
        <br />
        <Box sx={{ fontSize: "1.2rem", fontStyle: "italic", textAlign: "center" }}>
          {movie.tagline &&`"${movie.tagline.charAt(0).toUpperCase() + movie.tagline.slice(1).toLowerCase()}"`} </Box>
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
