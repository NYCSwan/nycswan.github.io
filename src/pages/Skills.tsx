import Typography from "@mui/material/Typography";
import MainContentContainer from "../components/ContentContainer";
import { Stack } from "@mui/material";
import { GitHub, Javascript } from "@mui/icons-material";

export default function Skills() {
  return (
    <MainContentContainer>
      <Typography variant="h6">What I am good at</Typography>
      <Typography variant="h1">My Skills</Typography>

      <Typography variant="h2">Languages</Typography>
      <Typography variant="body1">
        As a former teacher, I take advantage of any opportunity to share my
        knowledge and can often be found answering CS questions to technical and
        non-technical teammates. Dedicated to continuously learning-- building
        product-related education materials with my education background,
        assisting the team or teaching myself a new programming language.
      </Typography>
      <Stack spacing={2} direction={"row"}>
        <Javascript />
        <GitHub />
      </Stack>
      <Typography variant="h2">Collaboration</Typography>
      <Typography variant="body1">
        No project can be successful without deliberate, clear communcation and
        collaboration. I pride myself on my collaboration. I can quickly and
        efficiently join your team using continuous-integration tools like git
        or test driven development.
      </Typography>
      <Typography variant="h2">User Experience</Typography>
      <Typography variant="body1">
        Design and development go hand-in-hand. If technology is not made
        accessable through thoughtful user-focused design, it will never
        succeed. As a developer who specializes in the font end, I ensure each
        feature keeps the user in mind with clean, functional design.
      </Typography>
    </MainContentContainer>
  );
}
