import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Chart from "../components/Chart";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";

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

        <Chart />
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
          <Typography variant="body1">
            As a former teacher, I take advantage of any opportunity to share my
            knowledge and can often be found answering CS questionsfor technical
            and non-technical teammates. I am dedicated to continuously learning
            -- building on my education background, I am a fantastic asset for
            your team or teaching myself a new programming language.
          </Typography>
          <Typography variant="h2">User Experience</Typography>
          <Typography variant="body1">
            Design and development go hand-in-hand. If technology is not made
            accessable through thoughtful user-focused design, it will never
            succeed. As a developer who specializes in the font end, I ensure
            each feature keeps the user in mind with clean, functional design.
          </Typography>
          <Typography variant="body1">
            I have extensive experience with accessability and responsive
            design.
          </Typography>
        </Stack>
      </Stack>
    </ContentContainer>
  );
}
