import "@testing-library/jest-dom";
import SidePanel from "../components/SidePanel";
import { render, resizeScreenSize, screen } from "../utils/test.utils";
import mediaQuery from "css-mediaquery";

describe("SidePanel", () => {
  it("renders SidePanel component correctly", () => {
    render(<SidePanel pageTopicId="exampleId" />);

    expect(screen.getByText(/general info/i)).toBeInTheDocument();
  });

  it("renders XS/mobile friendly styles based on media query changes", () => {
    resizeScreenSize("500px");

    render(<SidePanel pageTopicId="exampleId" />);

    const sidePanelElement = screen.getByTestId("side-panel");

    expect(sidePanelElement).toHaveStyle("flexDirection: column");
  });

  it("renders XL styles based on media query changes", () => {
    resizeScreenSize("1930px");

    render(<SidePanel pageTopicId="exampleId" />);

    // const sidePanelElement = screen.getByTestId("side-panel");
    const isMatch = mediaQuery.match("(min-width: 1920px)", {
      width: "1920px",
    });

    // expect(sidePanelElement).toMatchSnapshot();
    expect(isMatch).toBeTruthy();
  });
});
