import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  AlertTriangle,
  Bell,
  BrainCircuit,
  FileBarChart,
  History,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  activeItem?: string;
}

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { id: "ai-insights", label: "AI Insights", Icon: BrainCircuit },
  { id: "usage-history", label: "Usage History", Icon: History },
  { id: "reports", label: "Reports", Icon: FileBarChart },
  { id: "alerts", label: "Alerts", Icon: AlertTriangle },
  { id: "settings-top", label: "Settings", Icon: Settings },
];

const sidebarBottomItems = [
  { id: "settings", label: "Settings", Icon: Settings },
];

export function Layout({ children, activeItem = "ai-insights" }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { clear } = useInternetIdentity();

  const handleLogout = () => {
    try {
      clear();
    } catch {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.25_0.18_270)] shadow-elevated h-14 flex items-center px-4 gap-3">
        <button
          type="button"
          className="lg:hidden text-white/80 hover:text-white transition-colors p-1"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          onKeyDown={(e) => e.key === "Enter" && setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo + Title */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/30 border border-white/20 flex items-center justify-center">
            <Zap size={16} className="text-white" fill="currentColor" />
          </div>
          <span className="font-display font-semibold text-white text-base tracking-tight">
            AI Insights
          </span>
        </div>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-1">
          {/* Notification Bell */}
          <button
            type="button"
            data-ocid="navbar.bell_button"
            aria-label="Notifications"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Bell size={18} />
          </button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                data-ocid="navbar.profile_button"
                aria-label="Profile menu"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <User size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                data-ocid="navbar.logout_button"
                className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10"
                onClick={handleLogout}
              >
                <LogOut size={14} />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1 pt-14">
        {/* Sidebar Overlay (mobile) */}
        {sidebarOpen && (
          <div
            role="button"
            tabIndex={0}
            className="fixed inset-0 z-30 bg-foreground/20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            onKeyDown={(e) => e.key === "Enter" && setSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed top-14 left-0 bottom-0 z-40 w-56 bg-card border-r border-border flex flex-col transition-transform duration-300",
            "lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
            {sidebarItems.map(({ id, label, Icon }) => {
              const isActive = activeItem === id;
              return (
                <button
                  type="button"
                  key={id}
                  data-ocid={`sidebar-${id}`}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-smooth text-left",
                    isActive
                      ? "bg-primary/10 text-primary font-medium border border-primary/20"
                      : "text-foreground/60 hover:text-foreground hover:bg-muted",
                  )}
                >
                  <Icon
                    size={16}
                    className={cn(
                      isActive ? "text-primary" : "text-foreground/50",
                    )}
                  />
                  {label}
                </button>
              );
            })}
          </nav>

          <div className="py-4 px-2 border-t border-border space-y-0.5">
            {sidebarBottomItems.map(({ id, label, Icon }) => (
              <button
                type="button"
                key={id}
                data-ocid={`sidebar-bottom-${id}`}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body text-foreground/60 hover:text-foreground hover:bg-muted transition-smooth text-left"
              >
                <Icon size={16} className="text-foreground/50" />
                {label}
              </button>
            ))}
          </div>

          {/* Branding */}
          <div className="px-3 py-3 border-t border-border">
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              © {new Date().getFullYear()}.{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Built with caffeine.ai
              </a>
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-56 min-w-0 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
