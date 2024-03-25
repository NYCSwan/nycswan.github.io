import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import contact from "../assets/contact-me.jpg";
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
        <Box width={"80%"}>
          <Typography variant="h5" gutterBottom>
            Are looking for an experienced developers with a broad skill set
            from design insights to optimization.
          </Typography>
          <Typography variant="h5">
            Want to build a product that is accessible to everyone.
          </Typography>
        </Box>
        <Stack
          px={4}
          pl={"30%"}
          height="inherit"
          flexDirection="column"
          width={"max-content"}
          alignItems={"center"}
          spacing={6}
          sx={{
            marginLeft: "20%",
            backgroundImage: `url(${contact})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
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
