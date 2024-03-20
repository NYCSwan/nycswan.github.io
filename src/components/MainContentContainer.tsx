import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const ContentContainer = styled(Box)(({ theme }) => ({
  px: "3rem",
  py: "1rem",
  [theme.breakpoints.up("lg")]: {
    px: "4rem",
    py: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    py: "1rem",
    px: "0.5rem",
  },
}));
export default ContentContainer;
