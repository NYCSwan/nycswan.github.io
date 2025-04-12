import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ProjectContainer = styled("div")<{ index: number }>(
  ({ theme, index }) => ({
    display: "flex",
    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
    flex: `0 0 100%`,
    alignItems: "center",
    marginBottom: "3rem",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  })
);

function PortfolioDetails({
  data,
  index,
}: {
  data: {
    label: string;
    subtitle: string;
    imgPath: string;
    tags: string[];
    description: string;
  };
  index: number;
}) {
  const { label, subtitle, imgPath, tags, description } = data;
  return (
    <Stack
      spacing={2}
      flexDirection={"column"}
      sx={{
        position: "relative",
        width: { xs: "100%", xl: "80%" },
        maxWidth: { xs: "100%", xl: "80%" },
        paddingX: { xs: 0, md: "3rem", xl: "6rem" },
        height: "100%",
        backgroundColor: "background.default",
        alignItems: { xs: "flex-start", lg: "center" },
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 18px 40px -8px",
        marginBottom: "1.5rem",
      }}
      key={label}
    >
      <ProjectContainer index={index}>
        <Box
          component="img"
          sx={{
            display: { xs: "none", md: "flex" },
            width: "100%",
            boxShadow: "inset 0 0 0 0.2rem common.white",
            height: { md: "auto", xl: "13rem" },
            alignItems: "stretch",
            justifyContent: "center",
            borderRadius: ".5rem",
            "&:hover, &:active": {
              transform: "scale3d(2.5, 1.2, 0.3)",
              overflow: "visible",
              zIndex: 999,
            },
          }}
          src={imgPath}
          alt={label}
        />
        <Stack
          direction={"column"}
          spacing={2}
          justifyContent="center"
          padding={2}
        >
          <Typography variant="h5">{label}</Typography>
          <Typography variant="h4" gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Box paddingBottom={"16px"}>
            {tags.map((tag) => (
              <Typography
                key={tag}
                variant="body2"
                sx={{
                  display: "inline",
                  padding: ".2rem .5rem",
                  margin: ".2rem",
                  borderRadius: ".2rem",
                  backgroundColor: "primary.light",
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                {tag}
              </Typography>
            ))}
          </Box>
        </Stack>
      </ProjectContainer>
    </Stack>
  );
}

export default PortfolioDetails;
