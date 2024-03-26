import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { portfolioData } from "../utils/portfolio";
function PortfolioDetails() {
  return (
    <>
      {portfolioData.map((step, index) => (
        <Stack
          spacing={2}
          flexDirection={"column"}
          sx={{
            position: "relative",
            maxWidth: { xs: "100%", xl: "80%" },
            paddingX: { xs: "1.5rem", sm: "3rem", xl: "6rem" },
            height: "100%",
            backgroundColor: "background.default",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
          key={step.label}
        >
          <div
            style={{
              display: "flex",
              flexDirection: `${index % 2 === 0 ? "row" : "row-reverse"}`,
              flex: `0 0 100%`,
              alignItems: "center",
              marginBottom: "3rem",
              height: "100%",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                boxShadow: "inset 0 0 0 0.2rem common.white",
                height: { xs: "10rem", xl: "13rem" },
                display: "flex",
                alignItems: "stretch",
                justifyContent: "center",
                borderRadius: ".5rem",
                "&:hover": {
                  transform: "scale(1.5)",
                  overflow: "visible",
                  zIndex: 999,
                },
              }}
              src={step.imgPath}
              alt={step.label}
            />
            <Stack
              direction={"column"}
              spacing={2}
              justifyContent="center"
              paddingX={2}
            >
              <Typography variant="h5">{step.label}</Typography>
              <Typography variant="h4" gutterBottom>
                {step.subtitle}
              </Typography>
              <Typography variant="body1">{step.description}</Typography>
              <Box>
                {step.tags.map((tag) => (
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
          </div>
        </Stack>
      ))}
    </>
  );
}

export default PortfolioDetails;
