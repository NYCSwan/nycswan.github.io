import "@testing-library/jest-dom";
import { render, screen } from "../utils/test.utils";
import TabList from "../components/TabList";
import { TabContext } from "@mui/lab";
import userEvent from "@testing-library/user-event";

describe("TabList", () => {
  test("renders tab list with correct styling", () => {
    render(
      <TabContext value={"0"}>
        <TabList setValue={() => {}} />
      </TabContext>
    );

    const tabListElement = screen.getByRole("tablist");
    expect(tabListElement).toBeInTheDocument();
    expect(tabListElement).toHaveStyle({
      display: "flex",
    });
  });

  test("calls setValue function when a tab is clicked", async () => {
    const user = userEvent.setup();
    const setValueMock = jest.fn().mockImplementation((value) => value);
    render(
      <TabContext value={"0"}>
        <TabList setValue={setValueMock} />
      </TabContext>
    );

    const tabElement = screen.getByRole("tab", { name: /Skills/i });
    await user.click(tabElement);

    expect(setValueMock).toHaveBeenCalledTimes(1);
  });
});
