import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Button, { ButtonProps } from "@mui/material/Button";
import React, { PropsWithChildren } from "react";
import "./Carousel.css";

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<ButtonProps, HTMLButtonElement>
>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...rest } = props;

  return (
    <Button
      className="embla__button embla__button--prev"
      size="small"
      {...rest}
    >
      <KeyboardArrowLeft className="embla__button__svg" />
      {children}
    </Button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...rest } = props;

  return (
    <Button
      className="embla__button embla__button--next"
      size="small"
      {...rest}
    >
      <KeyboardArrowRight className="embla__button__svg" />
      {children}
    </Button>
  );
};

export default { PrevButton, NextButton };
