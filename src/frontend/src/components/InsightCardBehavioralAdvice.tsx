import { Switch } from "@/components/ui/switch";
import { recommendationsByRange } from "@/data/mockData";
import { cn } from "@/lib/utils";
import type { Recommendation, TimeRange } from "@/types";
import { Lightbulb } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function InsightCardBehavioralAdvice({ range }: { range: TimeRange }) {
  const [recs, setRecs] = useState<Recommendation[]>(
    recommendationsByRange[range],
  );

  // Reset recs when range changes
  useEffect(() => {
    setRecs(recommendationsByRange[range]);
  }, [range]);

  const toggle = useCallback((id: string) => {
    setRecs((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)),
    );
  }, []);

  const projectedSavings = recs
    .filter((r) => r.enabled)
    .reduce((sum, r) => sum + r.savings, 0);

  return (
    <div
      className="rounded-xl border border-border bg-card p-5 shadow-card"
      data-ocid="card-recommendations"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display font-semibold text-foreground">
            Behavioral Recommendations
          </h3>
          <p className="text-muted-foreground text-xs mt-0.5">
            Toggle actions to calculate projected savings
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          <Lightbulb size={12} />${projectedSavings}/mo saved
        </div>
      </div>

      <div className="space-y-4" data-ocid="recommendations-list">
        {recs.map((rec) => (
          <div
            key={rec.id}
            className="flex items-start gap-3 group"
            data-ocid={`rec-${rec.id}`}
          >
            <Switch
              checked={rec.enabled}
              onCheckedChange={() => toggle(rec.id)}
              className="mt-0.5 flex-shrink-0"
              data-ocid={`rec-toggle-${rec.id}`}
            />
            <div className="flex-1 min-w-0">
              <p
                className={cn(
                  "text-sm leading-snug transition-colors",
                  rec.enabled ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {rec.text}
              </p>
              <p
                className={cn(
                  "text-xs mt-0.5 transition-colors",
                  rec.enabled
                    ? "text-emerald-600 font-medium"
                    : "text-muted-foreground",
                )}
              >
                ~${rec.savings}/mo potential
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {recs.filter((r) => r.enabled).length} of {recs.length} actions
          enabled
        </span>
        <button
          type="button"
          data-ocid="apply-all-recommendations"
          className="text-xs font-medium text-primary hover:underline transition-colors"
          onClick={() =>
            setRecs((prev) => prev.map((r) => ({ ...r, enabled: true })))
          }
        >
          Enable all
        </button>
      </div>
    </div>
  );
}
