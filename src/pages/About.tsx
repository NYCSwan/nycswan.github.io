import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContentContainer from "../components/ContentContainer";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <ContentContainer>
      <Box pb={4}>
        <Typography variant="h1">
          Full Stack Developer. Tinkerer. Thinkerer.
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Typography variant="body1">
          Hey there! Thanks for stopping by. I am a fullstack developer with a
          unique background in education and the arts. I am passion about
          creating beautiful, functional, and intuitive user experiences and
          products.
        </Typography>
        <Typography variant="body1">
          I've been a dev for over 6 years because I love finding solutions for
          complex real life problems using technology, working on a variety of
          projects, from web apps to mobile, and even IoT. I love working with
          all types of clients, from startups to established companies, and even
          non-profits.
        </Typography>
        <Typography variant="body1">
          I'm a startup evangelist, technology nerd, former public school
          teacher, and non-profit manager. I'm always up for a challenge, get in
          touch if you'd like a great partner!
        </Typography>
      </Stack>
    </ContentContainer>
  );
}
