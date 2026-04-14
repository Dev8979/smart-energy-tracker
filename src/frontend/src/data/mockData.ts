import type {
  EnergyDriver,
  PeakUsagePoint,
  Recommendation,
  TimeRange,
  TimeRangeConfig,
  UsageTrendPoint,
} from "../types";

export const usageTrendData: Record<TimeRange, UsageTrendPoint[]> = {
  "7d": [
    { date: "Mon", current: 38, previous: 30 },
    { date: "Tue", current: 42, previous: 35 },
    { date: "Wed", current: 51, previous: 40 },
    { date: "Thu", current: 46, previous: 38 },
    { date: "Fri", current: 60, previous: 52 },
    { date: "Sat", current: 55, previous: 48 },
    { date: "Sun", current: 48, previous: 44 },
  ],
  "30d": [
    { date: "Jan 1", current: 65, previous: 42 },
    { date: "Feb 5", current: 78, previous: 55 },
    { date: "Mar 12", current: 90, previous: 68 },
    { date: "Apr 8", current: 72, previous: 80 },
    { date: "May 18", current: 105, previous: 92 },
    { date: "Jun 2", current: 130, previous: 110 },
    { date: "Jun 27", current: 155, previous: 140 },
    { date: "Jul 15", current: 180, previous: 165 },
  ],
  "90d": [
    { date: "Jan", current: 210, previous: 180 },
    { date: "Feb", current: 240, previous: 200 },
    { date: "Mar", current: 310, previous: 260 },
    { date: "Apr", current: 290, previous: 270 },
    { date: "May", current: 380, previous: 320 },
    { date: "Jun", current: 420, previous: 360 },
    { date: "Jul", current: 510, previous: 460 },
    { date: "Aug", current: 540, previous: 490 },
  ],
};

export const peakUsageData: Record<TimeRange, PeakUsagePoint[]> = {
  "7d": [
    { hour: "06 AM", peak: 70, average: 40 },
    { hour: "09 AM", peak: 160, average: 100 },
    { hour: "10 AM", peak: 210, average: 140 },
    { hour: "12 PM", peak: 230, average: 160 },
    { hour: "2 PM", peak: 185, average: 130 },
    { hour: "4 PM", peak: 175, average: 115 },
    { hour: "8 PM", peak: 130, average: 90 },
  ],
  "30d": [
    { hour: "03 AM", peak: 60, average: 35 },
    { hour: "06 AM", peak: 85, average: 50 },
    { hour: "09 AM", peak: 220, average: 140 },
    { hour: "10 AM", peak: 340, average: 220 },
    { hour: "12 PM", peak: 365, average: 250 },
    { hour: "2 PM", peak: 290, average: 200 },
    { hour: "3 PM", peak: 310, average: 195 },
    { hour: "4 PM", peak: 275, average: 180 },
    { hour: "8 PM", peak: 215, average: 145 },
  ],
  "90d": [
    { hour: "03 AM", peak: 180, average: 110 },
    { hour: "06 AM", peak: 250, average: 160 },
    { hour: "09 AM", peak: 680, average: 430 },
    { hour: "10 AM", peak: 1020, average: 680 },
    { hour: "12 PM", peak: 1095, average: 760 },
    { hour: "2 PM", peak: 870, average: 610 },
    { hour: "4 PM", peak: 825, average: 550 },
    { hour: "8 PM", peak: 645, average: 440 },
  ],
};

