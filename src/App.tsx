import { TabList, TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SidePanel from "./components/SidePanel";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/contact";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Header />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          width: "inherit",
        }}
      >
        <SidePanel />
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="Navigation"
            centered
            sx={{
              position: "absolute",
              height: "80px",
              top: "-60px",
              backgroundColor: "transparent",
              color: "text.secondary",
              marginLeft: "300px",
              paddingLeft: "2rem",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignContent: "center",
            }}
          >
            <Tab
              value={"0"}
              label="About"
              {...a11yProps(0)}
              sx={{ height: "80px", px: "16px" }}
            />
            <Tab value={"1"} label="Skills" {...a11yProps(1)} />
            <Tab value={"2"} label="Experience" {...a11yProps(2)} />
            <Tab value={"3"} label="Contact" {...a11yProps(3)} />
          </TabList>
          <TabPanel value={"0"} sx={{ height: "auto" }}>
            <About />
          </TabPanel>
          <TabPanel value={"1"}>
            <Skills />
          </TabPanel>
          <TabPanel value={"2"}>
            <Experience />
          </TabPanel>
          <TabPanel value={"3"}>
            <Contact />
          </TabPanel>
        </TabContext>
      </Box>
    </Layout>
  );
}

export default App;
