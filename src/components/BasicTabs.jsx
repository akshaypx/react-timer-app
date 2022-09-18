import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Time from "./Time";
import StopWatch from "./StopWatch";
import Timer from "./Timer";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Timer" value="1" />
            <Tab label="StopWatch" value="2" />
            <Tab label="Time" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Timer expiryTimestamp={time} />
        </TabPanel>
        <TabPanel value="2">
          <StopWatch />
        </TabPanel>
        <TabPanel value="3">
          <Time />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
