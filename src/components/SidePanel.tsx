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
        maxWidth: "300px",
        height: "100%",
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
        <Typography variant="h2">General Info</Typography>
        <Grid container>
          <Grid item xs={1}>
            <BorderColor />
            <StarPurple500 />
            <ContactMail />
            <Computer />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5">Name:</Typography>
            <Typography variant="h5">Location:</Typography>
            <Typography variant="h5">Email:</Typography>
            <Typography variant="h5">LinkedIn:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">Megan Swanby</Typography>
            <Typography variant="body1">Washington, DC</Typography>
            <Typography variant="body1">megan.swanby@gmail.com</Typography>
            <Typography variant="body1">www.meganswanby.com</Typography>
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
