import "@testing-library/jest-dom";
import { screen, render } from "../utils/test.utils";
import App from "../App";

test("demo", () => {
  expect(true).toBe(true);
});

test("renders App component", () => {
  render(<App />);
  expect(screen.getByText("About")).toBeInTheDocument();
});
