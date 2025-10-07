import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bell, FileText, Plus, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const ApplicantDashboard = () => {
  const [proposals] = useState([
    {
      id: 1,
      title: "AI-Based Coal Quality Assessment System",
      status: "under_review",
      aiScore: 85,
      technical: 88,
      financial: 82,
      novelty: 85,
      submittedDate: "2025-09-15",
      feedback: "Strong technical approach. Consider expanding market analysis section.",
    },
    {
      id: 2,
      title: "Automated Mine Safety Monitoring IoT Platform",
      status: "approved",
      aiScore: 92,
      technical: 95,
      financial: 90,
      novelty: 91,
      submittedDate: "2025-08-20",
      feedback: "Excellent proposal. All criteria exceeded expectations.",
    },
    {
      id: 3,
      title: "Sustainable Coal Extraction Methods Research",
      status: "revision_required",
      aiScore: 72,
      technical: 75,
      financial: 68,
      novelty: 73,
      submittedDate: "2025-09-28",
      feedback: "Need more detailed cost breakdown and timeline adjustments.",
    },
  ]);

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      under_review: { variant: "secondary", label: "Under Review" },
      approved: { variant: "default", label: "Approved" },
      revision_required: { variant: "outline", label: "Revision Required" },
      rejected: { variant: "destructive", label: "Rejected" },
    };
    
    const config = variants[status] || variants.under_review;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  return (
    <DashboardLayout role="applicant">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Proposals</h1>
            <p className="text-muted-foreground">Track and manage your R&D submissions</p>
          </div>
          <Button asChild className="gap-2">
            <Link to="/submit-proposal">
              <Plus className="h-4 w-4" />
              New Proposal
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Proposals</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Across all statuses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average AI Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">83</div>
              <p className="text-xs text-success">+5 from last submission</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Actions</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-warning">Requires revision</p>
            </CardContent>
          </Card>
        </div>

        {/* Proposals List */}
        <div className="space-y-4">
          {proposals.map((proposal) => (
            <Card key={proposal.id} className="overflow-hidden transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{proposal.title}</CardTitle>
                    <CardDescription>Submitted on {new Date(proposal.submittedDate).toLocaleDateString()}</CardDescription>
                  </div>
                  {getStatusBadge(proposal.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* AI Score Overview */}
                <div className="rounded-lg bg-muted/50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Overall AI Score</span>
                    <span className={`text-2xl font-bold ${getScoreColor(proposal.aiScore)}`}>
                      {proposal.aiScore}/100
                    </span>
                  </div>
                  <Progress value={proposal.aiScore} className="h-2" />
                </div>

                {/* Detailed Scores */}
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Technical</span>
                      <span className="font-semibold">{proposal.technical}%</span>
                    </div>
                    <Progress value={proposal.technical} className="h-1" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Financial</span>
                      <span className="font-semibold">{proposal.financial}%</span>
                    </div>
                    <Progress value={proposal.financial} className="h-1" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Novelty</span>
                      <span className="font-semibold">{proposal.novelty}%</span>
                    </div>
                    <Progress value={proposal.novelty} className="h-1" />
                  </div>
                </div>

                {/* AI Feedback */}
                <div className="rounded-lg border border-border bg-card p-3">
                  <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                    <Bell className="h-4 w-4 text-secondary" />
                    AI-Generated Feedback
                  </div>
                  <p className="text-sm text-muted-foreground">{proposal.feedback}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  {proposal.status === "revision_required" && (
                    <Button size="sm" variant="default">Revise Proposal</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApplicantDashboard;
