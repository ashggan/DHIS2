import { DashboardItemsType } from "./DashboardItemsType";

export interface DashboardLsiTypes {
  dashboards: Dashboard[];
}

export interface Dashboard {
  displayName: string;
  id: string;
  starred: boolean;
  dashboardDetail?: DashboardItemsType;
}

// quicktype https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/nghVC4wtyzi.json -o src/DashboardItemsType.ts --just-types
