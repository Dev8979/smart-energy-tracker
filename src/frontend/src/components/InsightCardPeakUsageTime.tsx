import { peakUsageData } from "@/data/mockData";
import type { TimeRange } from "@/types";
import { ChevronDown, TrendingDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PURPLE = "oklch(0.68 0.2 270)";
const AMBER = "oklch(0.72 0.2 55)";
const GRID_COLOR = "oklch(0.91 0.005 260)";
const TICK_COLOR = "oklch(0.52 0.01 260)";

const PEAK_HOUR = "12 PM";

const rangeStats: Record<TimeRange, { maxLoad: string; offPeak: string }> = {
  "7d": { maxLoad: "230 kW", offPeak: "40 kW" },
  "30d": { maxLoad: "365 kW", offPeak: "60 kW" },
  "90d": { maxLoad: "1,095 kW", offPeak: "180 kW" },
};

export function InsightCardPeakUsageTime({ range }: { range: TimeRange }) {
  const data = peakUsageData[range];
  const stats = rangeStats[range];

  return (
    <div
      className="rounded-xl border border-border bg-card p-5 shadow-card"
      data-ocid="chart-peak-usage"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-foreground">
            Peak Usage Time
          </h3>
          <p className="text-muted-foreground text-xs mt-0.5">
            Hourly load distribution
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-sm inline-block"
              style={{ background: PURPLE }}
            />
            Peak
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-sm inline-block"
              style={{ background: AMBER }}
            />
            Avg
          </span>
          <button
            type="button"
            data-ocid="peak-options"
            className="flex items-center gap-1 px-2 py-1 rounded-lg border border-border hover:bg-muted transition-smooth"
          >
            View <ChevronDown size={12} />
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
          <XAxis dataKey="hour" tick={{ fontSize: 10, fill: TICK_COLOR }} />
          <YAxis tick={{ fontSize: 11, fill: TICK_COLOR }} />
          <Tooltip
            contentStyle={{
              background: "oklch(1.0 0 0)",
              border: `1px solid ${GRID_COLOR}`,
              borderRadius: "8px",
              fontSize: 12,
            }}
          />
          <Bar dataKey="peak" radius={[3, 3, 0, 0]} maxBarSize={28}>
            {data.map((entry) => (
              <Cell
                key={entry.hour}
                fill={
                  entry.hour === PEAK_HOUR ? "oklch(0.78 0.14 270)" : PURPLE
                }
              />
            ))}
          </Bar>
          <Bar
            dataKey="average"
            fill={AMBER}
            radius={[3, 3, 0, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-3 flex flex-wrap gap-4 text-sm border-t border-border pt-3">
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground text-xs">Peak Hour:</span>
          <span className="font-medium text-foreground text-xs">12 PM</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground text-xs">Max Load:</span>
          <span className="font-medium text-foreground text-xs">
            {stats.maxLoad}
          </span>
          <TrendingDown size={12} className="text-rose-500" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground text-xs">Off-Peak:</span>
          <span className="font-medium text-foreground text-xs">
            {stats.offPeak}
          </span>
        </div>
      </div>
    </div>
  );
}
