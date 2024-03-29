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
      <ScrollStack>
        <Typography variant="h5">
          Are looking for an experienced developer with a broad skill set
        </Typography>
        <Typography variant="h5">
          Find you work better with a teammate who is passionate about
          everything (...from design insights to page reload optimization)
        </Typography>
        <Typography variant="h5">
          Want to build a product that is accessible to everyone
        </Typography>
        <Typography variant="h5" gutterBottom>
          Enjoy working with an awesome person and teammate
        </Typography>
        <Stack flexDirection="column" alignItems={"center"}>
          <Typography variant="h5">
            Find me on{" "}
            <a href="https://www.linkedin.com/in/megan-swanby">Linked-in</a>
          </Typography>
          <Typography variant="h5" marginTop={0}>
            OR <a href="https://www.linkedin.com/in/megan-swanby">Github!</a>
          </Typography>
        </Stack>
      </ScrollStack>
    </ContentContainer>
  );
}
