import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router";
import Tooltip from '@mui/material/Tooltip';

const WriteReviewIcon = ({ movie }) => {
  return (
    <Tooltip title="Review" arrow>
    <Link
      to={`/reviews/form`}
      state={{
          movieId: movie.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
    </Tooltip>
  );
};

export default WriteReviewIcon;
