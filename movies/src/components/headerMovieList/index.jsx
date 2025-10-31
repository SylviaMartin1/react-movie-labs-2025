import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import InfoButton from "../infoButton";


const Header = (props ) => {
  const title = props.title
  const infoDescription = props.infoDescription
  const navigate = useNavigate();

  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <InfoButton description={infoDescription}/>
      <Typography variant="h4" component="h3" sx={{ color: "primary.contrastText", fontWeight:"bold", fontFamily: "Poppins"}} >
        {title}
      </Typography>
      </div>

      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
         

    </Paper>
    
  );
};

export default Header;
