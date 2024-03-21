import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import brace from "../assets/brace-Hero-Shot.jpeg";
import cayor from "../assets/cayor.png";
import aeroasis from "../assets/mobile.jpg";

const images = [
  {
    label: "E2E SaSS platform for homeowners and mortgage service providers",
    imgPath: brace,
    description:
      "I had a part in digitizing an 80 year old federal process from 70+ printed pages to a short, dynamic, all-inclusive web-based form and user site. My responsibilities included developing and maintaining the front-end of the application. I worked closely with the design team to create a seamless product.",
  },
  {
    label: "Cayor Capital",
    imgPath: cayor,
    description:
      "Cayor Capital was an equity fund that specialized in Sub-Saharan Africa. I was responsible for redesigning, building and maintaining their website. I worked closely with their team to create a seamless user experience.",
  },
  {
    label: "Aeroasis",
    imgPath: aeroasis,
    description:
      "Aeroasis was an IOT startup in the AgTech space. I was the sole in-house developer and was responsible for developing and rapid-prototyping the user experience for web and mobile applications.",
  },
];

function PortfolioDetails() {
  return (
    <>
      {images.map((step, index) => (
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
              spacing={1}
              justifyContent="center"
              paddingX={2}
            >
              <Typography variant="h5">{step.label}</Typography>
              <Typography variant="body1">{step.description}</Typography>
            </Stack>
          </div>
        </Stack>
      ))}
    </>
  );
}

export default PortfolioDetails;
