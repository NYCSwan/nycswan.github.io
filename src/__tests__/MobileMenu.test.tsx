import "@testing-library/jest-dom";
import MobileMenu from "../components/MobileMenu";
import {
  act,
  createMatchMedia,
  fireEvent,
  render,
  resizeScreenSize,
} from "../utils/test.utils";

describe("MobileMenu", () => {
  const mockSetValue = jest.fn();

  it("calls setValue function with correct value when menu item is clicked", () => {
    resizeScreenSize("500px");

    const { getByText } = render(<MobileMenu setValue={mockSetValue} />);

    const menuButton = getByText(/Menu/i);

    fireEvent.click(menuButton);

    act(() => {
      const menuItemContact = getByText(/Contact/i);
      fireEvent.click(menuItemContact);
    });
    expect(mockSetValue).toHaveBeenCalledTimes(1);
    expect(mockSetValue).toHaveBeenCalledWith("4");

    const menuItemAbout = getByText(/About/i);
    fireEvent.click(menuItemAbout);
    expect(mockSetValue).toHaveBeenCalledTimes(2);

    const menuItemSkills = getByText(/Skills/i);
    fireEvent.click(menuItemSkills);
    expect(mockSetValue).toHaveBeenCalledWith("1");
    expect(mockSetValue).toHaveBeenCalledTimes(3);

    const menuItemExperience = getByText(/Experience/i);
    fireEvent.click(menuItemExperience);
    expect(mockSetValue).toHaveBeenCalledWith("2");
    expect(mockSetValue).toHaveBeenCalledTimes(4);

    const menuItemPortfolio = getByText(/Portfolio/i);
    fireEvent.click(menuItemPortfolio);
    expect(mockSetValue).toHaveBeenCalledWith("2");
    expect(mockSetValue).toHaveBeenCalledTimes(5);
  });

  it("does not render menu button when screen size is greater than md", () => {
    resizeScreenSize("1500px");
    render(<MobileMenu setValue={mockSetValue} />);
    const isMatch = createMatchMedia({
      display: "none",
    });

    expect(isMatch).toBeTruthy();
  });

  xit("removes the anchor ref when the menu is resized wider than 900px", () => {
    resizeScreenSize("500px");

    const { getByText } = render(<MobileMenu setValue={mockSetValue} />);
    const menuButton = getByText(/Menu/i);
    const isMatchVisible = createMatchMedia({
      display: "block",
    });

    expect(isMatchVisible).toBeTruthy();
    expect(menuButton).toBeInTheDocument();

    resizeScreenSize("1500px");
    const isMatch = createMatchMedia({
      display: "none",
    });

    expect(isMatch).toBeTruthy();
  });
});
