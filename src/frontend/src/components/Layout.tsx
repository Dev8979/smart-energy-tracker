import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Bell,
  BrainCircuit,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Menu,
  Plug,
  Search,
  Settings,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  activeItem?: string;
}

const mainMenuItems = [
  { id: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { id: "daily-entries", label: "Daily Entries", Icon: ClipboardList },
  { id: "my-appliances", label: "My Appliances", Icon: Plug },
  { id: "usage-trends", label: "Usage Trends", Icon: TrendingUp },
  { id: "ai-insights", label: "AI Insights", Icon: BrainCircuit },
  { id: "settings", label: "Settings", Icon: Settings },
];

const accountItems = [{ id: "logout", label: "Log Out", Icon: LogOut }];

export function Layout({ children, activeItem = "dashboard" }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    window.alert("You have been logged out.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.93_0.07_310)] border-b border-[oklch(0.86_0.1_310)] shadow-xs h-14 flex items-center px-4 gap-3">
        <button
          type="button"
          className="lg:hidden text-[oklch(0.32_0.12_310)] hover:text-[oklch(0.22_0.14_310)] transition-colors p-1"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          onKeyDown={(e) => e.key === "Enter" && setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Navbar Title */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[oklch(0.78_0.15_310)] border border-[oklch(0.68_0.18_310)] flex items-center justify-center">
            <Zap
              size={16}
              className="text-[oklch(0.22_0.1_310)]"
              fill="currentColor"
            />
          </div>
          <span className="font-display font-semibold text-[oklch(0.22_0.1_310)] text-base tracking-tight">
            AI Insights
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center ml-4 flex-1 max-w-xs">
          <div className="relative w-full">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.52_0.08_310)] pointer-events-none"
            />
            <input
              type="text"
              data-ocid="navbar.search_input"
              placeholder="Search..."
              className="w-full h-8 pl-8 pr-4 text-sm rounded-full bg-[oklch(0.88_0.06_310)] border border-[oklch(0.82_0.09_310)] text-[oklch(0.22_0.1_310)] placeholder:text-[oklch(0.58_0.07_310)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.18_310)]/40 transition-colors"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-2">
          {/* Bell with badge */}
          <button
            type="button"
            data-ocid="navbar.bell_button"
            aria-label="Notifications"
            className="relative w-9 h-9 flex items-center justify-center rounded-lg text-[oklch(0.42_0.14_310)] hover:text-[oklch(0.22_0.12_310)] hover:bg-[oklch(0.86_0.1_310)] transition-colors"
          >
            <Bell size={18} />
            <span
              className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[oklch(0.6_0.22_25)] ring-1 ring-[oklch(0.93_0.07_310)]"
              aria-hidden="true"
            />
          </button>

          {/* Profile dropdown with avatar + name */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                data-ocid="navbar.profile_button"
                aria-label="Profile menu"
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[oklch(0.86_0.1_310)] transition-colors"
              >
                {/* Avatar circle with initials */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-[11px] tracking-wide"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.65 0.22 315), oklch(0.45 0.24 320))",
                  }}
                  aria-hidden="true"
                >
                  VS
                </div>
                {/* Name label */}
                <span className="hidden sm:block text-sm font-medium text-[oklch(0.28_0.12_310)] leading-none">
                  Vyakhya
                </span>
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
          {/* Sidebar Logo Area */}
          <div className="flex items-center gap-2.5 px-4 py-4 border-b border-border">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <Zap
                size={16}
                className="text-primary-foreground"
                fill="currentColor"
              />
            </div>
            <span className="font-display font-semibold text-foreground text-sm tracking-tight">
              SmartEnergy
            </span>
          </div>

          {/* Main Menu */}
          <nav className="flex-1 py-4 px-3 overflow-y-auto space-y-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-2">
                Main Menu
              </p>
              <div className="space-y-0.5">
                {mainMenuItems.map(({ id, label, Icon }) => {
                  const isActive = activeItem === id;
                  return (
                    <button
                      type="button"
                      key={id}
                      data-ocid={`sidebar.${id}`}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-smooth text-left",
                        isActive
                          ? "bg-primary text-primary-foreground font-medium shadow-sm"
                          : "text-foreground/60 hover:text-foreground hover:bg-muted",
                      )}
                    >
                      <Icon
                        size={16}
                        className={cn(
                          isActive
                            ? "text-primary-foreground"
                            : "text-foreground/50",
                        )}
                      />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Account Section */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-2">
                Account
              </p>
              <div className="space-y-0.5">
                {accountItems.map(({ id, label, Icon }) => (
                  <button
                    type="button"
                    key={id}
                    data-ocid={`sidebar.${id}`}
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-smooth text-left text-destructive/70 hover:text-destructive hover:bg-destructive/10"
                  >
                    <Icon size={16} className="text-destructive/60" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* User Profile Card */}
          <div className="px-3 py-3 border-t border-border">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/60 transition-colors cursor-default">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-semibold text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.18 310), oklch(0.55 0.22 330))",
                }}
                aria-hidden="true"
              >
                VS
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground leading-tight">
                  Vyakhya Sharma
                </p>
                <p className="text-xs text-muted-foreground truncate leading-tight mt-0.5">
                  vyakhya2@gmail.com
                </p>
              </div>
            </div>
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
