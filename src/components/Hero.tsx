import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import shannonProfile from "@/assets/shannon-profile.jpg";

const Hero = () => {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden" id="hero">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-5"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Hero Content */}
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-slide-up">
              Effective experiences,{" "}
              <span className="text-foreground">executed efficiently</span>
            </h1>
            
            <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-slide-up [animation-delay:200ms] space-y-4">
              <p>
                I am an experience strategist and product manager specializing in complex domains. I thrive on solving complex design problems from strategic vision to the tactical details. I'm always looking for ways my design skills can have an impact on the world and am most interested in projects in the sustainability or civic spaces.
              </p>
              
              <p>
                My clients hire me when they have a complex problem that needs to be solved and they want someone who will solve it well and who will work efficiently.
              </p>
            </div>
          </div>

          {/* Right Column - Shannon Card */}
          <div className="animate-slide-up [animation-delay:400ms]">
            <Card className="shadow border-border/50">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Bio Content */}
                  <div className="text-left flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Shannon McHarg, Principal
                    </h2>
                    
                    <div className="space-y-4 text-muted-foreground mb-6 text-sm">
                      <p>
                        I have over 20 years of experience and a master's degree in Human Factors in Information Design from Bentley University.
                      </p>
                      
                      <p>
                        I'm located in Brunswick, Maine and do most of my work remotely, but I'm willing to travel for meetings and to conduct user research.
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

                   {/* Profile Image */}
                   <div className="flex justify-center sm:justify-end">
                     <img
                       src={shannonProfile}
                       alt="Shannon McHarg, Principal UX Designer"
                       className="w-32 h-32 rounded-full object-cover object-center flex-shrink-0"
                     />
                   </div>
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;