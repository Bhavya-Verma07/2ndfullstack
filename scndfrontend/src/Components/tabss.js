import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Animals from "../Components/animals";
import AnimalNews from "../Components/animalnews";
import Thoughts from "../Components/thoughts";
// import Form1 from "./form1";
import Form from "./form";
import Form2 from "./form2";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          style={{
            backgroundColor: "lavender",
            width: "auto",
            padding: "5px 20px",
            color: "white",
            fontFamily: "fantasy",
          }}
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Animals" {...a11yProps(0)} />
          <Tab label="Animal News" {...a11yProps(1)} />
          <Tab label="Thoughts" {...a11yProps(2)} />
          <Tab label="Write Here" {...a11yProps(3)} />
          <Tab label="lost & found" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Animals />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AnimalNews />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Thoughts />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Form2 />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Form />
      </TabPanel>
    </Box>
  );
}
