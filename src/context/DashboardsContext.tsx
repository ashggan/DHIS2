import { createContext, useContext, useEffect, useState } from "react";
import {
  DashboardProviderProbsTypes,
  DashboardsContextType,
} from "../utils/types";
import axios from "axios";
import { Dashboard } from "../utils/dashboardsTypes";

const base_url = import.meta.env.VITE_BASE_URL;

const DashboardsContext = createContext({} as DashboardsContextType);
export const useDashboardsContext = () => useContext(DashboardsContext);

export const DashboardProvider = ({
  children,
}: DashboardProviderProbsTypes) => {
  const [DashboardList, setDashboardList] = useState([]);
  const [FilterDashboardList, setFilterDashboardList] = useState([]);
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // get Lists of dashboards from API
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(base_url + "dashboards.json");
        const dashList = res.data.dashboards;

        await Promise.all(
          dashList.map(async (item: Dashboard) => {
            const dashItem = await axios.get(base_url + item.id + ".json");
            item.dashboardDetail = dashItem.data;
          })
        );

        setDashboardList(dashList);
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error?.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const starDashBoard = (id: string) => {
    setDashboardList((prevDashboardList: any) =>
      prevDashboardList.map((dashboard: Dashboard) =>
        dashboard.id === id
          ? { ...dashboard, starred: !dashboard.starred }
          : dashboard
      )
    );
  };

  const FliterDashboards = (name: string) => {
    if (!name) return setFilterDashboardList(DashboardList);
    // let list = DashboardList.filter((item: Dashboard) => {
    //   return item.dashboardDetail?.dashboardItems?.some(
    //     (dashboardItem: any) => {
    //       dashboardItem.hasOwnProperty(name);
    //     }
    //   );
    //   console.log(item);
    // });

    // setFilterDashboardList(list);
    alert(name);
  };

  return (
    <DashboardsContext.Provider
      value={{
        DashboardList,
        isLoading,
        serverError,
        starDashBoard,
        FliterDashboards,
        FilterDashboardList,
      }}
    >
      {children}
    </DashboardsContext.Provider>
  );
};