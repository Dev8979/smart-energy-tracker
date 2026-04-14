import { timeRangeConfigs } from "@/data/mockData";
import { cn } from "@/lib/utils";
import type { TimeRange } from "@/types";
import { TrendingUp } from "lucide-react";

interface SummaryBannerProps {
  range: TimeRange;
  onRangeChange: (r: TimeRange) => void;
}

const RANGES: TimeRange[] = ["7d", "30d", "90d"];
const RANGE_LABELS: Record<TimeRange, string> = {
  "7d": "7 Days",
  "30d": "30 Days",
  "90d": "90 Days",
};

function MetricCell({
  label,
  value,
  unit,
}: { label: string; value: string; unit: string }) {
  return (
    <div>
      <p className="text-white/60 text-xs uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="font-display font-bold text-2xl">
        {value}
        <span className="text-sm font-normal text-white/60 ml-1">{unit}</span>
      </p>
    </div>
  );
}

export function SummaryBanner({ range, onRangeChange }: SummaryBannerProps) {
  const cfg = timeRangeConfigs[range];

  return (
    <div
      data-ocid="summary-banner"
      className="rounded-xl p-6 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.28 0.22 270) 0%, oklch(0.38 0.18 270) 60%, oklch(0.45 0.2 290) 100%)",
      }}
    >
      {/* decorative circle */}
      <div
        className="absolute -right-8 -top-8 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.9 0.05 270), transparent)",
        }}
      />
      <div
        className="absolute right-32 bottom-0 w-64 h-32 opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.9 0.05 290), transparent)",
        }}
      />

      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display font-bold text-xl mb-1">
            AI Insights Summary
          </h2>
          <p className="text-white/70 text-sm">
            Real-time energy efficiency analysis across your facility.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg overflow-hidden border border-white/20 bg-white/10">
            {RANGES.map((r) => (
              <button
                type="button"
                key={r}
                data-ocid={`range-${r}`}
                onClick={() => onRangeChange(r)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium transition-smooth",
                  range === r
                    ? "bg-white/25 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10",
                )}
              >
                {RANGE_LABELS[r]}
              </button>
            ))}
          </div>
          <span
            className={cn(
              "px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold",
              cfg.efficiencyLabel === "Excellent"
                ? "bg-emerald-500/20 text-emerald-200"
                : cfg.efficiencyLabel === "Very Good"
                  ? "bg-sky-500/20 text-sky-200"
                  : "bg-violet-400/20 text-violet-200",
            )}
          >
            {cfg.efficiencyLabel}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <MetricCell
          label="Efficiency Rate"
          value={cfg.efficiencyRate}
          unit="/kWh"
        />
        <MetricCell
          label="Efficiency Metric"
          value={cfg.efficiencyMetric}
          unit="/kWh"
        />
        <MetricCell label="Avg Return" value={cfg.avgReturn} unit="/kW·h" />
        <div>
          <p className="text-white/60 text-xs uppercase tracking-wide mb-1">
            Est. Monthly Savings
          </p>
          <div className="flex items-end gap-2">
            <span className="font-display font-bold text-2xl">
              ${cfg.savingsMonthly}
            </span>
            <span className="flex items-center gap-0.5 text-emerald-300 text-xs font-medium mb-0.5">
              <TrendingUp size={12} />+{cfg.savingsTrend}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