export const energyDriversByRange: Record<TimeRange, EnergyDriver[]> = {
  "7d": [
    {
      name: "Overall Consumption",
      percentage: 100,
      segments: [
        { label: "HVAC", value: 38, color: "oklch(0.55 0.25 270)" },
        { label: "Lighting", value: 28, color: "oklch(0.72 0.2 55)" },
        { label: "Appliances", value: 20, color: "oklch(0.65 0.18 145)" },
        { label: "Other", value: 14, color: "oklch(0.75 0.15 190)" },
      ],
    },
    {
      name: "Easiest to Reduce",
      percentage: 72,
      segments: [
        { label: "Lighting", value: 50, color: "oklch(0.55 0.25 270)" },
        { label: "Standby", value: 30, color: "oklch(0.72 0.2 55)" },
        { label: "Other", value: 20, color: "oklch(0.75 0.15 190)" },
      ],
    },
    {
      name: "Peak Hour Charge",
      percentage: 55,
      segments: [
        { label: "HVAC", value: 55, color: "oklch(0.55 0.25 270)" },
        { label: "EV Charging", value: 30, color: "oklch(0.72 0.2 55)" },
        { label: "Other", value: 15, color: "oklch(0.65 0.18 145)" },
      ],
    },
    {
      name: "Cooled Energy",
      percentage: 40,
      segments: [
        { label: "AC Units", value: 65, color: "oklch(0.55 0.25 270)" },
        { label: "Ventilation", value: 35, color: "oklch(0.72 0.2 55)" },
      ],
    },
  ],
  "30d": [
    {
      name: "Overall Consumption",
      percentage: 100,
      segments: [
        { label: "HVAC", value: 42, color: "oklch(0.55 0.25 270)" },
        { label: "Lighting", value: 23, color: "oklch(0.72 0.2 55)" },
        { label: "Appliances", value: 18, color: "oklch(0.65 0.18 145)" },
        { label: "Other", value: 17, color: "oklch(0.75 0.15 190)" },
      ],
    },
    {
      name: "Easiest to Reduce",
      percentage: 80,
      segments: [
        { label: "Lighting", value: 45, color: "oklch(0.55 0.25 270)" },
        { label: "Standby", value: 35, color: "oklch(0.72 0.2 55)" },
        { label: "Other", value: 20, color: "oklch(0.75 0.15 190)" },
      ],
    },
    {
      name: "Peak Hour Charge",
      percentage: 65,
      segments: [
        { label: "HVAC", value: 60, color: "oklch(0.55 0.25 270)" },
        { label: "EV Charging", value: 25, color: "oklch(0.72 0.2 55)" },
        { label: "Other", value: 15, color: "oklch(0.65 0.18 145)" },
      ],
    },
    {
      name: "Cooled Energy",
      percentage: 48,
      segments: [
        { label: "AC Units", value: 70, color: "oklch(0.55 0.25 270)" },
        { label: "Ventilation", value: 30, color: "oklch(0.72 0.2 55)" },
      ],
    },
  ],
  "90d": [
    {
      name: "Overall Consumption",
      percentage: 100,
      segments: [
        { label: "HVAC", value: 45, color: "oklch(0.55 0.25 270)" },
        { label: "Lighting", value: 20, color: "oklch(0.72 0.2 55)" },
        { label: "Appliances", value: 22, color: "oklch(0.65 0.18 145)" },
        { label: "Other", value: 13, color: "oklch(0.75 0.15 190)" },
      ],
    },
    {
      name: "Easiest to Reduce",
      percentage: 88,
      segments: [
        { label: "Lighting", value: 40, color: "oklch(0.55 0.25 270)" },
        { label: "Standby", value: 38, color: "oklch(0.72 0.2 55)" },
        { label: "Other", value: 22, color: "oklch(0.75 0.15 190)" },
      ],
    },
    {
      name: "Peak Hour Charge",
      percentage: 74,
      segments: [
        { label: "HVAC", value: 62, color: "oklch(0.55 0.25 270)" },
        { label: "EV Charging", value: 22, color: "oklch(0.72 0.2 55)" },
        { label: "Other", value: 16, color: "oklch(0.65 0.18 145)" },
      ],
    },
    {
      name: "Cooled Energy",
      percentage: 58,
      segments: [
        { label: "AC Units", value: 72, color: "oklch(0.55 0.25 270)" },
        { label: "Ventilation", value: 28, color: "oklch(0.72 0.2 55)" },
      ],
    },
  ],
};

export const recommendationsByRange: Record<TimeRange, Recommendation[]> = {
  "7d": [
    {
      id: "r1",
      text: "Shift high-load appliances to off-peak hours (10PM–6AM)",
      savings: 18,
      enabled: true,
    },
    {
      id: "r2",
      text: "Reduce lighting runtime in unoccupied rooms",
      savings: 12,
      enabled: true,
    },
    {
      id: "r3",
      text: "Enable smart standby on entertainment systems",
      savings: 8,
      enabled: false,
    },
    {
      id: "r4",
      text: "Adjust thermostat 2°F during overnight hours",
      savings: 10,
      enabled: true,
    },
  ],
  "30d": [
    {
      id: "r1",
      text: "Shift heavy appliance use to off-peak hours (10PM–6AM)",
      savings: 42,
      enabled: true,
    },
    {
      id: "r2",
      text: "Improve HVAC scheduling to reduce overnight runtime",
      savings: 38,
      enabled: true,
    },
    {
      id: "r3",
      text: "Replace halogen lighting with LED equivalents",
      savings: 27,
      enabled: false,
    },
    {
      id: "r4",
      text: "Enable smart standby mode on entertainment systems",
      savings: 19,
      enabled: true,
    },
  ],
  "90d": [
    {
      id: "r1",
      text: "Install programmable thermostat for seasonal optimization",
      savings: 124,
      enabled: true,
    },
    {
      id: "r2",
      text: "Upgrade HVAC filters to reduce energy draw",
      savings: 98,
      enabled: true,
    },
    {
      id: "r3",
      text: "Replace halogen lighting with LED equivalents throughout",
      savings: 76,
      enabled: false,
    },
    {
      id: "r4",
      text: "Enable smart power strips to eliminate phantom loads",
      savings: 55,
      enabled: true,
    },
  ],
};

export const energyDrivers = energyDriversByRange["30d"];
export const recommendations = recommendationsByRange["30d"];

export const timeRangeConfigs: Record<TimeRange, TimeRangeConfig> = {
  "7d": {
    efficiencyRate: "20.1 MW",
    efficiencyMetric: "10.0%",
    avgReturn: "9.37%",
    totalEnergy: "142 kWh",
    savingsMonthly: 86,
    savingsTrend: 4.2,
    efficiencyLabel: "Excellent",
  },
  "30d": {
    efficiencyRate: "88.4 MW",
    efficiencyMetric: "13.5%",
    avgReturn: "36.0%",
    totalEnergy: "612 kWh",
    savingsMonthly: 247,
    savingsTrend: 7.8,
    efficiencyLabel: "Very Good",
  },
  "90d": {
    efficiencyRate: "264.2 MW",
    efficiencyMetric: "18.2%",
    avgReturn: "41.3%",
    totalEnergy: "1,840 kWh",
    savingsMonthly: 534,
    savingsTrend: 11.4,
    efficiencyLabel: "Outstanding",
  },
};
