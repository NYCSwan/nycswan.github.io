import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";

const ContentContainer = styled(Stack)(({ theme }) => ({
  position: "relative",
  paddingX: "3rem",
  paddingY: "1rem",
  height: "100%",
  [theme.breakpoints.up("xl")]: {
    paddingX: "4rem",
    paddingY: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingY: "1rem",
    paddingX: "0.5rem",
  },
}));
export default ContentContainer;
