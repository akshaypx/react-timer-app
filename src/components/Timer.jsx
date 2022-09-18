import React from "react";
import { useTimer } from "react-timer-hook";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { VscDebugRestart, VscDebugStart } from "react-icons/vsc";
import { MdPause } from "react-icons/md";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days, isRunning, start, pause, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Timer 5 Mins</h1>
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
          {/* <Button variant="contained" onClick={resume}>
          Resume
        </Button> */}
          <Button
            variant="contained"
            onClick={() => {
              // Restarts to 5 minutes timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + 300);
              restart(time);
            }}
          >
            <VscDebugRestart color="white" style={{ margin: "5px" }} />
          </Button>
        </Stack>
      </Grid>
    </div>
  );
};

export default Timer;
