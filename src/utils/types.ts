import { ReactNode } from "react";
import { Dashboard } from "./dashboardsTypes";

export interface DashboardsContextType {
  DashboardList: Dashboard[];
  FilterDashboardList: Dashboard[];
  starDashBoard: (id: string) => void;
  FliterDashboards: (id: string) => void;
  serverError: string;
  isLoading: boolean;
}

export interface DashboardProviderProbsTypes {
  children: ReactNode;
}
