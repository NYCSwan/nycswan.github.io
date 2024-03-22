import { GitHub } from "@mui/icons-material";
import { Box, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import js from "../assets/js.svg";
import ImageAsIcon from "../components/ImageAsIcon";

export default function Skills() {
  return (
    <ContentContainer>
      <PageTitles title={"My Skills"} />
      <Stack
        spacing={2}
        direction={"column"}
        sx={{
          position: "relative",
          maxWidth: { xs: "100%", md: "80%" },
          px: { xs: "1.5rem", sm: "3rem", xl: "6rem" },
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <Typography variant="h2">Tech Stack</Typography>
        <Typography variant="body1">
          As a former teacher, I take advantage of any opportunity to share my
          knowledge and can often be found answering CS questions to technical
          and non-technical teammates. Dedicated to continuously learning--
          building product-related education materials with my education
          background, assisting the team or teaching myself a new programming
          language.
        </Typography>
        <Grid container rowGap={2}>
          <Grid container item xs={12}>
            <Grid item xs={3}>
              <ImageAsIcon component="img" src={js} alt="" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Javascript</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={3}>
              <GitHub />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Javascript</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={3}>
              <ImageAsIcon component="img" src={node} alt="" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Node</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={3}>
              <ImageAsIcon component="img" src={react} alt="" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">React</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Stack spacing={2} direction={"column"}>
          <Typography variant="h2">
            The 5 C's - Collaboration, Communication, Creativity, Curiosity,
            Quirky
          </Typography>
          <Typography variant="body1">
            No project can be successful without deliberate, clear communcation
            and collaboration. I pride myself on my collaboration. I can quickly
            and efficiently join your team using continuous-integration tools
            like git or test driven development.
          </Typography>
          <Typography variant="h2">User Experience</Typography>
          <Typography variant="body1">
            Design and development go hand-in-hand. If technology is not made
            accessable through thoughtful user-focused design, it will never
            succeed. As a developer who specializes in the font end, I ensure
            each feature keeps the user in mind with clean, functional design.
          </Typography>
        </Stack>
      </Stack>
    </ContentContainer>
  );
}
