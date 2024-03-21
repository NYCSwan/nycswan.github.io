import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import logo from "../assets/swan_logo.png";

export default function Header() {
  return (
    <Stack
      flexDirection="row"
      sx={{
        alignItems: "center",
        justifyContent: "flex-end",
        maxWidth: { xs: "330px", xl: "450px" },
        height: { xs: "60px", xl: "70px" },
      }}
    >
      <img src={logo} alt="" style={{ height: "40px", width: "auto" }} />
      <Typography variant="h2">Portfolio</Typography>
    </Stack>
  );
}
