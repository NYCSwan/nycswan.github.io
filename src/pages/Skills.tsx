import Typography from "@mui/material/Typography";
import Chart from "../components/Chart";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import ScrollStack from "../components/ScrollStack";
import { Stack } from "@mui/material";

export default function Skills() {
  return (
    <ContentContainer>
      <PageTitles title={"My Skills"} />
      <ScrollStack>
        <Stack spacing={2}>
          <Typography variant="h2">
            The 5 C&apos;s - Collaborative, Communicative, Creative, Curious,
            Quirky
          </Typography>
          <Typography variant="body1">
            No project or team can be successful without deliberate, clear
            communcation and collaboration. I pride myself on my collaboration.
            I can quickly and efficiently join your team .
          </Typography>
          <Typography variant="body1">
            As a former teacher, I take advantage of any opportunity to share my
            knowledge and can often be found answering questions for technical
            and non-technical teammates. I am dedicated to continuously learning
            -- building on my education background, I am a fantastic asset for
            your team or teaching myself a new programming language.
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{ marginTop: 16, marginBottom: 16 }}>
          <Typography variant="h2">Hands on Experience</Typography>
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
        <Stack spacing={2}>
          <Typography variant="h2">Tech Stack</Typography>

          <Chart />
        </Stack>
      </ScrollStack>
    </ContentContainer>
  );
}
