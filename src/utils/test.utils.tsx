import { ReactNode, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import themeResponsiveFonts from "@app/ThemeOptions";
import mediaQuery from "css-mediaquery";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={themeResponsiveFonts}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement<any>,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

function createMatchMedia(cssProperty: { [x: string]: string }) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, cssProperty),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width: string) {
  window.matchMedia = createMatchMedia({ width: width });
}

export * from "@testing-library/react";
export { customRender as render, resizeScreenSize, createMatchMedia };
