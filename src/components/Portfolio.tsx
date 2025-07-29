import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Project images
import dolApprenticeshipImg from "@/assets/projects/dol-main.png";
import onrrHomeImg from "@/assets/projects/onrr-home-correct.jpg";
import nrrdPortalImg from "@/assets/projects/nrrd-portal-correct.jpg";
import maineBallotImg from "@/assets/projects/maine-ballot-correct.jpg";
import taxDataVizImg from "@/assets/projects/tax-data-viz-correct.png";
import mobile1040ezImg from "@/assets/projects/1040ez-mobile-main.png";
import ipadMainImg from "@/assets/projects/ipad-main.png";
import blockLiveImg from "@/assets/projects/block-live.png";
import llbeanResponsiveImg from "@/assets/projects/llbean-responsive.png";
import llbeanCustomizationImg from "@/assets/projects/llbean-customization.png";
import llbeanAccountImg from "@/assets/projects/llbean-account.png";
import llbEmailImg from "@/assets/projects/llb-email-main.png";
import llbDesktopImg from "@/assets/projects/llb-desktop.png";
import llbPortraitImg from "@/assets/projects/llb-portrait.png";
import llbLandscapeImg from "@/assets/projects/llb-landscape.png";
import llbResponsiveFlowImg from "@/assets/projects/llb-responsive-flow.jpeg";
import atiNursingImg from "@/assets/projects/ati-main.png";
import planitImpactImg from "@/assets/projects/planit-main.png";
import pomcoEmergencyImg from "@/assets/projects/pomco-main.png";
import zumbaInstructorImg from "@/assets/projects/zumba-main.png";
import hallmarkImg from "@/assets/projects/hallmark-main.png";
import cityYearImg from "@/assets/projects/city-year-main.png";
import cruisesOnlyImg from "@/assets/projects/cruises-only-main.png";
import taxcutSupportImg from "@/assets/projects/taxcut-support-main.png";
import taxcutWelcomeImg from "@/assets/projects/taxcut-welcome-main.png";
import taxcutReportsImg from "@/assets/projects/taxcut-reports-main.png";
import dproImg from "@/assets/projects/dpro-main.png";
import hrbPhoneImg from "@/assets/projects/hrb-phone-main.png";

