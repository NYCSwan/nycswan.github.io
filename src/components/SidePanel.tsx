import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import meImage from "../assets/me-hero.jpg";
import {
  BorderColor,
  StarPurple500,
  ContactMail,
  Computer,
  GitHub,
} from "@mui/icons-material";
import headshot from "../assets/headshot.jpg";
import coworker from "../assets/contact.jpg";
const imageKey: { [pageTopicId: string]: string } = {
  "0": headshot,
  "1": headshot,
  "2": coworker,
  "3": meImage,
  "4": meImage,
};
export default function SidePanel({ pageTopicId }: { pageTopicId: string }) {
  const image = imageKey[pageTopicId];
  return (
    <Stack
      flexDirection="column"
      sx={{
        maxWidth: { xs: "100%", sm: "350px", xl: "450px" },
        backgroundColor: "secondary.main",
        color: "grey.100",
        height: { xs: "30%", sm: "100%" },
      }}
    >
      <img src={image} alt="" />
      <Stack
        flexDirection="column"
        sx={{
          padding: "2rem 1rem",
          height: "100%",
        }}
      >
        <Typography
          color="secondary.light"
          sx={{
            fontSize: { xs: "1.75rem", xl: "2rem" },
            fontFamily: "Major Mono Display",
            fontWeight: 700,
          }}
          textAlign="center"
          gutterBottom
        >
          General Info
        </Typography>
        <Grid container paddingTop={"1rem"}>
          <Grid item xs={1}>
            <BorderColor sx={{ height: "35px" }} />
            <StarPurple500 sx={{ height: "35px" }} />
            <ContactMail sx={{ height: "35px" }} />
            <Computer sx={{ height: "35px" }} />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5" align="center">
              Name:
            </Typography>
            <Typography align="center" variant="h5">
              Loc:
            </Typography>
            <Typography align="center" variant="h5">
              Email:
            </Typography>
            <Typography variant="h5" align="center">
              Web:
            </Typography>
          </Grid>
          <Grid item xs={8} gap={1}>
            <Typography lineHeight={"40px"}>Megan Swanby</Typography>
            <Typography lineHeight={"40px"}>Washington, DC</Typography>
            <Typography lineHeight={"40px"}>megan.swanby@gmail.com</Typography>
            <Typography lineHeight={"40px"}>www.meganswanby.com</Typography>
          </Grid>
        </Grid>
        <Box sx={{ height: "35px", paddingTop: 2, alignSelf: "center" }}>
          <IconButton href="https://www.github.com/nycswan" color="inherit">
            <GitHub />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/meganswanby"
          >
            <ContactMail />
          </IconButton>
        </Box>
      </Stack>
    </Stack>
  );
}
