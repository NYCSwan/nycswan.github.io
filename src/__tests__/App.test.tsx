import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import App from "../App";
import { render } from "../utils/test.utils";

test("renders App component", () => {
  render(<App />);
  // Add your assertions here to test the rendered output or behavior of the component
  expect(screen.getByText("About")).toBeInTheDocument();
});
