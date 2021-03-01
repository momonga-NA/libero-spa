import React from "react";
import { Container, Grid, withStyles } from "@material-ui/core";
import GraphBar from "./GraphBar";

const StyledGrid = withStyles({
  root: {
    marginBottom: "50px",
  },
})(Grid);

const GraphContents = () => {
  return (
    <Container>
      <h2>
        <span>Data</span>
        <br />
        グラフで見るLIBERO
      </h2>
      <Grid container spacing={1}>
        <StyledGrid item xs={12} md={6}>
          <GraphBar />
        </StyledGrid>
        <StyledGrid item xs={12} md={6}>
          <GraphBar />
        </StyledGrid>
        <StyledGrid item xs={12} md={6}>
          <GraphBar />
        </StyledGrid>
        <StyledGrid item xs={12} md={6}>
          <GraphBar />
        </StyledGrid>
      </Grid>
    </Container>
  );
};

export default GraphContents;
