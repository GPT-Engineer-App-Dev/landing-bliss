import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaS Startup</h1>
        <p className="text-xl text-muted-foreground">Your tagline goes here</p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <img src="/placeholder.svg" alt="Hero" className="mx-auto mt-8 w-1/2" />
      </section>

      <Separator />

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <p className="text-center text-muted-foreground">Discover what makes our product unique</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <img src="/placeholder.svg" alt={`Feature ${index + 1}`} className="w-12 h-12 mx-auto" />
                <CardTitle className="mt-4">Feature {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Short description of feature {index + 1}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <p className="text-center text-muted-foreground">What our users are saying</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center space-x-4">
                <Avatar src="/placeholder.svg" alt={`User ${index + 1}`} />
                <div>
                  <CardTitle>User {index + 1}</CardTitle>
                  <Badge>Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>"This is a testimonial from user {index + 1}."</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <p className="text-center text-muted-foreground">Choose the plan that suits you best</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Basic", "Pro", "Enterprise"].map((tier, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-center">{tier}</CardTitle>
                <p className="text-center text-2xl font-bold">${(index + 1) * 10}/mo</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground">LinkedIn</a>
        </div>
        <p className="text-muted-foreground">Contact us at contact@saasstartup.com</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground">Terms of Service</a>
          <a href="#" className="text-muted-foreground">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;