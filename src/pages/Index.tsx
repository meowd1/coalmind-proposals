import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, FileCheck, LineChart, Shield, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/90">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="container relative mx-auto px-4 py-24">
          <div className="mx-auto max-w-4xl text-center text-primary-foreground">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 backdrop-blur-sm">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Evaluation Platform</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              R&D Proposal Evaluation System
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Automated, intelligent, and transparent evaluation of research proposals for the Ministry of Coal
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/auth">
                  <Users className="h-5 w-5" />
                  Get Started
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose Our Platform?</h2>
          <p className="text-lg text-muted-foreground">
            Transforming R&D proposal evaluation with cutting-edge AI technology
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/50 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3">
                <Brain className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">AI-Powered Scoring</h3>
              <p className="text-muted-foreground">
                Automated evaluation of technical feasibility, financial viability, and innovation novelty
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-success/10 p-3">
                <FileCheck className="h-6 w-6 text-success" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Standardized Process</h3>
              <p className="text-muted-foreground">
                Consistent evaluation criteria eliminating bias and ensuring fairness
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-warning/10 p-3">
                <Zap className="h-6 w-6 text-warning" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Rapid Processing</h3>
              <p className="text-muted-foreground">
                Reduce evaluation time from weeks to days with intelligent automation
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-info/10 p-3">
                <LineChart className="h-6 w-6 text-info" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Comprehensive analytics and trends to inform strategic decisions
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Secure & Transparent</h3>
              <p className="text-muted-foreground">
                Role-based access with complete audit trails and decision tracking
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Multi-Role Support</h3>
              <p className="text-muted-foreground">
                Tailored interfaces for applicants, evaluators, and government officials
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Ready to Transform Your R&D Evaluation Process?
          </h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Join researchers, evaluators, and government officials in revolutionizing proposal assessment
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/auth">
              Start Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-semibold">Ministry of Coal</p>
              <p className="text-sm text-muted-foreground">NaCCER / CMPDI R&D Platform</p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <a href="https://coal.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Ministry Website
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
