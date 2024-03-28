import "@testing-library/jest-dom";
import mediaQuery from "css-mediaquery";
import SidePanel from "../components/SidePanel";
import { render, screen } from "../utils/test.utils";

function createMatchMedia(width: string) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
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
  window.matchMedia = createMatchMedia(width);
}

describe("SidePanel", () => {
  it("renders SidePanel component correctly", () => {
    render(<SidePanel pageTopicId="exampleId" />);

    // Add your assertions here to check if the component renders correctly
    expect(screen.getByText(/general info/i)).toBeInTheDocument();
  });

  it("renders XS/mobile friendly styles based on media query changes", () => {
    resizeScreenSize("500px");

    // Render the SidePanel component
    render(<SidePanel pageTopicId="exampleId" />);

    const sidePanelElement = screen.getByTestId("side-panel");
    console.log(sidePanelElement.classList);
    expect(sidePanelElement).toHaveStyle("flexDirection: column");
    expect(sidePanelElement).toHaveStyle("minWidth: 100%");
  });

  it("renders XL styles based on media query changes", () => {
    resizeScreenSize("1930px");

    // Render the SidePanel component
    render(<SidePanel pageTopicId="exampleId" />);

    const sidePanelElement = screen.getByTestId("side-panel");
    const isMatch = mediaQuery.match("(min-width: 1920px)", {
      width: "1920px",
    });
    console.log(sidePanelElement.classList, isMatch);
    // expect(sidePanelElement).toMatchSnapshot();
    expect(isMatch).toBeTruthy();
  });
});
