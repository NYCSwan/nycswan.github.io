import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import logo from "../assets/swan_logo.png";

export default function Header() {
  return (
    <Stack
      flexDirection="row"
      sx={{
        justifyContent: "flex-start",
        maxWidth: { xs: "100px", md: "330px", xl: "400px" },
        height: "60px",
      }}
    >
      <img
        src={logo}
        alt=""
        style={{ height: "24px", width: "auto", paddingRight: "1rem" }}
      />
      <Typography variant="h2" fontFamily="Major Mono Display">
        Portfolio
      </Typography>
    </Stack>
  );
}
