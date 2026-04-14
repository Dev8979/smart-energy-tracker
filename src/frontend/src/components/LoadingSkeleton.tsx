import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  variant?: "card" | "chart" | "banner" | "row";
  className?: string;
}

export function LoadingSkeleton({
  variant = "card",
  className,
}: LoadingSkeletonProps) {
  if (variant === "banner") {
    return (
      <div
        className={cn("rounded-xl p-6 bg-muted/60 animate-pulse", className)}
      >
        <Skeleton className="h-6 w-48 mb-2" />
        <Skeleton className="h-4 w-72 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["metric-0", "metric-1", "metric-2", "metric-3"].map((k) => (
            <div key={k}>
              <Skeleton className="h-3 w-24 mb-2" />
              <Skeleton className="h-8 w-32" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "chart") {
    return (
      <div
        className={cn(
          "rounded-xl border border-border bg-card p-5 shadow-card",
          className,
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-8 w-28 rounded-lg" />
        </div>
        <Skeleton className="h-[240px] w-full rounded-lg" />
      </div>
    );
  }

  if (variant === "row") {
    return (
      <div className={cn("flex items-center gap-3 py-2", className)}>
        <div className="flex-1">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-2.5 w-full rounded-full" />
        </div>
        <Skeleton className="h-4 w-8" />
      </div>
    );
  }

  // default: card
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-card",
        className,
      )}
    >
      <Skeleton className="h-5 w-40 mb-4" />
      <div className="space-y-3">
        {["row-a", "row-b", "row-c"].map((k) => (
          <div key={k}>
            <Skeleton className="h-3 w-full mb-1.5" />
            <Skeleton className="h-2.5 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
