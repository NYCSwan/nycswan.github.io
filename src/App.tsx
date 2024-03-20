import { TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SidePanel from "./components/SidePanel";
import CustomTabList from "./components/TabList";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/contact";

function App() {
  const [value, setValue] = React.useState("0");

  return (
    <Layout>
      <Header />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          width: "inherit",
          height: "calc(100% - 60px)",
        }}
      >
        <SidePanel />
        <TabContext value={value}>
          <CustomTabList setValue={setValue} />
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
