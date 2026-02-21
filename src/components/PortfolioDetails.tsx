import { Card, CardContent, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const ProjectContainer = styled(Card)<{ index: number }>(
  ({ theme, index }) => ({
    display: "flex",
    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
    flex: `0 0 100%`,
    marginBottom: "3rem",
    maxHeight: "400px",
    maxWidth: "90%",
    background: theme.palette.background.default,
    boxShadow: theme.shadows[4],
    paddingX: { xs: 0, md: "3rem", xl: "6rem" },
    paddingY: { xs: 0, md: "3rem", xl: "6rem" },
    borderRadius: 4,
    position: "relative",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }),
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
    <ProjectContainer index={index} variant="outlined">
      <CardMedia
        component="img"
        sx={{
          display: { xs: "none", md: "flex" },
          width: "50%",
          boxShadow: "inset 0 0 0 0.2rem common.white",
          height: "auto",
          alignItems: "stretch",
          justifyContent: "center",
          borderRadius: ".5rem",
          "&:hover, &:active": {
            transform: "scale3d(1.5, 1.2, 0.3)",
            overflow: "visible",
            zIndex: 999,
          },
        }}
        src={imgPath}
        alt={label}
      />
      <CardContent>
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
      </CardContent>
    </ProjectContainer>
  );
}

export default PortfolioDetails;
