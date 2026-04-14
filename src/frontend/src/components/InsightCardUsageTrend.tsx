import { usageTrendData } from "@/data/mockData";
import type { TimeRange } from "@/types";
import { ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PURPLE = "oklch(0.55 0.25 270)";
const AMBER = "oklch(0.72 0.2 55)";
const GRID_COLOR = "oklch(0.91 0.005 260)";
const TICK_COLOR = "oklch(0.52 0.01 260)";

function StatChip({
  label,
  value,
  trend,
}: { label: string; value: string; trend?: "up" | "down" }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-muted-foreground text-xs">{label}:</span>
      <span className="font-medium text-foreground text-xs">{value}</span>
      {trend === "up" && <TrendingUp size={12} className="text-emerald-500" />}
      {trend === "down" && <TrendingDown size={12} className="text-rose-500" />}
    </div>
  );
}

const rangeStats: Record<
  TimeRange,
  {
    avgDaily: string;
    peakDay: string;
    vsPrior: string;
    vsPriorTrend: "up" | "down";
  }
> = {
  "7d": {
    avgDaily: "48 kWh",
    peakDay: "60 kWh",
    vsPrior: "+5.2%",
    vsPriorTrend: "up",
  },
  "30d": {
    avgDaily: "112 kWh",
    peakDay: "180 kWh",
    vsPrior: "+8.4%",
    vsPriorTrend: "up",
  },
  "90d": {
    avgDaily: "384 kWh",
    peakDay: "540 kWh",
    vsPrior: "+12.1%",
    vsPriorTrend: "up",
  },
};

export function InsightCardUsageTrend({ range }: { range: TimeRange }) {
  const data = usageTrendData[range];
  const stats = rangeStats[range];

  return (
    <div
      className="rounded-xl border border-border bg-card p-5 shadow-card"
      data-ocid="chart-usage-trend"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-foreground">
            Usage Trend
          </h3>
          <p className="text-muted-foreground text-xs mt-0.5">
            Current vs previous period
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span
              className="w-4 h-0.5 rounded-full inline-block"
              style={{ background: PURPLE }}
            />
            Current
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-4 h-0.5 rounded-full inline-block"
              style={{ background: AMBER }}
            />
            Previous
          </span>
          <button
            type="button"
            data-ocid="trend-options"
            className="flex items-center gap-1 px-2 py-1 rounded-lg border border-border hover:bg-muted transition-smooth"
          >
            Options <ChevronDown size={12} />
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={data}
          margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
          <XAxis dataKey="date" tick={{ fontSize: 11, fill: TICK_COLOR }} />
          <YAxis tick={{ fontSize: 11, fill: TICK_COLOR }} />
          <Tooltip
            contentStyle={{
              background: "oklch(1.0 0 0)",
              border: `1px solid ${GRID_COLOR}`,
              borderRadius: "8px",
              fontSize: 12,
            }}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke={PURPLE}
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke={AMBER}
            strokeWidth={2}
            dot={false}
            strokeDasharray="4 2"
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-3 flex flex-wrap gap-4 text-sm border-t border-border pt-3">
        <StatChip label="Avg Daily" value={stats.avgDaily} trend="up" />
        <StatChip label="Peak Day" value={stats.peakDay} />
        <StatChip
          label="vs Prior"
          value={stats.vsPrior}
          trend={stats.vsPriorTrend}
        />
      </div>
    </div>
  );
}
