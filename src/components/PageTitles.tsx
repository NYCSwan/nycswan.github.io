import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function PageTitles({
  title,
  subtitle = "what I am good at",
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Container sx={{ paddingBottom: { xs: 0, sm: "1rem", xl: "1.5rem" } }}>
      <Typography variant="h5" color={"text.secondary"}>
        {subtitle}
      </Typography>
      <Typography variant="h1" align="left">
        {title}
      </Typography>
    </Container>
  );
}
