export interface DashboardLsiTypes {
  dashboards: Dashboard[];
}

export interface Dashboard {
  displayName: string;
  id: string;
  starred: boolean;
  dashboardDetail?: DashboardItemsType;
}

export interface DashboardItemsType {
  [x: string]: any;
  access: Access;
  restrictFilters: boolean;
  allowedFilters: any[];
  displayName: string;
  id: string;
  dashboardItems: DashboardItem[];
  starred: boolean;
}

export interface Access {
  manage: boolean;
  externalize: boolean;
  write: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export interface DashboardItem {
  visualization?: Visualization;
  users: any[];
  x: number;
  y: number;
  type: Type;
  id: string;
  reports: any[];
  resources: any[];
  h: number;
  w: number;
  text?: string;
  map?: Map;
  shape?: string;
}

export interface Map {
  id: string;
  name: string;
}

export enum Type {
  Map = "MAP",
  Text = "TEXT",
  Visualization = "VISUALIZATION",
}

export interface Visualization {
  type: string;
  id: string;
  name: string;
}
