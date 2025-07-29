import { Card, CardContent } from "@/components/ui/card";

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

  const platforms = [
    "Web Applications",
    "Responsive Websites", 
    "Mobile Apps (iPhone, Android, iPad)",
    "Desktop Software",
    "Responsive Emails",
    "Omnichannel Services",
    "Internet of Things",
    "Cloud Applications",
    "Databases",
    "APIs",
    "AI Interfaces"
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
          {/* Industries, Clients, and Platforms */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Industries
                </h3>
                <ul className="space-y-2" role="list">
                  {industries.map((industry) => (
                    <li 
                      key={industry}
                      className="flex items-start text-sm text-foreground"
                    >
                      <span 
                        className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {industry}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Major Clients
                </h3>
                <ul className="space-y-2" role="list">
                  {majorClients.map((client) => (
                    <li 
                      key={client}
                      className="flex items-start text-sm text-foreground"
                    >
                      <span 
                        className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {client}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Platforms
                </h3>
                <ul className="space-y-2" role="list">
                  {platforms.map((platform) => (
                    <li 
                      key={platform}
                      className="flex items-start text-sm text-foreground"
                    >
                      <span 
                        className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" 
                        aria-hidden="true"
                      />
                      {platform}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;