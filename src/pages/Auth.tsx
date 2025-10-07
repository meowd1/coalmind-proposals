import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Building2, FileText, Users } from "lucide-react";

type UserRole = "applicant" | "evaluator" | "government";

const Auth = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>("applicant");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, this would connect to backend
    localStorage.setItem("userRole", role);
    toast.success("Login successful!");
    
    // Navigate based on role
    switch (role) {
      case "applicant":
        navigate("/dashboard/applicant");
        break;
      case "evaluator":
        navigate("/dashboard/evaluator");
        break;
      case "government":
        navigate("/dashboard/government");
        break;
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userRole", role);
    toast.success("Registration successful!");
    
    switch (role) {
      case "applicant":
        navigate("/dashboard/applicant");
        break;
      case "evaluator":
        navigate("/dashboard/evaluator");
        break;
      case "government":
        navigate("/dashboard/government");
        break;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">R&D Evaluation System</CardTitle>
          <CardDescription>
            Access your dashboard based on your role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-role">Select Your Role</Label>
                  <Select value={role} onValueChange={(value: UserRole) => setRole(value)}>
                    <SelectTrigger id="login-role">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="applicant">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          <span>Applicant / Researcher</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="evaluator">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Evaluator</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="government">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span>Government Official</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" placeholder="your.email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" placeholder="••••••••" required />
                </div>

                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-role">Select Your Role</Label>
                  <Select value={role} onValueChange={(value: UserRole) => setRole(value)}>
                    <SelectTrigger id="register-role">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="applicant">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          <span>Applicant / Researcher</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="evaluator">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Evaluator</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="government">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span>Government Official</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-name">Full Name</Label>
                  <Input id="register-name" type="text" placeholder="John Doe" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" type="email" placeholder="your.email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" type="password" placeholder="••••••••" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-organization">Organization</Label>
                  <Input id="register-organization" type="text" placeholder="University / Institute" required />
                </div>

                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
