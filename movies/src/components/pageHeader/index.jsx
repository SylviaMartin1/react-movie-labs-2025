// src/components/PageHeaderMovieStyle.jsx
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import InfoButton from "../infoButton";

const PageHeader = ({ title, infoDescription }) => {
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
        mb: 3,
      }}
    >
      {/* Back button */}
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {/* Title + Info button */}
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <InfoButton description={infoDescription} />
        <Typography
          variant="h4"
          component="h3"
          sx={{
            color: "#ffffff",
            fontWeight: "bold",
            fontFamily: "Poppins",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </div>

      {/* Forward button */}
      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default PageHeader;