import { Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-12 bg-muted/30" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ready to solve complex design problems efficiently? Let's discuss your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow border-border/50 text-left">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:shannon@efficientinteraction.com"
                  className="text-primary hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 underline"
                >
                  shannon@efficientinteraction.com
                </a>
              </CardContent>
            </Card>

            <Card className="shadow border-border/50 text-left">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Brunswick, Maine
                  <br />
                  <span className="text-sm">Remote work available</span>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow border-border/50 text-left">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                <p className="text-muted-foreground">
                  Available for projects
                  <br />
                  <span className="text-sm">Willing to travel for research</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow border-border/50 text-left">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Whether you need user research, interaction design, or product strategy, 
                I'm here to help you create effective experiences designed efficiently.
              </p>
              <a
                href="mailto:shannon@efficientinteraction.com?subject=Project Inquiry"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-soft underline"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;