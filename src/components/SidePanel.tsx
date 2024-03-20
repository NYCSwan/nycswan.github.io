import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import meImage from "../assets/contact.jpg";
import {
  BorderColor,
  StarPurple500,
  ContactMail,
  Computer,
  GitHub,
} from "@mui/icons-material";

export default function SidePanel() {
  return (
    <Stack
      flexDirection="column"
      sx={{
        maxWidth: "400px",
        backgroundColor: "secondary.main",
        color: "gray.100",
      }}
    >
      <img src={meImage} alt="" />
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        <Typography variant="h2" textAlign="center" gutterBottom>
          General Info
        </Typography>
        <Grid container>
          <Grid item xs={1}>
            <BorderColor sx={{ height: "35px" }} />
            <StarPurple500 sx={{ height: "35px" }} />
            <ContactMail sx={{ height: "35px" }} />
            <Computer sx={{ height: "35px" }} />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5">Name:</Typography>
            <Typography variant="h5">Location:</Typography>
            <Typography variant="h5">Email:</Typography>
            <Typography variant="h5">LinkedIn:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5">Megan Swanby</Typography>
            <Typography variant="h5">Washington, DC</Typography>
            <Typography variant="h5">megan.swanby@gmail.com</Typography>
            <Typography variant="h5">www.meganswanby.com</Typography>
          </Grid>
          <Grid item>
            <IconButton href="https://www.github.com/nycswan" color="inherit">
              <GitHub />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/meganswanby"
            >
              <ContactMail />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
