import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

const ApplicationBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
