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
    <Container
      sx={{
        paddingBottom: { xs: 0, sm: "1rem", xl: "1.5rem" },
        paddingTop: { xs: ".25rem" },
      }}
    >
      <Typography
        variant="h5"
        color={"text.secondary"}
        alignSelf={{ xs: "center", md: "flex-start" }}
      >
        {subtitle}
      </Typography>
      <Typography variant="h1" alignSelf={{ xs: "center", md: "flex-start" }}>
        {title}
      </Typography>
    </Container>
  );
}
