import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DashboardProvider } from "./context/DashboardsContext";

const App = () => {
  return (
    <>
      <DashboardProvider>
        <Navbar />
        <Outlet />
      </DashboardProvider>
    </>
  );
};

export default App;
