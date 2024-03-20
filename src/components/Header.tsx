import { FiberManualRecord } from "@mui/icons-material";
import logo from "../assets/swan_logo.png";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Stack flexDirection="row" sx={{ alignContent: "center", height: "60px" }}>
      <Typography variant="h2">Portfolio</Typography>
      <FiberManualRecord />
      <img src={logo} alt="" style={{ height: "40px", width: "auto" }} />
    </Stack>
  );
}
