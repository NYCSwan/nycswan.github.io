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
import Portfolio from "./pages/Portfolio";
import { styled } from "@mui/material/styles";

const TabPanelSubPage = styled(TabPanel)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  overflow: "hidden",
  fontFamily: "'Rosario Variable', sans-serif",
}));

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
          height: { xs: "calc(100% - 30px)", md: "calc(100% - 60px)" },
        }}
      >
        <div
          style={{
            overflowY: "scroll",
            width: "auto",
            minWidth: "350px",
            padding: 0,
            margin: 0,
            scrollbarWidth: "none",
          }}
        >
          <SidePanel pageTopicId={value} />
        </div>
        <TabContext value={value}>
          <CustomTabList setValue={setValue} />
          <TabPanelSubPage value={"0"}>
            <About />
          </TabPanelSubPage>
          <TabPanelSubPage value={"1"}>
            <Skills />
          </TabPanelSubPage>
          <TabPanelSubPage value={"2"}>
            <Experience />
          </TabPanelSubPage>
          <TabPanelSubPage value={"3"}>
            <Portfolio />
          </TabPanelSubPage>
          <TabPanelSubPage value={"4"}>
            <Contact />
          </TabPanelSubPage>
        </TabContext>
      </Box>
    </Layout>
  );
}

export default App;
