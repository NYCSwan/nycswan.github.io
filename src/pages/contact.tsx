import { Container, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import contact from "../assets/contact-me.jpg";

export default function Contact() {
  return (
    <>
      <Typography variant="h1" pt={4}>
        We should chat if you ...
      </Typography>
      <Container
        maxWidth="md"
        sx={{
          marginTop: "2rem",
          height: "auto",
          backgroundColor: "white",
          paddingX: "1rem",
        }}
      >
        <Box width={"80%"} py={4}>
          <Typography variant="h5" gutterBottom>
            Are looking for an experienced developers with a broad skill set
            from design insights to optimization.
          </Typography>
          <Typography variant="h5">
            Want to build a product that is accessible to everyone.
          </Typography>
        </Box>
        <Stack
          pt={6}
          pb={12}
          px={4}
          pl={"30%"}
          height="inherit"
          flexDirection="column"
          spacing={6}
          sx={{
            backgroundImage: `url(${contact})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Typography variant="h5">
            Find me on{" "}
            <a href="https://www.linkedin.com/in/megan-swanby">Linked-in!</a>
          </Typography>
        </Stack>
      </Container>
    </>
  );
}
