import React from "react";
import { Container, Grid } from "@material-ui/core";
import Itinerary from "./Itinerary";

const itineraries = [
  {
    spot1: "",
    spot2: "",
    spot3: "",
    spot4: "",
  },
  {
    spot1: "",
    spot2: "",
    spot3: "",
    spot4: "",
  },
];

const ItineraryList = () => {
  return (
    <Container>
      <h2>
        <span>Schedule</span>
        <br />
        活動日の旅程例
      </h2>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Itinerary />
        </Grid>
        <Grid item xs={12} md={6}>
          <Itinerary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItineraryList;
