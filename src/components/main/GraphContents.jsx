import React from "react";
import { Container, Grid, withStyles } from "@material-ui/core";
import GraphBar from "./GraphBar";
import graphDatas from "./chartDatas";

const StyledGrid = withStyles({
  root: {
    margin: "10px 20px 50px 20px",
  },
})(Grid);

const GraphContents = () => {
  return (
    <Container>
      <h2>
        <span>BarGraph</span>
        <br />
        グラフで見るLIBERO
      </h2>
      <Grid container spacing={1}>
        {graphDatas.map((graphData, index) => (
          <StyledGrid key={index} item xs={12} md={5}>
            <GraphBar graphData={graphData} />
          </StyledGrid>
        ))}
      </Grid>
    </Container>
  );
};

export default GraphContents;
