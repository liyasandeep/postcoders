import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardInfo({ place, index }) {
  return (
    <Grid item xs={4} key={index}>
      <Card sx={{ display: "inline-block", minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <b> {place["place name"]}</b>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place["state"]} ({place["state abbreviation"]})
          </Typography>
          <Typography variant="overline">
            {place["longitude"]} Long, {place["latitude"]} Lat
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
