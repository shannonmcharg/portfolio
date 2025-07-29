
import { ExternalLink } from "lucide-react";

const Publications = () => {
  // All publications from efficientinteraction.com organized by type
  const articles = [
    {
      title: "Revisiting who uses ONRR.gov: refining personas.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "January 2023",
      url: "/blogs/revisiting-personas.pdf"
    },
    {
      title: "Measuring and Justifying the Government Experience.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "August 2022",
      url: "/blogs/measuring-government-experience.pdf"
    },
    {
      title: "Passing the baton: what I've learned in my first 4 years of federal service.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "July 2022",
      url: "/blogs/passing-the-baton.pdf"
    },
    {
      title: "What agile looks like at the Office of Natural Resources Revenue.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "July 2022",
      url: "/blogs/what-agile-looks-like.pdf"
    },
    {
      title: "What is Customer Experience?.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "June 2022",
      url: "/blogs/what-is-customer-experience.pdf"
    },
    {
      title: "I'm just going to call my old friend Cody: why we created a troubleshooting guide.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "April 2022",
      url: "/blogs/troubleshooting-guide.pdf"
    },
    {
      title: "Ensuring accessible content beyond the auto checks: making a diagram screen reader friendly.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "March 2022",
      url: "/blogs/accessible-content-beyond-auto-checks.pdf"
    },
    {
      title: "Document accessibility: getting from 5,000 to 0.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "September 2021",
      url: "/blogs/document-accessibility.pdf"
    },
    {
      title: "So You Want to Get into Civic Tech? (Book Review).",
      publication: "User Experience Magazine",
      date: "June 2021",
      url: "https://uxpamagazine.org/so-you-want-to-get-into-civic-tech-book-review/"
    },
    {
      title: "Getting stakeholder buy-in.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "May 2021",
      url: "/blogs/getting-stakeholder-buy-in.pdf"
    },
    {
      title: "Tree testing using a clickable prototype.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "December 2020",
      url: "/blogs/tree-testing-clickable-prototype.pdf"
    },
    {
      title: "Open source card sorting.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "August 2020",
      url: "/blogs/open-source-card-sorting.pdf"
    },
    {
      title: "Re-evaluating how we work: Bringing the whole team along.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "June 2020",
      url: "/blogs/re-evaluating-how-we-work.pdf"
    },
    {
      title: "Remote work: What about design studios?",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "March 2020",
      url: "/blogs/remote-work-design-studios.pdf"
    },
    {
      title: "On being tool agnostic: Picking a design toolkit based on goals, constraints, and access.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "February 2020",
      url: "/blogs/on-being-tool-agnostic.pdf"
    },
    {
      title: "How to effectively champion a government product.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "November 2019",
      url: "/blogs/how-to-champion-government-product.pdf"
    },
    {
      title: "Making open data useful.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "June 2019",
      url: "/blogs/making-open-data-useful.pdf"
    },
    {
      title: "Journey maps as communication tools.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "May 2019",
      url: "/blogs/journey-maps-communication-tools.pdf"
    },
    {
      title: "How we rebuilt our open-data homepage part one: design.",
      publication: "Open data design at the U.S. Department of the Interior",
      date: "December 2018",
      url: "/blogs/homepage-blog.pdf"
    },
    {
      title: "Fostering Trust to Build Community.",
      publication: "UX Matters",
      date: "April 2018",
      url: "https://www.uxmatters.com/mt/archives/2018/04/fostering-trust-to-build-community.php"
    },
    {
      title: "Remote Friendly User Experience: How to Keep and Hire Top Talent.",
      publication: "User Experience Magazine. 17(1)",
      date: "February 2017",
      url: "http://uxpamagazine.org/remote-friendly-user-experience/"
    },
    {
      title: "Engaging Citizens: A Review of Eight Approaches to Civic Engagement.",
      publication: "User Experience Magazine. 15(5)",
      date: "November 2015",
      url: "http://uxpamagazine.org/engaging-citizens/"
    },
    {
      title: "Visualizing Tax Returns: Showing the Impact in Design.",
      publication: "User Experience Magazine. 15(3)",
      date: "July 2015",
      url: "http://uxpamagazine.org/visualizing-tax-returns/"
    }
  ];

  const presentations = [
    {
      title: "Reconsidering the consent form: the least user-friendly aspect of UX research.",
      publication: "Government UX Summit",
      date: "June 2023"
    },
    {
      title: "From 5,000 to 0: prioritizing documents for remediation.",
      publication: "Interagency Accessibility Forum",
      date: "October 2021",
      url: "/blogs/document-accessibility.pdf"
    },
    {
      title: "Open Source Information Architecture Design: Using the Tools You Have to Conduct Card Sorting and Tree Testing.",
      publication: "Government UX Summit",
      date: "June 2021",
      url: "https://digital.gov/2022/01/06/open-source-information-architecture-design-using-the-tools-you-have-to-conduct-card-sorting-and-tree-testing/"
    },
    {
      title: "Card Sorting with GitHub (poster).",
      publication: "Information Architecture Conference",
      date: "April 2021"
    },
    {
      title: "Bringing UX in-house: Cultivating digital skills through peer training.",
      publication: "Boston UXPA",
      date: "October 2020"
    },
    {
      title: "Slowing down agile to government speed: Bringing the whole team along.",
      publication: "Code for America Summit",
      date: "April 2020"
    },
    {
      title: "Civic Tech Chat: Maine Ballot (podcast).",
      publication: "Civic Tech Chat",
      date: "July 2019"
    },
    {
      title: "Lessons from Building Remote-First. Cross-Functional Teams (panelist).",
      publication: "Government UX Summit",
      date: "May 2019"
    },
    {
      title: "Teaching Digital Skills: Learning Usability Testing by Peer Training.",
      publication: "Government UX Summit",
      date: "May 2019",
      url: "/blogs/teaching-digital-skills.pdf"
    },
    {
      title: "Lightning Debates on Controversial UX Topics.",
      publication: "Boston UXPA conference",
      date: "May 2015"
    },
    {
      title: "Dueling Prototyping Tools: Axure vs. Microsoft Expression Blend.",
      publication: "Tech Maine meeting",
      date: "April 2010"
    },
    {
      title: "Design Negotiation.",
      publication: "Boston UXPA conference",
      date: "May 2009"
    },
    {
      title: "The Pros and Cons of Presenting Multiple Options of a Design.",
      publication: "New Hampshire UXPA meeting",
      date: "March 2008"
    },
    {
      title: "Cooper's Approach to Personas.",
      publication: "Tech Maine meeting",
      date: "February 2008"
    },
    {
      title: "Using Support Data to Drive Design.",
      publication: "Boston UXPA chapter meeting",
      date: "October 2005"
    }
  ];

  return (
    <section id="publications" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Publications
          </h2>
        </div>

        <div className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Articles Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Articles
              </h3>
              <div className="space-y-4">
                {articles.map((article, index) => (
                  <div 
                    key={index}
                    className="border-b border-border/30 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="space-y-2">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light transition-colors underline"
                      >
                        <h4 className="text-lg font-medium leading-tight">
                          {article.title}
                        </h4>
                      </a>
                      <p className="text-muted-foreground">
                        {article.publication}. {article.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Presentations Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Presentations
              </h3>
              <div className="space-y-4">
                {presentations.map((presentation, index) => (
                  <div 
                    key={index}
                    className="border-b border-border/30 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="space-y-2">
                      {presentation.url ? (
                        <a
                          href={presentation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-light transition-colors underline"
                        >
                          <h4 className="text-lg font-medium leading-tight">
                            {presentation.title}
                          </h4>
                        </a>
                      ) : (
                        <h4 className="text-lg font-medium leading-tight text-foreground">
                          {presentation.title}
                        </h4>
                      )}
                      <p className="text-muted-foreground">
                        {presentation.publication}. {presentation.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
