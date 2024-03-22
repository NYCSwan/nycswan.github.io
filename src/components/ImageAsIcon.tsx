import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const ImageAsIcon = styled(Box)(({ theme }) => ({
  width: "1rem",
  height: "auto",
  verticalAlign: "middle",
  [theme.breakpoints.up("lg")]: {
    width: "3rem",
  },
}));

export default ImageAsIcon;
