import React from "react";
import { useStopwatch } from "react-timer-hook";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { VscDebugRestart, VscDebugStart } from "react-icons/vsc";
import { MdPause } from "react-icons/md";

const StopWatch = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>StopWatch</h1>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? <VscDebugStart /> : <MdPause />}</p>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={start}>
            <VscDebugStart />
          </Button>
          <Button variant="contained" onClick={pause}>
            <MdPause />
          </Button>
          <Button variant="contained" onClick={reset}>
            <VscDebugRestart color="white" style={{ margin: "5px" }} />
          </Button>
        </Stack>
      </Grid>
    </div>
  );
};

export default StopWatch;
