import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledMain = styled("main")(({ theme }) => ({
  position: "absolute",
  top: "0",
  bottom: "0",
  backgroundColor: theme.palette.background.default,
  textAlign: "left",
  overflow: "hidden",
  [theme.breakpoints.up("xl")]: {
    padding: "40px 80px 45px 60px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "40px 40px 45px 40px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "32px 12px",
    position: "relative",
    overflowY: "scroll",
  },
  [theme.breakpoints.only("xs")]: {
    height: "100%",
    paddingBottom: 0,
    marginBottom: 20,
  },
}));

const StyledStickyFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  bottom: 12,
  left: "40%",
  [theme.breakpoints.only("xs")]: {
    bottom: 0,
    position: "fixed",
    left: "8%",
    backgroundColor: theme.palette.background.default,
  },
}));
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain>
      {children}
      <StyledStickyFooter>
        <Typography variant="body2" marginRight={8}>
          created by Megan Swanby
        </Typography>

        <Typography variant="body2">
          <a href="https://www.github.com/nycswan">source code</a>
        </Typography>
      </StyledStickyFooter>
    </StyledMain>
  );
}
