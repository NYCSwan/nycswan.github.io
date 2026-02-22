import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import ScrollStack from "../components/ScrollStack";
import { Divider } from "@mui/material";

export default function Contact() {
  return (
    <ContentContainer>
      <PageTitles
        title="We should chat if you ..."
        subtitle="where you can find me"
      />
      <ScrollStack
        direction={{ xs: "column", md: "row" }}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Stack flexDirection="column" width={{ xs: "100%", md: "45%" }}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: "1.1rem", padding: "1rem 0" }}
          >
            Want an administrator with diverse skills, expertise, and creative
            solutions for person-directed senior care
          </Typography>
          <Divider variant="middle" component={"div"} />
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", padding: "1rem 0" }}
            gutterBottom
          >
            Find you work better with a teammate who is passionate about almost
            everything
          </Typography>
          <Divider variant="middle" component={"div"} />
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", padding: "1rem 0" }}
            gutterBottom
          >
            Want to build on a mission that is accessible to everyone
          </Typography>
          <Divider variant="middle" component={"div"} />
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", padding: "1rem 0" }}
            gutterBottom
          >
            Enjoy working with an awesome person and teammate
          </Typography>
          <Divider variant="middle" component={"div"} />
        </Stack>
        <Stack flexDirection="column" width={{ xs: "100%", md: "45%" }}>
          <Box
            bgcolor={"primary.light"}
            padding={2}
            borderRadius={2}
            alignSelf={{ xs: "flex-end" }}
            width={{ xs: "80%", md: "auto" }}
            alignContent={"center"}
          >
            <Typography
              variant="h5"
              width={{ xs: "100%" }}
              align="center"
              alignSelf={"center"}
              gutterBottom
            >
              I&apos;m a technology nerd and non-profit manager driven by
              curiosity. Always up for a challenge. Get in touch, if you&apos;d
              like a great partner!
            </Typography>
            <Typography variant="h6">Find me on: </Typography>
            <Stack direction={"row"} justifyContent="space-evenly">
              <Typography variant="h5">
                <a href="https://www.linkedin.com/in/megan-swanby">Linked-in</a>
              </Typography>

              <Typography variant="h5">
                <a href="https://www.github.com/nycswan">Github</a>
              </Typography>

              <Typography variant="h5">
                <a href="mailto:megan.swanby@gmail.com">Email</a>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </ScrollStack>
    </ContentContainer>
  );
}
