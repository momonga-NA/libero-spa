import React from "react";
import { Container, Grid } from "@material-ui/core";
import Itinerary from "./Itinerary";
import itineraryDatas from "./itineraryDatas";

const ItineraryList = () => {
  return (
    <Container>
      <h2>
        <span>Schedule</span>
        <br />
        活動日の旅程例
      </h2>
      <Grid container spacing={1}>
        {itineraryDatas.map((itinerary, index) => (
          <Grid key={index} item xs={12} md={6}>
            <Itinerary itinerary={itinerary} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ItineraryList;
