// components/BottomNavIcons.jsx
import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useNavigate } from "react-router";

export default function BottomNavIcons() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const navOptions = [
    { icon: <HomeIcon />, path: "/" },
    { icon: <FavoriteIcon />, path: "/movies/favorites" },
    { icon: <WatchLaterIcon />, path: "/movies/mustWatch" },
  ];

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(navOptions[newValue].path);
        }}
      >
        {navOptions.map((opt, index) => (
          <BottomNavigationAction key={index} icon={opt.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
