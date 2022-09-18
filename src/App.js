import "./App.css";
import BasicTabs from "./components/BasicTabs";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ width: 400, height: 400, margin: "2rem" }}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <BasicTabs />
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
