import { Badge } from "@/components/ui/badge";
import { energyDriversByRange } from "@/data/mockData";
import type { TimeRange } from "@/types";

export function InsightCardTopEnergyDrivers({ range }: { range: TimeRange }) {
  const drivers = energyDriversByRange[range];
  const allSegments = drivers[0].segments;

  return (
    <div
      className="rounded-xl border border-border bg-card p-5 shadow-card"
      data-ocid="card-energy-drivers"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display font-semibold text-foreground">
            Top Energy Drivers
          </h3>
          <p className="text-muted-foreground text-xs mt-0.5">
            Breakdown by consumption category
          </p>
        </div>
        <Badge variant="secondary" className="text-xs">
          Live
        </Badge>
      </div>

      <div className="space-y-4">
        {drivers.map((driver) => {
          const totalValue = driver.segments.reduce(
            (s, seg) => s + seg.value,
            0,
          );
          return (
            <div
              key={driver.name}
              data-ocid={`driver-${driver.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="text-foreground/80 font-medium">
                  {driver.name}
                </span>
                <span className="text-muted-foreground text-xs font-medium">
                  {driver.percentage}%
                </span>
              </div>
              {/* stacked progress bar */}
              <div className="h-2.5 rounded-full overflow-hidden flex bg-muted">
                {driver.segments.map((seg) => (
                  <div
                    key={seg.label}
                    className="h-full transition-smooth"
                    style={{
                      width: `${(seg.value / totalValue) * driver.percentage}%`,
                      background: seg.color,
                    }}
                    title={`${seg.label}: ${seg.value}%`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* legend */}
      <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-x-4 gap-y-2">
        {allSegments.map((seg) => (
          <span
            key={seg.label}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: seg.color }}
            />
            {seg.label}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        HVAC dominates consumption — consider smart scheduling to reduce
        peak-hour load.
      </p>
    </div>
  );
}
