import "@testing-library/jest-dom";
import { render } from "../utils/test.utils";
import PortfolioDetails from "../components/PortfolioDetails";

describe("PortfolioDetails", () => {
  const testData = {
    label: "Project Label",
    subtitle: "Project Subtitle",
    imgPath: "/path/to/image",
    tags: ["tag1", "tag2"],
    description: "Project Description",
  };

  it("renders correctly", () => {
    const { getByText, getByAltText } = render(
      <PortfolioDetails data={testData} index={0} />
    );

    expect(getByText(testData.label)).toBeInTheDocument();
    expect(getByText(testData.subtitle)).toBeInTheDocument();
    expect(getByAltText(testData.label)).toBeInTheDocument();
    expect(getByText(testData.description)).toBeInTheDocument();

    testData.tags.forEach((tag) => {
      expect(getByText(tag)).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
