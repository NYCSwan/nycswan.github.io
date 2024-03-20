import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Box sx={{ p: "1rem" }}>
      <Typography variant="h1">
        Insightful, proactive, product-obsessed software development.
      </Typography>
      <Stack spacing={2}>
        <Typography variant="body1"></Typography>
        <Typography variant="body1">
          I'm a fullstack software engineer with a focus on front-end
          development, and a passion for creating beautiful, functional, and
          intuitive user experiences.
        </Typography>
        <Typography variant="body1">
          My things, projects, and other stuff on the side. I've been a dev for
          over 6 years because I love finding solutions for complex real life
          problems using technology, working on a variety of projects, from web
          apps to mobile apps, and even IoT. I love working with all types of
          clients, from startups to established companies, and even non-profits.
          I'm always looking for new projects to work on, so if you have an
          idea, let's chat!
        </Typography>
      </Stack>
    </Box>
  );
}
