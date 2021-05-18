import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function SimpleRating({ rateValue, setRateValue }) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" className="text-muted">
          Choose a Rating
        </Typography>
        <Rating
          name="simple-controlled"
          className="mt-1"
          value={rateValue}
          onChange={(event, newValue) => {
            setRateValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}
