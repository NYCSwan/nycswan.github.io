import {
  createTheme,
  ThemeOptions,
  responsiveFontSizes,
} from "@mui/material/styles";
const components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
  MuiCard: {
    defaultProps: {
      elevation: 1,
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        width: "initial",
        height: "initial",
        backgroundColor: "#6d6875",
        boxShadow: "inset 0px 0px 1px 0px grey.700",
        borderColor: "rgb(73, 18, 110)",
        borderWidth: "1px",
        margin: "1rem",
        padding: ".5rem",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: "inherit",
      },
      fixed: {
        height: "100%",
        padding: "1rem",
        verticalAlign: "middle",
        position: "fixed",
        top: "25%",
        width: "80%",
        left: "10%",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
        backgroundColor: "#2E4621",
        color: "#EEFEBF",
        marginRight: "1px",
        transition: "all 0.2s ease",
        "&.Mui-active, &.Mui-selected": {
          // border: "1px solid #2e4621",
          backgroundColor: "#EEFEBF",
        },
      },
    },
  },
};

const theme = createTheme({
  components,
  palette: {
    mode: "light",
    primary: {
      main: "#2E4621",
      light: "#EEFEBF",
    },
    secondary: {
      main: "#023047",
      light: "#8338ec",
    },
    error: { main: "#f50057" },
    gray: {
      100: "#f8f9fa",
      200: "#f3ecfd",
      300: "#6d6875D9",
      500: "#9a96a9",
      700: "#4B175E",
      800: "#230344",
      900: "#090213",
    },
    background: {
      default: "#f8f9fa",
      paper: "rgb(165, 165, 165)",
    },
    common: {
      black: "#000",
      white: "#f8f9fa",
    },
    text: {
      primary: "#100f3a",
      secondary: "#7a798c",
    },
    divider: "#eadece",
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  typography: {
    fontFamily: "'Rubik Variable', sans-serif",
    fontWeightLight: 300,
    fontWeightBold: 700,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h1: {
      fontFamily: "Major Mono Display",
      fontWeight: "800",
      textAlign: "center",
      fontSize: "2.3rem",
    },
    h2: {
      fontFamily: "Rubik Variable",
      fontSize: "2rem",
      fontWeight: "400",
    },
    h3: {
      fontFamily: "Rubik Variable",
      fontSize: "1.7rem",
      fontWeight: "600",
    },
    h4: {
      fontFamily: "Rubik Variable",
      fontSize: "1.25rem",
      fontWeight: "600",
    },
    h5: {
      fontFamily: "Rubik Variable",
      fontSize: "1.2rem",
      fontWeight: "400",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Rubik Variable",
      fontWeight: "400",
      lineHeight: "1.25rem",
      textAlign: "left",
    },
    body2: {
      fontSize: ".8rem",
      fontFamily: "Rubik Variable",
      fontWeight: "400",
      lineHeight: "1rem",
      textAlign: "left",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      appear: 1000,
      enter: 2000,
      exit: 3000,
    },
  },
  shadows: [
    "none",
    "0px 0px 1px 0px rgb(73, 18, 110)",
    "2px 2px 19px -2px rgba(0, 0, 0, 0.44)",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
  ],
} as ThemeOptions);

export default responsiveFontSizes(theme);
