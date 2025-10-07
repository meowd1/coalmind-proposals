import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Search, Filter, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const EvaluatorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDomain, setFilterDomain] = useState("all");

  const proposals = [
    {
      id: 1,
      title: "AI-Based Coal Quality Assessment System",
      applicant: "Dr. Rajesh Kumar",
      domain: "AI/ML",
      requestedFunding: "₹15,00,000",
      aiScore: 85,
      technical: 88,
      financial: 82,
      novelty: 85,
      submittedDate: "2025-09-15",
      status: "pending_review",
      priority: "high",
    },
    {
      id: 2,
      title: "Sustainable Mining Waste Management",
      applicant: "Dr. Priya Sharma",
      domain: "Environmental",
      requestedFunding: "₹22,50,000",
      aiScore: 78,
      technical: 80,
      financial: 75,
      novelty: 79,
      submittedDate: "2025-09-18",
      status: "pending_review",
      priority: "medium",
    },
    {
      id: 3,
      title: "Automated Mine Safety Monitoring IoT Platform",
      applicant: "Prof. Amit Patel",
      domain: "IoT/Safety",
      requestedFunding: "₹18,75,000",
      aiScore: 92,
      technical: 95,
      financial: 90,
      novelty: 91,
      submittedDate: "2025-09-12",
      status: "in_review",
      priority: "high",
    },
    {
      id: 4,
      title: "Coal Dust Suppression Using Nanotechnology",
      applicant: "Dr. Meera Singh",
      domain: "Nanotechnology",
      requestedFunding: "₹12,00,000",
      aiScore: 81,
      technical: 83,
      financial: 78,
      novelty: 82,
      submittedDate: "2025-09-20",
      status: "pending_review",
      priority: "medium",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "outline"; label: string }> = {
      pending_review: { variant: "outline", label: "Pending Review" },
      in_review: { variant: "secondary", label: "In Review" },
      reviewed: { variant: "default", label: "Reviewed" },
    };
    
    const config = variants[status] || variants.pending_review;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    if (priority === "high") return <Badge variant="destructive">High Priority</Badge>;
    if (priority === "medium") return <Badge variant="secondary">Medium</Badge>;
    return <Badge variant="outline">Low</Badge>;
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  return (
    <DashboardLayout role="evaluator">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Proposal Evaluation</h1>
          <p className="text-muted-foreground">Review and evaluate submitted R&D proposals with AI assistance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Proposals</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Assigned to you</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Awaiting evaluation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg AI Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">84</div>
              <p className="text-xs text-success">Above threshold</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Priority</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search proposals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={filterDomain} onValueChange={setFilterDomain}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  <SelectItem value="ai-ml">AI/ML</SelectItem>
                  <SelectItem value="iot">IoT/Safety</SelectItem>
                  <SelectItem value="environmental">Environmental</SelectItem>
                  <SelectItem value="nanotech">Nanotechnology</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Proposals List */}
        <div className="space-y-4">
          {proposals.map((proposal) => (
            <Card key={proposal.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{proposal.title}</CardTitle>
                      {getPriorityBadge(proposal.priority)}
                    </div>
                    <CardDescription>
                      By {proposal.applicant} • {proposal.domain} • Submitted {new Date(proposal.submittedDate).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  {getStatusBadge(proposal.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* AI Evaluation Summary */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-secondary/10 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">AI Overall Score</span>
                      <span className={`text-2xl font-bold ${getScoreColor(proposal.aiScore)}`}>
                        {proposal.aiScore}/100
                      </span>
                    </div>
                    <Progress value={proposal.aiScore} className="h-2" />
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="mb-2 text-sm font-medium">Funding Requested</div>
                    <div className="text-2xl font-bold text-primary">{proposal.requestedFunding}</div>
                  </div>
                </div>

                {/* Detailed AI Scores */}
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="mb-3 text-sm font-medium">AI Evaluation Breakdown</div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Technical Feasibility</span>
                        <span className={`font-semibold ${getScoreColor(proposal.technical)}`}>{proposal.technical}%</span>
                      </div>
                      <Progress value={proposal.technical} className="h-1.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Financial Viability</span>
                        <span className={`font-semibold ${getScoreColor(proposal.financial)}`}>{proposal.financial}%</span>
                      </div>
                      <Progress value={proposal.financial} className="h-1.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Novelty Score</span>
                        <span className={`font-semibold ${getScoreColor(proposal.novelty)}`}>{proposal.novelty}%</span>
                      </div>
                      <Progress value={proposal.novelty} className="h-1.5" />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Review Proposal</Button>
                  <Button variant="outline">View Full Details</Button>
                  <Button variant="outline">AI Insights</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EvaluatorDashboard;
