import "@testing-library/jest-dom";
import Home from "../pages/Home";
import { render, screen } from "@testing-library/react";
import {
  DashboardProvider,
  // DashboardsContext,
  useDashboardsContext,
} from "../context/DashboardsContext";

const TestDashboardList = () => {
  const { DashboardList, isLoading } = useDashboardsContext();

  if (isLoading) {
    return <p>Loading</p>;
  } else {
    return <>{DashboardList.length} </>;
  }
};

describe("Home page ", () => {
  test("renders Home and it's title correctly. ", () => {
    render(<Home />);

    // Assert that the loading component is rendered
    expect(screen.getByTestId("main-container")).toBeInTheDocument();
    const childElement = screen.getByText("Dashboards");
    expect(childElement).toBeInTheDocument();
  });

  test("TestDashboardList expected to child be elements  ", () => {
    const { getByTestId } = render(
      <DashboardProvider>
        <TestDashboardList />
      </DashboardProvider>
    );
    const childElement = getByTestId("loading-component");
    expect(childElement).toBeInTheDocument();
  });
});
