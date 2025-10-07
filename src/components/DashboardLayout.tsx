import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Home, LogOut, Bell, Settings, FileText, BarChart3, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

type DashboardLayoutProps = {
  children: ReactNode;
  role: "applicant" | "evaluator" | "government";
};

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const getRoleLabel = () => {
    switch (role) {
      case "applicant":
        return "Applicant Dashboard";
      case "evaluator":
        return "Evaluator Dashboard";
      case "government":
        return "Government Dashboard";
    }
  };

  const getNavItems = () => {
    switch (role) {
      case "applicant":
        return [
          { icon: FileText, label: "My Proposals", href: "/dashboard/applicant" },
          { icon: Bell, label: "Notifications", href: "/notifications" },
          { icon: Settings, label: "Settings", href: "/settings" },
        ];
      case "evaluator":
        return [
          { icon: FileText, label: "Proposals", href: "/dashboard/evaluator" },
          { icon: BarChart3, label: "Analytics", href: "/analytics" },
          { icon: Settings, label: "Settings", href: "/settings" },
        ];
      case "government":
        return [
          { icon: BarChart3, label: "Overview", href: "/dashboard/government" },
          { icon: Users, label: "Applicants", href: "/applicants" },
          { icon: Settings, label: "Settings", href: "/settings" },
        ];
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <div className="rounded-lg bg-primary p-2">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="hidden md:inline">R&D Evaluation</span>
            </Link>
            <div className="hidden md:block text-sm text-muted-foreground">
              {getRoleLabel()}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Side Navigation & Content */}
      <div className="container mx-auto flex gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 md:block">
          <nav className="sticky top-20 space-y-2">
            {getNavItems().map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-2"
                asChild
              >
                <Link to={item.href}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
