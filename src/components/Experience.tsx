import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github } from "lucide-react";
import shannonProfile from "@/assets/shannon-profile.jpg";

const Experience = () => {
  const industries = [
    "Government", "Tax Preparation & Finance", "Education & eLearning", "Healthcare",
    "Retail & E-Commerce", "Insurance", "Business to Business Services", "Shipping & Logistics",
    "Nonprofits", "Open Data", "Sports & Fitness", "Travel", "Online Auctions", "Job Search"
  ];

  const majorClients = [
    "U.S. Department of Homeland Security", "U.S. Department of Labor", "U.S. Department of the Interior",
    "H&R Block", "L.L.Bean", "Cengage Learning", "Massachusetts Institute of Technology (MIT)",
    "Quick Base", "Zumba Fitness"
  ];

  return (
    <section className="py-12" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow border-border/50 mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0">
                  <img
                    src={shannonProfile}
                    alt="Shannon McHarg, Principal UX Designer"
                    className="w-32 h-32 rounded-full object-cover object-center"
                  />
                </div>

                {/* Bio Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Shannon McHarg, Principal
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground mb-6">
                    <p>
                      I thrive on solving complex design problems from strategic vision to the tactical details. 
                      I have over 20 years of experience and a master's degree in Human Factors in Information 
                      Design from Bentley University. I'm always looking for ways my design skills can have an 
                      impact on the world and am most interested projects in the sustainability or civic spaces.
                    </p>
                    
                    <p>
                      I'm located in Brunswick, Maine and do most of my work remotely, but I'm willing to travel 
                      for meetings and to conduct user research.
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:shannon@efficientinteraction.com"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 underline"
                      aria-label="Email Shannon McHarg"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      Email
                    </a>
                    <a
                      href="http://linkedin.com/in/smcharg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 underline"
                      aria-label="Shannon McHarg's LinkedIn profile (opens in new window)"
                    >
                      <Linkedin className="w-4 h-4" aria-hidden="true" />
                      LinkedIn
                    </a>
                    <a
                      href="http://github.com/shannonmcharg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 underline"
                      aria-label="Shannon McHarg's GitHub profile (opens in new window)"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industries and Clients */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow border-border/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Industries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <Badge 
                      key={industry} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow border-border/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Major Clients
                </h4>
                <div className="flex flex-wrap gap-2">
                  {majorClients.map((client) => (
                    <Badge 
                      key={client} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {client}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;