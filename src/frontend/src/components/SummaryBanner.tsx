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
      <p className="text-[oklch(0.38_0.1_310)] text-xs uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="font-display font-bold text-2xl text-[oklch(0.18_0.08_310)]">
        {value}
        <span className="text-sm font-normal text-[oklch(0.42_0.1_310)] ml-1">
          {unit}
        </span>
      </p>
    </div>
  );
}

export function SummaryBanner({ range, onRangeChange }: SummaryBannerProps) {
  const cfg = timeRangeConfigs[range];

  return (
    <div
      data-ocid="summary-banner"
      className="rounded-xl p-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.75 0.16 310) 0%, oklch(0.82 0.12 310) 60%, oklch(0.87 0.09 310) 100%)",
      }}
    >
      {/* decorative circle */}
      <div
        className="absolute -right-8 -top-8 w-48 h-48 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.96 0.04 310), transparent)",
        }}
      />
      <div
        className="absolute right-32 bottom-0 w-64 h-32 opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.96 0.04 310), transparent)",
        }}
      />

      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display font-bold text-xl mb-1 text-[oklch(0.18_0.08_310)]">
            AI Insights Summary
          </h2>
          <p className="text-[oklch(0.35_0.1_310)] text-sm">
            Real-time energy efficiency analysis across your facility.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg overflow-hidden border border-[oklch(0.65_0.15_310)/40] bg-[oklch(0.92_0.07_310)/50]">
            {RANGES.map((r) => (
              <button
                type="button"
                key={r}
                data-ocid={`range-${r}`}
                onClick={() => onRangeChange(r)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium transition-smooth",
                  range === r
                    ? "bg-[oklch(0.68_0.16_310)] text-white"
                    : "text-[oklch(0.35_0.12_310)] hover:text-[oklch(0.22_0.1_310)] hover:bg-[oklch(0.88_0.09_310)]",
                )}
              >
                {RANGE_LABELS[r]}
              </button>
            ))}
          </div>
          <span
            className={cn(
              "px-3 py-1.5 rounded-lg border text-xs font-semibold",
              cfg.efficiencyLabel === "Excellent"
                ? "bg-emerald-100 border-emerald-200 text-emerald-700"
                : cfg.efficiencyLabel === "Very Good"
                  ? "bg-sky-100 border-sky-200 text-sky-700"
                  : "bg-violet-100 border-violet-200 text-violet-700",
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
          <p className="text-[oklch(0.38_0.1_310)] text-xs uppercase tracking-wide mb-1">
            Est. Monthly Savings
          </p>
          <div className="flex items-end gap-2">
            <span className="font-display font-bold text-2xl text-[oklch(0.18_0.08_310)]">
              ${cfg.savingsMonthly}
            </span>
            <span className="flex items-center gap-0.5 text-emerald-700 text-xs font-medium mb-0.5">
              <TrendingUp size={12} />+{cfg.savingsTrend}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
