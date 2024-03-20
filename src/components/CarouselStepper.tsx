import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import brace from "../assets/brace-Hero-Shot.jpeg";
import cayor from "../assets/cayor.png";
import aeroasis from "../assets/mobile.jpg";
import { NextButton, PrevButton } from "./CarouselArrowButtons";
import { usePrevNextButtons } from "../hooks/usePrevNextButtons";
import "./Carousel.css";

const images = [
  {
    label: "Brace.ai",
    imgPath: brace,
  },
  {
    label: "Cayor Capital",
    imgPath: cayor,
  },
  {
    label: "Aeroasis",
    imgPath: aeroasis,
  },
];
type PropType = {
  options?: EmblaOptionsType;
};

function CarouselStepper(props: PropType) {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: false }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.active === false
          ? (autoScroll.reset as () => void)
          : (autoScroll.stop as () => void);

      resetOrStop();
      callback();
    },
    [emblaApi]
  );
  return (
    <Box className="embla" sx={{ flex: "1 1 100%" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          // height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <Box
        ref={emblaRef}
        className="embla__viewport"
        sx={{ position: "relative", height: 255 }}
      >
        {images.map((step) => (
          <div key={step.label} className="embla__container">
            <Box
              className="embla__slide"
              component="img"
              sx={{
                height: "100%",
                display: "block",
                overflow: "hidden",
                width: "100%",
              }}
              src={step.imgPath}
              alt={step.label}
            />
          </div>
        ))}
      </Box>
      <Stack direction="row" spacing={1} justifyContent="center">
        <PrevButton
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />
        <NextButton
          onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        />
      </Stack>
    </Box>
  );
}

export default CarouselStepper;
