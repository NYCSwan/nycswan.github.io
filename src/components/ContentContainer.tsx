import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const ContentContainer = styled(Stack)(({ theme }) => ({
  position: "relative",
  paddingX: "3rem",
  paddingY: "1rem",
  height: "100%",
  width: "calc(100%-350px)",
  // boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
  [theme.breakpoints.only("xl")]: {
    width: "calc(100%-450px)",
    paddingX: "4rem",
    paddingY: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingY: "1rem",
    paddingX: "0.5rem",
    width: "100%",
    // height: "100%",
  },
  [theme.breakpoints.only("xs")]: {
    height: undefined,
  },
}));
export default ContentContainer;
