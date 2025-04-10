import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import ScrollStack from "../components/ScrollStack";
export default function Contact() {
  return (
    <ContentContainer>
      <PageTitles
        title="We should chat if you ..."
        subtitle="where you can find me"
      />
      <Typography
        variant="body1"
        width={"70%"}
        align="center"
        alignSelf={"center"}
        marginTop={2}
      >
        I&apos;m a technology nerd, former public school teacher, and non-profit
        manager. I&apos;m always up for a challenge, get in touch if you&apos;d
        like a great partner!
      </Typography>
      <ScrollStack direction="row">
        <Stack flexDirection="column" width={"45%"}>
          <Typography variant="h5">
            Want an administrator with diverse skills, expertise, and creative
            solutions for person-centered senior care
          </Typography>
          <Typography variant="h5">
            Are looking for an experienced developer with a broad skillset
          </Typography>
          <Typography variant="h5">
            Find you work better with a teammate who is passionate about
            everything... (from professional training to website accessibility)
          </Typography>
          <Typography variant="h5">
            Want to build on a mission that is accessible to everyone
          </Typography>
          <Typography variant="h5" gutterBottom>
            Enjoy working with an awesome person and teammate
          </Typography>
        </Stack>
        <Stack flexDirection="column" alignItems={"center"} width={"45%"}>
          <Typography variant="h5">
            Find me on{" "}
            <a href="https://www.linkedin.com/in/megan-swanby">Linked-in</a>
          </Typography>
          <Typography variant="h5" marginTop={0}>
            OR <a href="https://www.github.com/nycswan">Github!</a>
          </Typography>
        </Stack>
      </ScrollStack>
    </ContentContainer>
  );
}
