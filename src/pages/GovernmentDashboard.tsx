import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, FileText, CheckCircle, XCircle, Clock, DollarSign, Users } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const GovernmentDashboard = () => {
  const stats = {
    totalProposals: 24,
    approved: 8,
    rejected: 3,
    underReview: 13,
    totalFundingRequested: "₹3.2 Cr",
    totalFundingApproved: "₹1.5 Cr",
    avgAIScore: 81,
    highScoreProposals: 12,
  };

  const topProposals = [
    {
      id: 1,
      title: "Automated Mine Safety Monitoring IoT Platform",
      applicant: "Prof. Amit Patel",
      aiScore: 92,
      fundingRequested: "₹18,75,000",
      domain: "IoT/Safety",
      recommendation: "Highly Recommended",
    },
    {
      id: 2,
      title: "Advanced Coal Gasification Technology",
      applicant: "Dr. Suresh Reddy",
      aiScore: 89,
      fundingRequested: "₹25,00,000",
      domain: "Energy",
      recommendation: "Recommended",
    },
    {
      id: 3,
      title: "AI-Based Coal Quality Assessment System",
      applicant: "Dr. Rajesh Kumar",
      aiScore: 85,
      fundingRequested: "₹15,00,000",
      domain: "AI/ML",
      recommendation: "Recommended",
    },
  ];

  const domainDistribution = [
    { domain: "AI/ML", count: 7, percentage: 29 },
    { domain: "IoT/Safety", count: 5, percentage: 21 },
    { domain: "Environmental", count: 4, percentage: 17 },
    { domain: "Energy", count: 4, percentage: 17 },
    { domain: "Nanotechnology", count: 4, percentage: 16 },
  ];

  return (
    <DashboardLayout role="government">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Ministry Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive overview of R&D proposals and funding allocations</p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Proposals</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProposals}</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.approved}</div>
              <p className="text-xs text-muted-foreground">{Math.round((stats.approved / stats.totalProposals) * 100)}% approval rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Under Review</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{stats.underReview}</div>
              <p className="text-xs text-muted-foreground">Pending decision</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg AI Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgAIScore}</div>
              <p className="text-xs text-success">+3% from last quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Funding Overview */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Funding Overview</CardTitle>
              <CardDescription>Total funding requested vs approved</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Requested</p>
                  <p className="text-2xl font-bold">{stats.totalFundingRequested}</p>
                </div>
                <DollarSign className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Approved</p>
                  <p className="text-2xl font-bold text-success">{stats.totalFundingApproved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <div className="pt-2">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>Approval Rate</span>
                  <span className="font-semibold">47%</span>
                </div>
                <Progress value={47} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Domain Distribution</CardTitle>
              <CardDescription>Proposals by research domain</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {domainDistribution.map((item) => (
                <div key={item.domain} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.domain}</span>
                    <span className="text-muted-foreground">{item.count} proposals</span>
                  </div>
                  <Progress value={item.percentage} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Top Rated Proposals */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>AI-Recommended Proposals</CardTitle>
                <CardDescription>Highest-scoring proposals for funding consideration</CardDescription>
              </div>
              <Button variant="outline">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {topProposals.map((proposal, index) => (
              <div key={proposal.id} className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h4 className="font-semibold">{proposal.title}</h4>
                    <Badge variant="secondary">{proposal.domain}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {proposal.applicant} • Funding: {proposal.fundingRequested}
                  </p>
                </div>
                <div className="text-right">
                  <div className="mb-1 text-2xl font-bold text-success">{proposal.aiScore}</div>
                  <p className="text-xs text-muted-foreground">AI Score</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="default">Approve</Button>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Generate Report
            </Button>
            <Button variant="outline" className="gap-2">
              <Users className="h-4 w-4" />
              View Applicants
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              Export Data
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default GovernmentDashboard;
