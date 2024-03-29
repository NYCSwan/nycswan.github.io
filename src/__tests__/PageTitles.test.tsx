import { render, screen } from "../utils/test.utils";
import PageTitles from "../components/PageTitles";
import "@testing-library/jest-dom";

test("renders page titles correctly", () => {
  const title = "My Page Title";
  const subtitle = "what I am good at";

  render(<PageTitles title={title} subtitle={subtitle} />);

  const titleElement = screen.getByText(title);
  const subtitleElement = screen.getByText(subtitle);

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
});