const Portfolio = () => {
  // Real portfolio projects from efficientinteraction.com
  const projects = [
    // Government & Civic Work
    {
      id: "dol-apprenticeship-data",
      title: "Department of Labor Apprenticeship Data",
      client: "U.S. Department of Labor",
      category: "Government",
      description: "Redesign of the Department of Labor's Office of Apprenticeship data to allow users to explore the data.",
      services: ["Data Visualization", "User Research", "Information Architecture", "Interface Design"],
      year: "2023",
      status: "Completed",
      image: dolApprenticeshipImg
    },
    {
      id: "onrr-redesign",
      title: "ONRR.gov Redesign",
      client: "U.S. Department of the Interior",
      category: "Government", 
      description: "Redesign the U.S. Department of the Interior's Office of Natural Resources Revenue primary website to be focused on user needs and get it out of Dreamweaver.",
      services: ["UX Strategy", "Information Architecture", "User Research", "Content Strategy"],
      year: "2022",
      status: "Completed",
      image: onrrHomeImg
    },
    {
      id: "nrrd-portal",
      title: "Natural Resources Revenue Data Portal Product Framing",
      client: "U.S. Department of the Interior",
      category: "Government",
      description: "Reframing the U.S. Department of the Interior's Office of Natural Resources Revenue data portal to be focused on user needs.",
      services: ["Product Strategy", "User Research", "Data Visualization", "UX Strategy"],
      year: "2021",
      status: "Completed",
      image: nrrdPortalImg
    },
    {
      id: "maine-ballot",
      title: "The Maine Ballot",
      client: "Open Maine (Civic Volunteer Work)",
      category: "Government",
      description: "In 2016, I created a ballot website to help Mainers understand the referendum questions on statewide ballots. It had over 3,000 unique visitors leading up to the November 2018 election. During the 2018-2019 government shutdown, a colleague and I moved the site from Squarespace to GitHub to make it open source.",
      services: ["Information Architecture", "Content Strategy", "Open Source Development", "Civic Engagement"],
      year: "2016-2019",
      status: "Completed",
      image: maineBallotImg
    },
    
    // H&R Block Projects
    {
      id: "tax-data-visualization",
      title: "Tax Data Visualization",
      client: "H&R Block",
      category: "Finance",
      description: "New screens to visually explain tax situations to H&R Block office clients. Strategic project featured in UXPA's magazine article 'Visualizing Tax Returns: Showing the Impact in Design'.",
      services: ["Data Visualization", "User Research", "Information Design", "Stakeholder Collaboration"],
      year: "2015",
      status: "Completed",
      image: taxDataVizImg
    },
    {
      id: "ipad-tax-prep",
      title: "iPad Tax Prep",
      client: "H&R Block",
      category: "Finance",
      description: "Design an iPad tax preparation app as part of the H&R Block At Home suite of tax preparation products.",
      services: ["Mobile Design", "Interaction Design", "Prototyping", "User Testing"],
      year: "2014",
      status: "Completed",
      image: ipadMainImg
    },
    {
      id: "1040ez-mobile",
      title: "1040-EZ Mobile",
      client: "H&R Block",
      category: "Finance",
      description: "Design a mobile tax preparation app as part of the H&R Block At Home suite of tax preparation products.",
      services: ["Mobile Design", "User Experience", "Tax Regulation Compliance", "Usability Testing"],
      year: "2013",
      status: "Completed",
      image: mobile1040ezImg
    },
    {
      id: "block-mobile",
      title: "Block Mobile",
      client: "H&R Block", 
      category: "Finance",
      description: "Redesign of H&R Block's mobile retail office customer management app to allow for logging into an account, uploading documents, and viewing tax returns.",
      services: ["Mobile Design", "User Experience", "Customer Management", "Document Processing"],
      year: "2014",
      status: "Completed",
      image: hrbPhoneImg
    },
    {
      id: "block-mobile-ipad",
      title: "Block Mobile iPad App",
      client: "H&R Block",
      category: "Finance", 
      description: "Optimize the redesigned mobile app for iPad.",
      services: ["iPad Design", "Mobile Optimization", "User Interface", "Touch Interaction"],
      year: "2014",
      status: "Completed",
      image: ipadMainImg
    },
    {
      id: "block-live",
      title: "Block Live",
      client: "H&R Block",
      category: "Finance",
      description: "New product to enable tax prep from home with a live tax professional.",
      services: ["Product Design", "Service Design", "User Research", "Interaction Design"],
      year: "2012",
      status: "Completed",
      image: blockLiveImg
    },
    {
      id: "taxcut-support",
      title: "TaxCut Support Site",
      client: "H&R Block",
      category: "Finance",
      description: "Project to reduce call volume to the support center.",
      services: ["Support Design", "Information Architecture", "Self-Service UX", "Call Reduction"],
      year: "2011",
      status: "Completed", 
      image: taxcutSupportImg
    },
    {
      id: "taxcut-welcome",
      title: "TaxCut Welcome Sequence",
      client: "H&R Block",
      category: "Finance",
      description: "Project to reduce confusion around creating multiple tax returns.",
      services: ["Onboarding Design", "User Flow", "Workflow Optimization", "User Guidance"],
      year: "2011",
      status: "Completed",
      image: taxcutWelcomeImg
    },
    {
      id: "taxcut-support-reports", 
      title: "TaxCut Support Reports",
      client: "H&R Block",
      category: "Finance",
      description: "Redesign of support reports to make it easier to track issues, find new user requirements, and evaluate implemented designs.",
      services: ["Dashboard Design", "Data Visualization", "Report Design", "Analytics UX"],
      year: "2010",
      status: "Completed",
      image: taxcutReportsImg
    },
    {
      id: "deductionpro-donations",
      title: "DeductionPro Donations", 
      client: "H&R Block",
      category: "Finance",
      description: "Project to clear up user issues with data entry workflow in H&R Block's deduction tracking software.",
      services: ["Workflow Design", "Data Entry UX", "Error Reduction", "Process Improvement"],
      year: "2010",
      status: "Completed",
      image: dproImg
    },

    // L.L.Bean Projects
    {
      id: "llbean-responsive",
      title: "L.L.Bean Responsive Site",
      client: "L.L.Bean",
      category: "Retail",
      description: "Modification of existing llbean.com site to make it responsive down to 600 px and optimized for tablet users. Involved redesigning the website's header, footer, and entire product taxonomy.",
      services: ["Responsive Design", "Information Architecture", "User Research", "Prototyping"],
      year: "2016",
      status: "Completed",
      image: llbeanResponsiveImg
    },
    {
      id: "llbean-customization",
      title: "L.L.Bean Customization Tool",
      client: "L.L.Bean",
      category: "Retail",
      description: "Responsive redesign of customizable product page to allow use on tablets and better integrate the feature with the rest of the site.",
      services: ["Responsive Design", "Product Configuration", "User Testing", "Interface Design"],
      year: "2015",
      status: "Completed",
      image: llbeanCustomizationImg
    },
    {
      id: "llbean-responsive-email",
      title: "L.L.Bean Responsive Email",
      client: "L.L.Bean",
      category: "Retail",
      description: "Redesign of L.L.Bean's transactional emails to make them responsive.",
      services: ["Email Design", "Responsive Design", "Template Development", "Cross-platform Testing"],
      year: "2015",
      status: "Completed",
      image: llbEmailImg
    },
    {
      id: "llbean-account",
      title: "L.L.Bean Account Redesign",
      client: "L.L.Bean", 
      category: "Retail",
      description: "Redesign of My Account section to make it easier to use and usable across devices.",
      services: ["User Experience", "Responsive Design", "User Research", "Interaction Design"],
      year: "2014",
      status: "Completed",
      image: llbeanAccountImg
    },

    // Consulting Work
    {
      id: "ati-nursing",
      title: "ATI Nursing Education",
      client: "Assessment Technologies Institute (ATI)",
      category: "Education",
      description: "Responsive redesign of student portal to allow students to complete tutorials, practice exams, and reviews to prepare for their NCLEX certification exam.",
      services: ["Responsive Design", "Educational UX", "User Testing", "Information Architecture"],
      year: "2017",
      status: "Completed",
      image: atiNursingImg
    },
    {
      id: "planit-impact",
      title: "PlanIt Impact Architecture Reporting Tool", 
      client: "PlanIt Impact",
      category: "Sustainability",
      description: "Design for a new product to allow architects and city planners to evaluate the environmental impact of their designs.",
      services: ["Product Design", "Data Visualization", "Environmental UX", "User Research"],
      year: "2018",
      status: "Completed",
      image: planitImpactImg
    },
    {
      id: "pomco-emergency",
      title: "POMCO Emergency Alert System",
      client: "POMCO",
      category: "Safety",
      description: "Redesign of a mobile app with bluetooth connected device used by students to alert campus security when they are in an emergency situation. Also redesigned dispatcher dashboard and the flow between the two users.",
      services: ["Mobile Design", "Dashboard Design", "Emergency UX", "Multi-user Workflows"],
      year: "2017",
      status: "Completed",
      image: pomcoEmergencyImg
    },
    {
      id: "hallmark-baby",
      title: "Hallmark Baby Responsive E-Commerce Site",
      client: "Hallmark",
      category: "E-Commerce",
      description: "New responsive site built using Demandware. Translated Demandware specifications to Hallmark Baby's domain.",
      services: ["E-Commerce Design", "Responsive Development", "Platform Migration", "Domain Translation"],
      year: "2016",
      status: "Completed",
      image: hallmarkImg
    },
    {
      id: "zumba-instructor",
      title: "Zumba Instructor Network Portal",
      client: "Zumba Fitness",
      category: "Fitness",
      description: "Redesign of the Zumba Instructor Network portal.",
      services: ["Portal Design", "User Experience", "Community Features", "Information Architecture"],
      year: "2016", 
      status: "Completed",
      image: zumbaInstructorImg
    },
    {
      id: "city-year-redesign",
      title: "City Year Redesign",
      client: "City Year",
      category: "Nonprofit",
      description: "Redesign of the City Year website.",
      services: ["Website Redesign", "Nonprofit UX", "Information Architecture", "Visual Design"],
      year: "2015",
      status: "Completed",
      image: cityYearImg
    },
    {
      id: "cruises-only",
      title: "Cruises Only",
      client: "Cruises Only",
      category: "Travel",
      description: "Project to restructure the navigation and create page templates.",
      services: ["Navigation Design", "Template Development", "Information Architecture", "Travel UX"],
      year: "2014",
      status: "Completed",
      image: cruisesOnlyImg
    }
  ];

  
  const getProjectImage = (project: any) => {
    return project.image || null;
  };

  const getProjectAltText = (project: any) => {
    const altTextMap: { [key: string]: string } = {
      "dol-apprenticeship-data": "Screenshot of Department of Labor apprenticeship data visualization dashboard showing interactive charts and filters for exploring apprenticeship statistics",
      "onrr-redesign": "Homepage mockup of redesigned ONRR.gov website featuring clean layout, improved navigation, and user-focused content organization",
      "nrrd-portal": "Interface design for Natural Resources Revenue Data Portal showing data visualization tools and search functionality for government revenue data",
      "maine-ballot": "Maine ballot information website interface displaying referendum questions with clear explanations and voting guidance for citizens",
      "tax-data-visualization": "H&R Block tax data visualization screens showing interactive charts and graphs that explain tax situations to office clients",
      "ipad-tax-prep": "iPad tax preparation app interface showing touch-optimized forms and navigation designed for H&R Block At Home suite",
      "1040ez-mobile": "Mobile tax preparation app design for H&R Block showing simplified form entry and tax calculation features on smartphone",
      "block-mobile": "H&R Block mobile customer management app interface for retail office clients with account login and document upload features",
      "block-mobile-ipad": "iPad-optimized version of H&R Block mobile app featuring enhanced layout and touch interactions for tablet users",
      "block-live": "Block Live product interface design enabling remote tax preparation with live professional assistance and interactive features",
      "taxcut-support": "TaxCut support website redesign showing self-service help resources and troubleshooting tools to reduce call center volume",
      "taxcut-welcome": "TaxCut welcome sequence interface displaying streamlined onboarding flow to reduce confusion about creating multiple tax returns",
      "taxcut-support-reports": "TaxCut support dashboard showing data visualization and reporting tools for tracking issues and evaluating design implementations",
      "deductionpro-donations": "DeductionPro donations workflow interface showing improved data entry screens and error reduction features for H&R Block software",
      "llbean-responsive": "L.L.Bean responsive website design showing redesigned header, footer, and product taxonomy optimized for tablet users down to 600px",
      "llbean-customization": "L.L.Bean product customization tool interface displaying responsive design for configuring personalized products on tablets",
      "llbean-responsive-email": "L.L.Bean responsive email template design showing how transactional emails adapt across different devices and email clients",
      "llbean-account": "L.L.Bean My Account section redesign featuring improved navigation and responsive layout for cross-device account management",
      "ati-nursing": "ATI Nursing Education student portal showing responsive interface for tutorials, practice exams, and NCLEX certification preparation",
      "planit-impact": "PlanIt Impact environmental reporting tool interface showing data visualizations for architects to evaluate design environmental impact",
      "pomco-emergency": "POMCO emergency alert system mobile app interface showing bluetooth device integration and emergency notification features for campus safety",
      "hallmark-baby": "Hallmark Baby responsive e-commerce website built on Demandware platform showing product catalog and shopping features",
      "zumba-instructor": "Zumba Instructor Network portal redesign displaying community features and resources for fitness instructors",
      "city-year-redesign": "City Year nonprofit website redesign showing improved information architecture and visual design for community service organization",
      "cruises-only": "Cruises Only travel website showing restructured navigation and page templates for cruise booking and information"
    };
    
    return altTextMap[project.id] || `${project.title} project screenshot showing ${project.description}`;
  };

  return (
    <section id="portfolio" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
        </div>

        <div className="space-y-16">
          {/* Government & Civic Work */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Government & civic work
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-4xl">
              My most recent role was as a UX Designer and Product Manager in the Department of Homeland Security's Office of Homeland Security Statistics, where I owned the product strategy and user experience for ohss.dhs.gov. I have done civic volunteer since 2015 and took a full-time position as an Innovation Specialist with the U.S. Department of the Interior's Office of Natural Resources Revenue in 2018. I moved to the Department of Labor as a Customer Experience Strategist in 2022 before moving to the Department of Homeland Security in 2024.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.filter(p => p.category === "Government").map((project, index) => (
                <Card 
                  key={project.id}
                  id={`project-${project.id}`}
                  className="shadow transition-shadow duration-300 border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    {getProjectImage(project) ? (
                       <img 
                         src={getProjectImage(project)} 
                         alt={getProjectAltText(project)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Project Image</span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="px-3 py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle as="h4" className="text-xl mb-2">
                          <Link 
                            to={`/projects/${project.id}`}
                            className="text-primary underline hover:text-primary/80 transition-colors duration-200"
                          >
                            {project.title}
                          </Link>
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-3 py-0 pb-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Consulting Work */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Consulting work
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-4xl">
              I consulted both on my own and for a UX agency for over 10 years. My projects have ranged from one off usability studies and card sorts to a 2 year stint at Cengage Learning designing an educational product from the formative user research and concepting through detailed design and development support. I have worked with companies in all stages of UX maturity and have learned what does and doesn't work with each type of company.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.filter(p => !["Government", "Finance", "Retail"].includes(p.category)).map((project, index) => (
                <Card 
                  key={project.id}
                  id={`project-${project.id}`}
                  className="shadow transition-shadow duration-300 border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    {getProjectImage(project) ? (
                       <img 
                         src={getProjectImage(project)} 
                         alt={getProjectAltText(project)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Project Image</span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="px-3 py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle as="h4" className="text-xl mb-2">
                          <Link 
                            to={`/projects/${project.id}`}
                            className="text-primary underline hover:text-primary/80 transition-colors duration-200"
                          >
                            {project.title}
                          </Link>
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-3 py-0 pb-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* L.L.Bean */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              L.L.Bean
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-4xl">
              I was a long-term contractor with L.L.Bean for 4 years while they were making the transition to agile development and readying their site to become responsive. Much of that 4 years was spent redesigning the website's header, footer, and entire product taxonomy, which went live recently. The project involved selling the changes at all levels of the organization and doing ridiculous amounts of user research to satisfy the organization's quantitative needs because it was such a high profile change that impacts all areas of the organization. I also established a practice of prototyping and early research with users. Before I arrived, they only tested designs with users after they were built. Now, they test designs early and often using Axure prototypes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.filter(p => p.category === "Retail").map((project, index) => (
                <Card 
                  key={project.id}
                  id={`project-${project.id}`}
                  className="shadow transition-shadow duration-300 border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    {getProjectImage(project) ? (
                       <img 
                         src={getProjectImage(project)} 
                         alt={getProjectAltText(project)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Project Image</span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="px-3 py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle as="h4" className="text-xl mb-2">
                          <Link 
                            to={`/projects/${project.id}`}
                            className="text-primary underline hover:text-primary/80 transition-colors duration-200"
                          >
                            {project.title}
                          </Link>
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-3 py-0 pb-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* H&R Block */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              H&R Block
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-4xl">
              I was an integral part of H&R Block's UX team, both as a UX designer and researcher, for 10 years. I learned how to collaborate with tax attorneys and accountants to streamline regulations, resulting in a design that meets stringent requirements, yet is easy for users to understand. UXPA's magazine published an article, <em>Visualizing Tax Returns: Showing the Impact in Design</em>, which discussed a strategic project I lead for Block's office clients. I played a key role in the transition from waterfall to agile development processes and led the effort to figure out how UX should fit into agile projects and established a pattern library.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.filter(p => p.category === "Finance").map((project, index) => (
                <Card 
                  key={project.id}
                  id={`project-${project.id}`}
                  className="shadow transition-shadow duration-300 border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    {getProjectImage(project) ? (
                       <img 
                         src={getProjectImage(project)} 
                         alt={getProjectAltText(project)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Project Image</span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="px-3 py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle as="h4" className="text-xl mb-2">
                          <Link 
                            to={`/projects/${project.id}`}
                            className="text-primary underline hover:text-primary/80 transition-colors duration-200"
                          >
                            {project.title}
                          </Link>
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-3 py-0 pb-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;