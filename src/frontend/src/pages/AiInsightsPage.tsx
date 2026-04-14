import { InsightCardBehavioralAdvice } from "@/components/InsightCardBehavioralAdvice";
import { InsightCardPeakUsageTime } from "@/components/InsightCardPeakUsageTime";
import { InsightCardTopEnergyDrivers } from "@/components/InsightCardTopEnergyDrivers";
import { InsightCardUsageTrend } from "@/components/InsightCardUsageTrend";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { SummaryBanner } from "@/components/SummaryBanner";
import type { TimeRange } from "@/types";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export function AiInsightsPage() {
  const [range, setRange] = useState<TimeRange>("30d");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="p-6 max-w-[1280px] mx-auto">
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground tracking-tight">
            AI Insights
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            AI-powered analysis of your energy consumption patterns.
          </p>
        </div>
        <button
          type="button"
          data-ocid="header-export"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-muted transition-smooth shadow-card"
        >
          <Download size={14} />
          Export
        </button>
      </div>

      {/* Summary Banner */}
      {loading ? (
        <LoadingSkeleton variant="banner" className="mb-6" />
      ) : (
        <div className="mb-6">
          <SummaryBanner range={range} onRangeChange={setRange} />
        </div>
      )}

      {/* Charts row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {loading ? (
          <>
            <LoadingSkeleton variant="chart" />
            <LoadingSkeleton variant="chart" />
          </>
        ) : (
          <>
            <InsightCardUsageTrend range={range} />
            <InsightCardPeakUsageTime range={range} />
          </>
        )}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {loading ? (
          <>
            <LoadingSkeleton variant="card" />
            <LoadingSkeleton variant="card" />
          </>
        ) : (
          <>
            <InsightCardTopEnergyDrivers range={range} />
            <InsightCardBehavioralAdvice range={range} />
          </>
        )}
      </div>
    </div>
  );
}
