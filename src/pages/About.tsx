import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Mail, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">About the Platform</h1>
          
          <div className="mb-8 space-y-4 text-lg text-muted-foreground">
            <p>
              The AI/ML-Based Automated Evaluation System is a cutting-edge platform developed for the 
              National Centre for Coal and Energy Research (NaCCER) under CMPDI and the Ministry of Coal, 
              Government of India.
            </p>
            <p>
              This system revolutionizes the R&D proposal evaluation process by leveraging artificial 
              intelligence and machine learning to provide fast, unbiased, and comprehensive assessments 
              of research proposals in the coal and energy sector.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Key Objectives</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Automate manual evaluation tasks and reduce processing time</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Eliminate bias through AI-driven standardized assessments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Provide actionable feedback to applicants for proposal improvement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Enable data-driven decision making for funding allocation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Maintain transparency and knowledge management for all projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Organizations</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ministry of Coal</h3>
                    <p className="text-sm text-muted-foreground">
                      Government of India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">CMPDI</h3>
                    <p className="text-sm text-muted-foreground">
                      Central Mine Planning & Design Institute Limited
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">NaCCER</h3>
                    <p className="text-sm text-muted-foreground">
                      National Centre for Coal and Energy Research
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>naccer@coalindia.in</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+91-XXX-XXXXXXX</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <a 
                    href="https://coal.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    coal.gov.in
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
