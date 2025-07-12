import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Services = () => {
  const serviceCategories = [
    {
      title: "Research & Analysis",
      description: "Understanding users and their needs through comprehensive research methods",
      services: [
        "Usability Testing",
        "User & Stakeholder Interviews", 
        "Card Sorting & Tree Testing",
        "Field Studies",
        "Personas",
        "Content Analysis",
        "Accessibility",
        "Analytics Analysis"
      ]
    },
    {
      title: "Design",
      description: "Creating intuitive and effective user experiences",
      services: [
        "User Experience Strategy",
        "Conceptual Design",
        "Detailed Interaction Design",
        "Service Design",
        "Information Architecture",
        "Visual Design",
        "Design Systems",
        "Plain Language, Content Simplification, and UX Writing",
        "Figma, Axure, and Lovable Prototyping",
        "Storyboarding and Journey Mapping"
      ]
    },
    {
      title: "Leadership",
      description: "Guiding teams and projects to successful outcomes",
      services: [
        "Product Management",
        "Product Visioning", 
        "Organization Vision Statements",
        "Roadmapping",
        "Contract Staff Management",
        "Agile Team Leadership and Scrum Mastering",
        "Project Management",
        "Mentoring"
      ]
    }
  ];

  return (
    <section className="py-12 bg-muted/30" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            return (
              <Card 
                key={category.title}
                className="shadow transition-shadow duration-300 border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-left pb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2" role="list">
                    {category.services.map((service) => (
                      <li 
                        key={service}
                        className="flex items-start text-sm text-foreground"
                      >
                        <span 
                          className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" 
                          aria-hidden="true"
                        />
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;