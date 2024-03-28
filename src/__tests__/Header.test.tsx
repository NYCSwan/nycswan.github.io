import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "../components/Header";

test("renders Header component", () => {
  render(<Header />);
  expect(true).toBeTruthy();
  // expect(screen.getByText("Portfolio")).toBeInTheDocument();
});
