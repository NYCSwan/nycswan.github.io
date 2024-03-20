import Typography from "@mui/material/Typography";
import CarouselStepper from "../components/CarouselStepper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Experience() {
  return (
    <>
      <Box pb={4}>
        <Typography variant="h1">
          Insightful, proactive, product-obsessed software development.
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Typography variant="h5" textAlign={"center"}>
          Experience
        </Typography>

        <CarouselStepper />
      </Stack>
    </>
  );
}
