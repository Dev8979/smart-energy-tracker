export type TimeRange = "7d" | "30d" | "90d";

export interface UsageTrendPoint {
  date: string;
  current: number;
  previous: number;
}

export interface PeakUsagePoint {
  hour: string;
  peak: number;
  average: number;
}

export interface DriverSegment {
  label: string;
  value: number;
  color: string;
}

export interface EnergyDriver {
  name: string;
  percentage: number;
  segments: DriverSegment[];
}

export interface Recommendation {
  id: string;
  text: string;
  savings: number;
  enabled: boolean;
}

export interface TimeRangeConfig {
  efficiencyRate: string;
  efficiencyMetric: string;
  avgReturn: string;
  totalEnergy: string;
  savingsMonthly: number;
  savingsTrend: number;
  efficiencyLabel: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

export type NavItem = {
  id: string;
  label: string;
};
