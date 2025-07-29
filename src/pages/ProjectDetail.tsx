import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DOLR1Before from "@/assets/projects/dol-r1-before.jpeg";
import DOLr1After from "@/assets/projects/dol-r1-after.jpeg";
import DOLr2 from "@/assets/projects/dol-r2.jpeg";
import DOLFinal from "@/assets/projects/dol-final.jpeg";

// Additional project images
import NRRDPortalImg from "@/assets/projects/nrrd-portal-main.jpg";
import ONRRHomeImg from "@/assets/projects/onrr-home-main.jpg";
import MaineBallotImg from "@/assets/projects/maine-ballot-main.jpg";
import TaxDataVizImg from "@/assets/projects/tax-data-viz-main.png";
import iPadTaxImg from "@/assets/projects/ipad-tax-main.png";
import Mobile1040EZImg from "@/assets/projects/1040ez-mobile-main.png";
import BlockLiveImg from "@/assets/projects/block-live-main.png";
import LLBeanResponsiveImg from "@/assets/projects/llbean-responsive-main.png";
import LLBeanCustomizationImg from "@/assets/projects/llbean-customization-main.png";
import LLBeanAccountImg from "@/assets/projects/llbean-account-main.png";
import ATINursingImg from "@/assets/projects/ati-nursing-main.png";

// L.L.Bean Customization project images
import LLBCustomizationDesktopImg from "@/assets/projects/llb-customization-desktop.png";
import LLBCustomizationPortraitImg from "@/assets/projects/llb-customization-portrait.png";
import LLBCustomizationFlowImg from "@/assets/projects/llb-customization-flow.jpeg";

console.log('LLBCustomizationDesktopImg imported:', LLBCustomizationDesktopImg);

// ATI project images
import ATICardsImg from "@/assets/projects/ati-cards.jpg";
import ATILoopImg from "@/assets/projects/ati-loop.jpg";
import ATIGraphsImg from "@/assets/projects/ati-graphs.jpg";
import PlanItImpactImg from "@/assets/projects/planit-impact-main.png";

// PlanIt Impact project images
import PlanItHomepageImg from "@/assets/projects/planit-homepage.jpg";
import PlanItComparisonImg from "@/assets/projects/planit-comparison.jpg";
import POMCOEmergencyImg from "@/assets/projects/pomco-emergency-main.png";

// POMCO project images
import POMCOBeforeImg from "@/assets/projects/pomco-before.png";
import POMCOAfterImg from "@/assets/projects/pomco-after.png";
import POMCODeviceImg from "@/assets/projects/pomco-device.png";
import POMCOFlowImg from "@/assets/projects/pomco-flow.png";
import ZumbaInstructorImg from "@/assets/projects/zumba-instructor-main.png";

// Hallmark Baby imports
import HallmarkWireThumbnailImg from "@/assets/projects/hallmark-wire-thumbnail.png";
import HallmarkFinalThumbnailImg from "@/assets/projects/hallmark-final-thumbnail.jpg";
import HallmarkWireProductImg from "@/assets/projects/hallmark-wire-product.png";
import HallmarkFinalProductImg from "@/assets/projects/hallmark-final-product.jpg";

// City Year imports
import CityYearFlowImg from "@/assets/projects/city-year-flow.jpg";
import CityYearBeforeImg from "@/assets/projects/city-year-before.png";
import CityYearAfterImg from "@/assets/projects/city-year-after.png";
import CityYearAppBeforeImg from "@/assets/projects/city-year-app-before.png";
import CityYearAppAfterImg from "@/assets/projects/city-year-app-after.png";

// L.L.Bean Email imports
import LLBEmailProcessImg from "@/assets/projects/llb-email-process.jpg";
import LLBEmailMobileImg from "@/assets/projects/llb-email-mobile.png";
import LLBEmailDesktopImg from "@/assets/projects/llb-email-desktop.png";

// Block Mobile imports
import HRBMobileProcessImg from "@/assets/projects/hrb-mobile-process.jpg";
import HRBMobileBeforeImg from "@/assets/projects/hrb-mobile-before.png";
import HRBMobileAfterImg from "@/assets/projects/hrb-mobile-after.png";
import HRBMobilePhoto1Img from "@/assets/projects/hrb-mobile-photo1.png";
import HRBMobilePhoto2Img from "@/assets/projects/hrb-mobile-photo2.png";

// Cruises Only imports
import CruisesOnlyProcessImg from "@/assets/projects/cruises-only-process.jpg";
import CruisesOnlyIABeforeImg from "@/assets/projects/cruises-only-ia-before.png";
import CruisesOnlyIAAfterImg from "@/assets/projects/cruises-only-ia-after.png";
import CruisesOnlyInfoBeforeImg from "@/assets/projects/cruises-only-info-before.png";
import CruisesOnlyInfoAfterImg from "@/assets/projects/cruises-only-info-after.png";
import CruisesOnlyDrillDownImg from "@/assets/projects/cruises-only-drilldown.png";

// Block Mobile iPad imports
import HRBiPadProcessImg from "@/assets/projects/hrb-ipad-process.jpg";
import HRBiPadHomeImg from "@/assets/projects/hrb-ipad-home.png";
import HRBiPadPhoto1Img from "@/assets/projects/hrb-ipad-photo1.png";
import HRBiPadPhoto2Img from "@/assets/projects/hrb-ipad-photo2.png";
import HRBiPadPhoto3Img from "@/assets/projects/hrb-ipad-photo3.png";
import HRBiPadPhoto4Img from "@/assets/projects/hrb-ipad-photo4.png";

// TaxCut Support imports
import TaxCutSupportProcessImg from "@/assets/projects/taxcut-support-process.jpg";
import TaxCutSupportBeforeImg from "@/assets/projects/taxcut-support-before.png";
import TaxCutSupportAfterImg from "@/assets/projects/taxcut-support-after.png";

// TaxCut Welcome imports
import TaxCutWelcomeProcessImg from "@/assets/projects/taxcut-welcome-process.jpg";
import TaxCutWelcomeBeforeImg from "@/assets/projects/taxcut-welcome-before.png";
import TaxCutWelcomeUpdateBeforeImg from "@/assets/projects/taxcut-welcome-update-before.png";
import TaxCutWelcomeAfterImg from "@/assets/projects/taxcut-welcome-after.png";
import TaxCutWelcomeImport1BeforeImg from "@/assets/projects/taxcut-welcome-import1-before.png";
import TaxCutWelcomeImport2BeforeImg from "@/assets/projects/taxcut-welcome-import2-before.png";
import TaxCutWelcomeImportAfterImg from "@/assets/projects/taxcut-welcome-import-after.png";

// TaxCut Support Reports imports
import TaxCutReportsBeforeImg from "@/assets/projects/taxcut-reports-before.png";
import TaxCutReportsAfterImg from "@/assets/projects/taxcut-reports-after.png";

// DeductionPro imports
import DProProcessImg from "@/assets/projects/dpro-process.jpg";
import DProBefore1Img from "@/assets/projects/dpro-before1.png";
import DProAfter1Img from "@/assets/projects/dpro-after1.png";
import DProAfter2Img from "@/assets/projects/dpro-after2.png";
import DProAfter3Img from "@/assets/projects/dpro-after3.png";

// Zumba Instructor imports
import ZumbaFlowImg from "@/assets/projects/zumba-flow.jpg";
import ZumbaAccountBeforeImg from "@/assets/projects/zumba-account-before.png";
import ZumbaAccountAfterImg from "@/assets/projects/zumba-account-after.png";
import ZumbaTrainingBeforeImg from "@/assets/projects/zumba-training-before.png";
import ZumbaTrainingAfterImg from "@/assets/projects/zumba-training-after.png";

// ONRR project images
import ONRRDreamweaverImg from "@/assets/projects/onrr-dreamweaver.jpeg";
import ONRRFilter1Img from "@/assets/projects/onrr-filter1.jpeg";
import ONRRFilter2Img from "@/assets/projects/onrr-filter2.jpeg";
import ONRRFilter3Img from "@/assets/projects/onrr-filter3.jpeg";
import ONRRFilterBuiltImg from "@/assets/projects/onrr-filter-built.jpeg";
import ONRRNRRDBeforeImg from "@/assets/projects/onrr-nrrd-before.jpeg";
import ONRRHomeNewImg from "@/assets/projects/onrr-home-new.jpeg";
import ONRRPersonaTrianglesImg from "@/assets/projects/onrr-persona-triangles.jpeg";

// H&R Block project images
import TDVProcessImg from "@/assets/projects/tdv-process.jpg";
import TDVExample1Img from "@/assets/projects/tdv-example1.png";
import iPadFlowImg from "@/assets/projects/ipad-flow.jpg";
import iPadMainImg from "@/assets/projects/ipad-main.png";
import iPadPortraitImg from "@/assets/projects/ipad-portrait.png";
import EZProcessImg from "@/assets/projects/ez-process.jpg";
import EZMainImg from "@/assets/projects/ez-main.png";
import EZIncomeImg from "@/assets/projects/ez-income.png";
import EZPhotoImg from "@/assets/projects/ez-photo.png";
import BLProcessImg from "@/assets/projects/bl-process.jpg";
import BlockLiveHowItWorksImg from "@/assets/projects/blocklive-howitworks.png";

// L.L.Bean project images
import LLBResponsiveFlowImg from "@/assets/projects/llb-responsive-flow.jpeg";
import LLBPortraitImg from "@/assets/projects/llb-portrait.png";
import LLBLandscapeImg from "@/assets/projects/llb-landscape.png";
import LLBDesktopImg from "@/assets/projects/llb-desktop.png";
import LLBAccountMobileImg from "@/assets/projects/llb-account-mobile.png";

// L.L.Bean Account project images
import LLBAccountFlowImg from "@/assets/projects/llb-account-flow.jpeg";
import LLBAccountBeforeImg from "@/assets/projects/llb-account-before.png";
import LLBAccountDesktopImg from "@/assets/projects/llb-account-desktop.png";
import LLBAccountPortraitImg from "@/assets/projects/llb-account-portrait.png";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const navigateToPortfolio = () => {
    navigate('/');
    setTimeout(() => {
      const projectElement = document.getElementById(`project-${projectId}`);
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Fallback to portfolio section if project not found
        const portfolioElement = document.getElementById('portfolio');
        if (portfolioElement) {
          portfolioElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  // Helper function to render content with HTML links and bullet formatting
  const renderContentWithLinks = (content: string) => {
    const lines = content.split('\n');
    const result = [];
    let currentList = [];
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex].trim();
      
      // Skip lines that are just standalone # characters
      if (line === '#' || line === '##' || line === '###') {
        continue;
      }
      
      // Check if this is a markdown subheading
      if (line.startsWith('####')) {
        // Flush any current list
        if (currentList.length > 0) {
          result.push(
            <ul key={`list-before-${lineIndex}`} className="space-y-1 my-1">
              {currentList.map((item, itemIndex) => (
                <li key={itemIndex} className="text-muted-foreground flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="flex-1">{renderLineWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          );
          currentList = [];
        }
        
        // Render the subheading
        const headingText = line.substring(4).trim();
        result.push(
          <h4 key={`heading-${lineIndex}`} className="text-base font-semibold text-foreground mt-4 mb-1">
            {headingText}
          </h4>
        );
      } else if (line.startsWith('•')) {
        const bulletContent = line.substring(1).trim();
        currentList.push(bulletContent);
      } else {
        // If we have accumulated bullet points, render them as a list
        if (currentList.length > 0) {
          result.push(
            <ul key={`list-${lineIndex}`} className="space-y-1 my-1">
              {currentList.map((item, itemIndex) => (
                <li key={itemIndex} className="text-muted-foreground flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="flex-1">{renderLineWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          );
          currentList = [];
        }
        
        // Render regular line
        if (line) {
          result.push(
            <div key={lineIndex} className="mb-2">
              {renderLineWithLinks(line)}
            </div>
          );
        } else {
          // Empty line for spacing
          result.push(<div key={lineIndex} className="h-2" />);
        }
      }
    }
    
    // Handle any remaining bullet points
    if (currentList.length > 0) {
      result.push(
        <ul key="final-list" className="space-y-1 my-1">
          {currentList.map((item, itemIndex) => (
            <li key={itemIndex} className="text-muted-foreground flex items-start">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true" />
              <span className="flex-1">{renderLineWithLinks(item)}</span>
            </li>
          ))}
        </ul>
      );
    }
    
    return result;
  };

  // Helper function to render a single line with links and bold formatting
  const renderLineWithLinks = (line: string) => {
    // First handle bold markdown (**text**)
    const boldParts = line.split(/(\*\*[^*]+\*\*)/g);
    
    return boldParts.map((part, partIndex) => {
      // Check if this part is bold markdown
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2); // Remove ** from both ends
        return (
          <strong key={partIndex} className="font-semibold text-foreground">
            {boldText}
          </strong>
        );
      }
      
      // Handle links in non-bold parts
      const linkParts = part.split(/(<a[^>]*>.*?<\/a>)/g);
      
      return linkParts.map((linkPart, linkIndex) => {
        const linkMatch = linkPart.match(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/);
        if (linkMatch) {
          const [, href, linkText] = linkMatch;
          return (
            <a 
              key={`${partIndex}-${linkIndex}`}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {linkText}
            </a>
          );
        }
        return linkPart;
      });
    });
  };

  // Real project data using exact content from Shannon's GitHub repository
  const projects = {
    "dol-apprenticeship-data": {
      id: "dol-apprenticeship-data",
      title: "Department of Labor Apprenticeship Data",
      client: "Department of Labor",
      category: "civic",
      year: "2025",
      status: "Completed",
      duration: "Government project",
      role: "UX Designer",
      description: "Redesign of the Department of Labor's Office of Apprenticeship data to allow users to explore the data.",
      services: ["User experience strategy", "user research", "detailed interaction design", "visual design", "build reviews"],
      technologies: ["Government data systems"],
      images: [],
      deliverables: ["User research guides, plans and findings", "high and low fidelity prototypes"],
      liveUrl: "https://www.apprenticeship.gov/data-and-statistics/apprentices-by-state-dashboard",
      content: {
        sections: [
          {
            title: "Context",
            content: `The Office of Apprenticeship wanted to consolidate their data in an enterprise data warehouse and create 13 dashboards to help answer questions about Diversity, Equity, and Inclusion (DEI).
• The project had been going on for a year when I started, but it didn't meet client needs.
• The contract was extended a year with a very specific punch list of items to fix that covered the whole project timeline.
• There wasn't time or scope to address anything I could learn from users.`
          },
          {
            title: "Team", 
            content: `• Office of the Chief Information Officer: Federal Project Manager, UX Designer (me)
• Contract Dev Team: Project Manager, Product Manager, 2 Data Scientist Developers, UX Researcher (part-time)
• Office of Apprenticeship: Day-to-Day Product Owner, Program Manager, Division Chief, Administrator`
          },
          {
            title: "Problem",
            content: "How do we get user-centered design built into the process?"
          },
          {
            title: "User research: Round 1",
            content: `• I built trust with the Project Manager by wireframing on a separate project, so he let me start doing UX work on this one.
• Because one dashboard was going public, it was a good first candidate for user interviews.
• There was a focus group with some of the people involved in this research and I was able to build the case for 1 on 1 interviews because most of the talking in that focus group came from one person and it became clear that we didn't get the value we wanted from the other focus group participants.
• I started this round with people who work at state apprenticeship agencies because we didn't have the ability to find people in the public.

Study goal: Start getting feedback from users and building trust with the team.
Participants: 9 participants from state apprenticeship agencies.

**Findings:**
• Filtering controls: Multiple users were confused by having both filters and breakdown next to each other.
• Plus sign: No users were able to discover the control to be able to view county level information.
• Clickability: Few participants discovered that they could click on the bar charts.
• Map prominence: Participants broadly liked the map and wanted it to be the first or primary visualization presented to users. Many didn't discover that clicking on it filtered the numbers above.

Screen that we tested:

IMAGE:DOLR1Before:Screenshot of data and statistics page before usability issues were addressed.

<a href="https://hu56of.axshare.com/#id=5qudft&p=redesign_v1&g=1">Prototype to address issues</a>:

IMAGE:DOLr1After:Screenshot of prototype of data and statistics page that addresses usability issues.`
          },
          {
            title: "User research: Round 2",
            content: `After building trust with the first round and setting up infrastructure to recruit public participants, I conducted a second round of research with public participants.

Study goal: Learn whether the changes we made improved the experience and get feedback on additional changes.
Participants: 4 researchers, 3 economists, and 2 journalists.

**Findings:**
• It was easier to use than in the first iteration.
• Download function was difficult to find.
• State type definitions were confusing.
• Participants thought we didn't have county-level data because it isn't available for the default display setting.
• Wage data wasn't discoverable.

<a href="https://hu56of.axshare.com/#id=b2fv5x&p=redesign_feb_16toggles&g=1">Tested prototype</a>:

IMAGE:DOLr2:Screenshot of the version of the data and statistics page tested with public users.`
          },
          {
            title: "Final design",
            content: `IMAGE:DOLFinal:Screenshot of the final design for the data and statistics page that incorporates user interview findings.

<a href="https://www.apprenticeship.gov/data-and-statistics/apprentices-by-state-dashboard">View the built page on apprenticeship.gov.</a>`
          },
          {
            title: "Outcomes",
            content: `Incorporating user research resulted in:
• I was asked to design some of the later dashboards in the roadmap to get early feedback.
• The dashboards I designed required less iteration with the client than previous dashboards.
• The Office of Apprenticeship hired a UX intern after my team's engagement.
• Leadership was much happier with the outcome of the project than with the previous iteration.`
          }
        ]
      }
    },
    "onrr-redesign": {
      id: "onrr-redesign",
      title: "ONRR.gov Redesign",
      client: "U.S. Department of the Interior",
      category: "Government", 
      year: "2022",
      status: "Completed",
      duration: "Government project",
      role: "UX Designer & Content Strategist",
      description: "Redesign the U.S. Department of the Interior's Office of Natural Resources Revenue primary website to be focused on user needs and get it out of Dreamweaver.",
      services: ["User research", "user type definition", "conceptual design", "detailed interaction design", "visual design", "content strategy", "plain language", "UX writing", "build reviews"],
      technologies: ["Modern web standards", "CMS"],
      images: [ONRRHomeImg],
      deliverables: ["User research guides, plans and findings", "high and low fidelity prototypes", "content in a CMS", "CMS process documentation"],
      liveUrl: "https://onrr.gov/",
      content: {
        sections: [
          {
            title: "Context",
            content: `After we were successful at redesigning the Natural Resources Revenue Data portal, my team continued that work when we were given responsibility for the agency's main website (onrr.gov). That site is the public face of the agency and a portal for companies who lease lands from the government to report their resource production and pay the amounts they owe the agency.

My team worked in the open and documented everything on a wiki and in a blog. Links in parentheses below go to pages on those websites.`
          },
          {
            title: "Redesign process",
            content: `My role in the redesign was to lead all UX and content strategy activities with help from 2 program analysts and several UX interns. The project used agile methodologies and I led user and stakeholder interviews throughout. I also acted as product manager and scrum master for much of this process because we had a year where we had no dedicated product manager on the team.

### Discovery:
• Content audit & sitemap
• User & stakeholder interviews (Blog post about getting stakeholder buy-in)
• Product visioning (Product framing)
• Persona definition (Blog post about personas)

### Old site maintenance:
• Update site in Dreamweaver and html
• Move work tracking from ServiceNow into GitHub
• Prioritize 3,000 documents that needed to be made accessible (Blog post about making document accessible)
• Work with document owners to make documents accessible

### Redesign:
• Conduct card sorting and tree testing to define new information architecture (Blog post on card sorting)(Blog post on tree testing)
• Redesign site to fit new information architecture
• Rewrite all site content to plain language standards
• Test prototypes with users and iterate designs
• Redesign contact information to work for those who are contacts (Blog post about contact info redesign)

### CMS setup and customization:
• Research CMS options
• Conduct user research with future CMS users
• Work with developer to customize CMS to be able to handle everything in the design
• Add all content to the CMS

### New site maintenance:
• Plan workflows for commonly updated content
• Ensure content updaters know the process for using GitHub to track issues`
          },
          {
            title: "Before and after",
            content: `Here's what the homepage looked like before and after the redesign.

IMAGE:ONRRDreamweaverImg:Screenshot of the onrr.gov homepage before the redesign

IMAGE:ONRRHomeNewImg:Screenshot of the onrr.gov homepage after the redesign`
          },
          {
            title: "Learn more",
            content: `You can read about the work I did at the Office of Natural Resources Revenue in my team's blog at [revenuedata.doi.gov/blog/](https://revenuedata.doi.gov/blog/).

The complete project documentation is available on our public GitHub wiki, showcasing our commitment to working in the open and sharing our process with other government teams.`
          }
        ]
      }
    },
    "nrrd-portal": {
      id: "nrrd-portal",
      title: "Natural Resources Revenue Data Portal Product Framing",
      client: "Office of Natural Resources Revenue",
      category: "civic",
      year: "2020",
      status: "Completed",
      duration: "Government project",
      role: "Product Strategist",
      description: "Reframing the U.S. Department of the Interior's Office of Natural Resources Revenue data portal to be focused on user needs.",
      services: ["Product framing", "user research", "participant recruitment", "user type definition", "conceptual design", "detailed interaction design", "visual design", "build reviews"],
      technologies: ["Data visualization tools"],
      images: [NRRDPortalImg, ONRRPersonaTrianglesImg, ONRRNRRDBeforeImg, ONRRFilter1Img, ONRRFilter2Img, ONRRFilter3Img, ONRRFilterBuiltImg],
      deliverables: ["Product vision", "user research guides, plans and findings", "high and low fidelity prototypes", "journey maps & process diagrams"],
      liveUrl: "https://revenuedata.doi.gov/query-data",
      content: {
        sections: [
          {
            title: "Context",
            content: `The Office of Natural Resources Revenue (ONRR) is a U.S. Department of the Interior agency that tracks revenue received and distributed from the management of natural resources on public lands and waters.

• I worked on an open data site with revenue data from oil & gas leases on federal lands.
• The Extractive Industries Transparency Initiative (EITI) was the driver for the website.
• Shortly before I started in this role, the United States pulled out of the EITI.
• As a result, we had to rethink what the site would become and had a lot more freedom to respond to user needs.

My team worked in the open and documented everything on a <a href="https://github.com/DOI-ONRR/nrrd/wiki">wiki</a> and in a <a href="https://revenuedata.doi.gov/blog/">blog</a>. Links in parentheses below go to pages on those websites.`
          },
          {
            title: "Team",
            content: `• **Agile Team:** Product Owner, Developer, Content Strategist, 2 Program Analysts, UX Designer (me)
• **Leadership & Stakeholders:** Program Manager, Director & Deputy Director, Department of the Interior Political Appointees, Public & Congressional Affairs Manager, Data Retrieval Team, Freedom of Information Act Team, Royalty Policy Committee`
          },
          {
            title: "Problem",
            content: `How do we reframe the site to meet user needs? (<a href="https://github.com/DOI-ONRR/nrrd/wiki/Product-framing#problem-statement">Full problem statement</a>)`
          },
          {
            title: "Understanding user needs",
            content: `I conducted several rounds of user research that resulted in this vision statement.

"We are informing policy debates and raising public awareness by building the definitive source of timely and useful data about how the government manages federal energy and mineral resources, revenue, and disbursements." (<a href="https://github.com/DOI-ONRR/nrrd/wiki/Product-framing#our-vision">More about the vision</a>)

The dots below represent users I interviewed grouped by how they accessed and used the data. They grouped into 4 user types: Question Answerers, Agenda Supporters, Storytellers, and Domain Learners. These user types informed the vision and drove all the decisions we made about the product going forward. (<a href="https://github.com/DOI-ONRR/research/blob/main/nrrd-research/00_UserTypes/00_UserTypes.md">More about these user types</a>)

IMAGE:ONRRPersonaTrianglesImg:User types mapped on triangles representing known questions, system understanding, and exploration`
          },
          {
            title: "Design implications",
            content: `Before we reframed the website, it was a very static site based on the requirements of the U.S. Extractives Industries Transparency Initiative. (<a href="./blog/HomepageBlog.pdf">Blog post about reframing the homepage</a>)

IMAGE:ONRRNRRDBeforeImg:Screenshot of Natural Resources Revenue Data website showing the beginning state before redesign

After learning that several types of users wanted to slice and dice the data without having to download a spreadsheet, we started iteratively working the website towards the ability to filter the data.

#### Early iterations

The first iterations of the filter tool were based on an old tool that internal users had asked us to bring back. It involved picking filters before seeing the data. In user research, we learned that people wanted to see the data before picking filters, so they could understand the scope of the data.

IMAGE:ONRRFilter1Img:Screenshot of first built query tool with filters that have to be submitted before the table is built

The second iteration attempted to group the data, but also didn't provide enough visibility to the data for users.

IMAGE:ONRRFilter2Img:Screenshot of built query data page with first pass at groupings and filters

The third version offered visibility to the data, but users didn't quite understand how to drill down.

IMAGE:ONRRFilter3Img:Screenshot of a design for filterable tables with grouping and table or graph view

#### Final design

We ended up building this version where you can see all the data before filtering and add multiple grouping columns. We also added a download function after learning that users wanted to download just what they'd filtered the data to. It performed well with users and is still on the <a href="https://revenuedata.doi.gov/query-data">live website</a>.

IMAGE:ONRRFilterBuiltImg:Screenshot of final design for filterable tables with grouping and table or graph view`
          },
          {
            title: "Outcomes",
            content: `The reframing of the website and redesign resulted in:

• Improved usability
• Increased site usage
• More targeted downloads
• Improved accessibility
• Increased resources by giving us 2 contract developers to make further improvements`
          },
          {
            title: "Learn more",
            content: `You can read about the work I did at the Office of Natural Resources Revenue in <a href="https://revenuedata.doi.gov/blog/">my team's blog</a>.`
          }
        ]
      }
    },
    "maine-ballot": {
      id: "maine-ballot",
      title: "The Maine Ballot",
      client: "The Maine Ballot",
      category: "civic",
      year: "2016-2020",
      status: "Completed",
      duration: "Volunteer project",
      role: "Founder & Designer",
      description: "A ballot website to help Mainers understand referendum questions on statewide ballots with over 3,000 unique visitors.",
      services: ["Product management", "user research", "interaction design", "visual design", "development"],
      technologies: ["Squarespace", "GitHub Pages", "Open Source"],
      images: [MaineBallotImg],
      deliverables: ["Functioning website"],
      liveUrl: "https://maineballot.org/",
      content: {
        sections: [
          {
            title: "About this Project",
            content: `IMAGE:MaineBallotImg:Screenshot of the Maine Ballot homepage

In 2016, I created a ballot website to help Mainers understand the referendum questions on statewide ballots. It had over 3,000 unique visitors leading up to the November 2018 election. 

In the last couple of years, Open Maine has gotten involved and volunteers have helped create and review the content on the site. During the 2018-2019 government shutdown, a colleague and I moved the site from Squarespace to GitHub to make it open source and available for people to fork and create similar sites for other states.`
          },
          {
            title: "Impact & Recognition",
            content: `The project gained recognition in the civic tech community and was featured on:

• <a href="https://civictech.chat/2019/07/maine-ballot" target="_blank" rel="noopener noreferrer">Civic Tech Chat podcast</a>
• <a href="http://openmaine.org/stories/2020/04/10/the-viral-vaccine-ballot-question/" target="_blank" rel="noopener noreferrer">OpenMaine blog</a> 
• <a href="https://brentryanjohnson.com/your-civic-tech-work-matters/" target="_blank" rel="noopener noreferrer">Colleague's blog post about civic tech work</a>`
          },
          {
            title: "Open Source Transition",
            content: `During the 2018-2019 government shutdown, a colleague and I moved the site from Squarespace to GitHub to make it open source and available for people to fork and create similar sites for other states.

**Website:** <a href="https://maineballot.org/" target="_blank" rel="noopener noreferrer">maineballot.org</a>
**GitHub:** <a href="https://github.com/OpenMaine/maineballot" target="_blank" rel="noopener noreferrer">Maine Ballot repository</a>`
          }
        ]
      }
    },
    "tax-data-visualization": {
      id: "tax-data-visualization",
      title: "Tax Data Visualization",
      client: "H&R Block",
      category: "Finance",
      year: "2015",
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "New screens to visually explain tax situations to H&R Block office clients.",
      services: ["Conceptual Design", "Information Design", "Collaboration with Visual Designers", "Prototyping"],
      technologies: ["Design tools"],
      images: [TaxDataVizImg],
      deliverables: ["Wireframes", "High Fidelity Prototype"],
      liveUrl: "https://uxpamagazine.org/visualizing-tax-returns/",
      content: {
        sections: [
          {
            title: "Problem",
            content: `Enable tax professionals to explain to clients how they arrived at their refund or balance due.`
          },
          {
            title: "Process",
            content: `• Field research to determine requirements
• Wireframe concepts
• Evaluate concepts with stakeholders and iterate
• Formulate needs for visual design vendor
• Evaluate concepts from vendor
• Build high fidelity prototypes and test with users
• Iterate design
• Work through detailed design with product team
• Document detailed design`
          },
          {
            title: "Solution",
            content: `• Designed a graph view that shows where the client's money goes in a tax return.
• Collaborated with a visual designer to ensure the visual design conveyed the message.
• Tested with clients and tax pros to ensure the graph facilitated the conversation.`
          },
          {
            title: "Tax Summary",
            content: `The final design shows a graphical summary of a tax return using visual elements to help clients understand their tax situation.

IMAGE:TDVExample1Img:Tax summary showing the difference between balance due and amount paid, illustrating refund or balance due amounts`
          },
          {
            title: "Results",
            content: `• Designs performed well in usability studies.
• Launched as a beta the first year and then released nationwide the following year because it performed well in the field with both tax professionals and clients.
• Additional screens to visually explain tax data were designed the second year as a result of the success of this screen.`
          }
        ]
      }
    },
    "ipad-tax-prep": {
      id: "ipad-tax-prep",
      title: "iPad Tax Prep",
      client: "H&R Block",
      category: "Finance",
      year: "2014",
      status: "Completed",
      duration: "Corporate project",
      role: "Mobile Designer",
      description: "Design an iPad tax preparation app as part of the H&R Block At Home suite of tax preparation products.",
      services: ["Conceptual Design", "Interaction Design", "Collaboration with Visual Designers and Vendors"],
      technologies: ["iPad app development"],
      images: [iPadTaxImg],
      deliverables: ["Wireframes", "Workflow Diagrams"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Provide a way for users to file their taxes using an iPad.
• Using the tax engine and interview screens from online, find a way to make a native iPad UI that makes the app feel like it's on an iPad and improves the experience for users.`
          },
          {
            title: "Process",
            content: `• Evaluate and collaborate on user stories
• Define workflow and screen design options
• Evaluate concepts with stakeholders and iterate design
• Formulate needs for visual design vendor
• Evaluate concepts from vendor
• Work through detailed design with product team
• Document detailed design
• Work with vendor to conduct usability study on build
• Iterate design based on findings`
          },
          {
            title: "Solution",
            content: `• Used years of research about navigation within tax prep products to design a left hand navigation menu in the native iPad UI.
• Collaborated with a visual designer to create a look and feel that indicated the product was still in the H&R Block At Home family, but looked like an iPad app.
• Worked through which pieces of the online interview screens needed to change to be compatible with interactions commonly expected on the iPad.`
          },
          {
            title: "Main UI",
            content: `The final iPad interface designed for both landscape and portrait orientations.

### Landscape Mode
Main interface with left navigation optimized for iPad interactions.

IMAGE:iPadMainImg:Landscape mode: Main interface with left navigation optimized for iPad interactions

### Portrait Mode
Responsive design adapting to different iPad orientations.

IMAGE:iPadPortraitImg:Portrait mode: Responsive design adapting to different iPad orientations`
          },
          {
            title: "Results",
            content: `• Designs performed better in usability studies than any previous product we've tested out of the box.
• Satisfaction scores for the iPad app are higher than for the online product it's based on.`
          }
        ]
      }
    },
    "1040ez-mobile": {
      id: "1040ez-mobile",
      title: "1040-EZ Mobile",
      client: "H&R Block",
      category: "Finance",
      year: "2013",
      status: "Completed",
      duration: "Corporate project",
      role: "Mobile Designer",
      description: "Design a mobile tax preparation app as part of the H&R Block At Home suite of tax preparation products.",
      services: ["Conceptual Design", "Interaction Design", "Collaboration with Visual Designers and Vendors"],
      technologies: ["Mobile app development"],
      images: [Mobile1040EZImg],
      deliverables: ["Wireframes"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Provide a way for users with simple tax returns to file using their smart phone.
• Allow users to take a picture of their W-2 for simplified data entry.
• Ensure consistency with online tax preparation application.`
          },
          {
            title: "Process",
            content: `• Evaluate and collaborate on user stories
• Formulate needs for visual design vendor
• Evaluate concepts from vendor
• Work through detailed design with product team
• Document detailed design
• Work with vendor to conduct usability study on build
• Iterate design based on findings`
          },
          {
            title: "Solution",
            content: `• Collaborated with visual designers to optimize the tax prep process for the phone.
• Figured out ways to simplify the tax interview that we used in the online product for the small real estate on the phone.
• Defined interaction for incorporating photo taking functionality into the W-2 interview.`
          },
          {
            title: "Screens",
            content: `Key interface screens showing the mobile tax preparation experience.

### Main UI
The streamlined main interface optimized for mobile interactions and simplified tax filing.

IMAGE:EZMainImg:Main UI: Streamlined interface optimized for mobile interactions

### Income Selection  
Simplified income selection screen designed specifically for mobile users.

IMAGE:EZIncomeImg:Income Screen: Simplified income selection for mobile users

### Photo Data Entry
W-2 photo capture functionality integrated seamlessly into the tax interview process.

IMAGE:EZPhotoImg:Photo Data Entry: W-2 photo capture functionality integrated into tax interview`
          },
          {
            title: "Results",
            content: `• Designs performed well in usability studies.
• Average rating of 3.5 stars in both the Apple and Android App Stores.`
          }
        ]
      }
    },
    "block-live": {
      id: "block-live",
      title: "Block Live",
      client: "H&R Block",
      category: "Finance",
      year: "2012",
      status: "Completed",
      duration: "Corporate project",
      role: "Product Designer",
      description: "New product to enable tax prep from home with a live tax professional.",
      services: ["Conceptual Design", "Interaction Design", "Service Design", "Collaboration with Visual Designers and Vendors", "Prototyping"],
      technologies: ["Live service platform"],
      images: [BlockLiveImg],
      deliverables: ["Wireframes", "Workflow Diagrams", "High Fidelity Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Provide a way to replicate the in-office tax preparation experience at home, taking advantage of video chat capabilities.
• Users needed to be able to find a tax pro that was available when they wanted to prepare their tax return, upload documents to share with their tax pro, and view and approve their return once completed.
• Also included a mobile app to take pictures of and upload tax documents.`
          },
          {
            title: "Process",
            content: `• Evaluate and collaborate on user stories
• Create personas and user scenarios
• Wireframe concepts
• Evaluate concepts with stakeholders and iterate design
• Formulate needs for visual design vendor
• Evaluate concepts from vendor
• Build high fidelity prototype and test with users
• Iterate design
• Work through detailed design with product team
• Document detailed design
• Work with vendor to conduct usability study on build
• Iterate design based on findings`
          },
          {
            title: "Solution",
            content: `• Concepted and designed a new product from the ground up, working with business partners and visual designers.
• Built and tested several iterations of high-fidelity prototypes with users to ensure the viability of the concept and usability of the product.
• Worked through detailed design and made trade-offs with development to ensure delivery within time and budget constraints.
• Worked with the vendor who designed the mobile app to ensure the process between Block Live and the mobile app worked smoothly and ensured the app conformed to guidelines and design patterns established in the main application.`
          },
          {
            title: "How It Works Screen",
            content: `The final interface explaining the Block Live service to users.

IMAGE:BlockLiveHowItWorksImg:How It Works: Explaining the remote tax preparation process to users`
          },
          {
            title: "Results",
            content: `• Concept and design performed well in user research studies.
• Pilot and beta releases launched.`
          }
        ]
      }
    },
    "llbean-responsive": {
      id: "llbean-responsive",
      title: "L.L.Bean Responsive Site",
      client: "L.L.Bean",
      category: "Retail",
      year: "2016",
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "Modification of existing llbean.com site to make it responsive down to 600 px and optimized for tablet users.",
      services: ["Content Analysis", "Responsive Web Design", "Interaction Design", "Collaboration with Visual Designers and Vendors", "Prototyping"],
      technologies: ["Responsive web design"],
      images: [LLBeanResponsiveImg],
      deliverables: ["Content Inventory", "Wireframes", "Responsive Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Conversion on tablets was lower than desired.
• Many features on the site were difficult for users to interact with on tablets because they had small tap targets.`
          },
          {
            title: "Process",
            content: `• Evaluate business requirements and existing data
• Inventory and prioritize existing content
• Define supported breakpoints based on existing tablet usage
• Explore design options for primary breakpoint
• Conduct usability study on options
• Iterate design based on findings and test again (several times)
• Solidify and specify designs for dev
• Adapt designs for other breakpoints
• Review build at all breakpoints and adjust designs`
          },
          {
            title: "Solution",
            content: `Responsive site optimized for tablet users on viewports down to 600 px wide.`
          },
          {
            title: "Tablet Screens",
            content: `Responsive design optimized for tablet interactions in both orientations.

### Portrait Mode
Optimized layout for vertical tablet orientation.

IMAGE:LLBPortraitImg:Portrait: Optimized layout for vertical tablet orientation

### Landscape Mode
Optimized layout for horizontal tablet orientation.

IMAGE:LLBLandscapeImg:Landscape: Optimized layout for horizontal tablet orientation`
          },
          {
            title: "Desktop Screen",
            content: `The desktop experience maintaining full functionality while supporting responsive breakpoints.

IMAGE:LLBDesktopImg:Desktop: Full-featured desktop experience with responsive foundation`
          },
          {
            title: "Results",
            content: `Designs performed well in usability studies with tablet users.`
          }
        ]
      }
    },
    "llbean-customization": {
      id: "llbean-customization",
      title: "L.L.Bean Customization Tool",
      client: "L.L.Bean",
      category: "Retail",
      year: "2015",
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "Responsive redesign of customizable product page to allow use on tablets and better integrate the feature with the rest of the site.",
      services: ["Interaction Design", "Responsive Web Design", "Prototyping"],
      technologies: ["E-commerce platform"],
      images: [LLBeanCustomizationImg],
      deliverables: ["Wireframes", "Responsive Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• The existing page to create a custom item used Flash and was unusable on tablets.
• The screen also didn't look like it was part of the rest of the site.`
          },
          {
            title: "Process",
            content: `• Evaluate business requirements and existing data
• Inventory and prioritize existing content
• Define supported breakpoints based on existing tablet usage
• Explore design options for primary breakpoint
• Conduct usability study on options
• Iterate design based on findings and test again (several times)
• Solidify and specify designs for dev
• Adapt designs for other breakpoints
• Review build at all breakpoints and adjust designs`
          },
          {
            title: "Solution",
            content: `• New screen using a third party configuration tool.
• Screen laid out to look like other product pages.
• Responsive to the viewport on tablets.`
          },
          {
            title: "Screens",
            content: `The responsive design works seamlessly across different devices and screen sizes.

### Desktop
IMAGE:LLBCustomizationDesktopImg:Desktop customization interface showing the full product customization experience

### iPad Portrait
IMAGE:LLBCustomizationPortraitImg:iPad portrait view of the customization interface optimized for touch interaction`
          }
        ]
      }
    },
    "llbean-account": {
      id: "llbean-account",
      title: "L.L.Bean Account Redesign",
      client: "L.L.Bean", 
      category: "LLB",
      year: "2020",
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "Redesign of My Account section to make it easier to use and usable across devices.",
      services: ["Interaction Design", "Responsive Web Design", "Mobile Design", "Adaptive Design", "Detailed Design", "Prototyping"],
      technologies: ["Web platform", "Responsive design"],
      images: [LLBeanAccountImg, LLBAccountFlowImg, LLBAccountBeforeImg, LLBAccountDesktopImg, LLBAccountPortraitImg, LLBAccountMobileImg],
      deliverables: ["Wireframes", "Flow Diagrams", "Responsive Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Account interface was dated and confusing for users based on an external usability review of the site.
• Account functions weren't present on mobile site.`
          },
          {
            title: "Process",
            content: `• Review usability review findings
• Design two options to meet business requirements
• Usability study of the two options
• Work with project team through detailed design and iterate as we learn
• Refine design for tablet breakpoints
• Review visual design comps
• Review build at all breakpoints and refine design
• Adapt design for mobile website`
          },
          {
            title: "Solution",
            content: `• Redesigned account screens that work well for all users on all devices.
• Most common user tasks are bubbled up to the main My Account page for easy access.`
          },
          {
            title: "Screens",
            content: `#### Before
##### My Account Main Screen
IMAGE:LLBAccountBeforeImg:Original account interface that was dated and confusing for users

#### After

##### Desktop
IMAGE:LLBAccountDesktopImg:L.L.Bean account interface optimized for desktop users with improved organization

##### iPad Portrait  
IMAGE:LLBAccountPortraitImg:Responsive account design adapted for iPad portrait orientation with touch-friendly elements

##### Mobile
IMAGE:LLBAccountMobileImg:Mobile-optimized account interface making previously unavailable functions accessible on phones

The redesigned interface successfully addressed usability issues and extended account functionality to mobile devices for the first time.`
          }
        ]
      }
    },
    "ati-nursing": {
      id: "ati-nursing",
      title: "ATI Nursing Education",
      client: "ATI Nursing Education",
      category: "consulting",
      year: "2020",
      status: "Completed",
      duration: "Multi-year engagement",
      role: "Lead UX Designer",
      description: "Responsive redesign of student portal to allow students to complete tutorials, practice exams, and reviews to prepare for their NCLEX certification exam.",
      services: ["Conceptual Design", "Interaction Design", "Responsive Web Design", "Prototyping"],
      technologies: ["Web technologies", "Mobile responsive design"],
      images: [ATINursingImg, ATICardsImg, ATILoopImg, ATIGraphsImg],
      deliverables: ["Sitemap", "Content Inventory", "Wireframes", "Responsive Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Users",
            content: `Nursing students use ATI's products to study and gauge their readiness the NCLEX board exam.`
          },
          {
            title: "Problem",
            content: `Improve user engagement, accommodate mobile use and support easy access to assessments, tools and content.`
          },
          {
            title: "Process",
            content: `I worked on several ATI products over several years with Useagility. We conducted user research to understand user needs and developed a base design to meet those needs for the first product we worked on and then replicated similar designs across other products in their product family. I was the lead UX designer for the first product geared towards students and several of the subsequent products geared towards students, faculty, and ATI coaches.`
          },
          {
            title: "Solution",
            content: `• A card-based design that emphasized the learning loop made it easier for users to understand how to navigate the pieces of the product on a variety of devices.
• Visuals to indicate how far the student is along the process towards being ready for the NCLEX exam.`
          },
          {
            title: "Screens",
            content: `#### Homepage
The homepage featured a card-based design that emphasized the learning loop, making it easier for users to understand how to navigate the pieces of the product on a variety of devices.

IMAGE:ATICardsImg:Homepage with cards and the learning loop

#### Learning Loop Progress
Visual indicators showed how far the student is along the process towards being ready for the NCLEX exam.

IMAGE:ATILoopImg:Learning loop progress indicators

#### Readiness Assessment
Graphs and visual indicators to show student readiness using clear data visualization.

IMAGE:ATIGraphsImg:Readiness assessment graphs and visual indicators`
          },
          {
            title: "Results",
            content: `As a result of our work, ATI saw student outcomes improve, along with an expanded client base, greater engagement with educational material and significant increases in time spent with educational materials.`
          }
        ]
      }
    },
    "planit-impact": {
      id: "planit-impact",
      title: "PlanIt Impact Architecture Reporting Tool", 
      client: "PlanIt Impact",
      category: "consulting",
      year: "2020",
      status: "Completed",
      duration: "Consulting project",
      role: "Lead Designer",
      description: "Design for a new product to allow architects and city planners to evaluate the environmental impact of their designs.",
      services: ["Interaction Design", "Responsive Web Design", "Prototyping"],
      technologies: ["Analytics platform", "Data integration"],
      images: [PlanItImpactImg, PlanItHomepageImg, PlanItComparisonImg],
      deliverables: ["Workflow Diagrams", "Wireframes", "Responsive Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Users",
            content: `Architects and city planners use the PlanIt Impact to evaluate the environmental impact of their designs.`
          },
          {
            title: "Problem",
            content: `Simplify a complex process to integrate open sustainability data with third-party structural design applications, making it easy for users to assess – and share – the environmental impacts of their designs.`
          },
          {
            title: "Process",
            content: `With my teammates at Useagility, we interviewed several users to learn about what their needs were and did a few iterations on the design before it was built by their internal developers. I was the lead designer and responsible for conceptual and detailed design for each iteration.`
          },
          {
            title: "Solution",
            content: `• Responsive web application that imports files from architectural software to evaluate sustainability of a design.
• Allows users to compare sustainability across multiple design options.`
          },
          {
            title: "Screens",
            content: `#### Homepage (mobile)
IMAGE:PlanItHomepageImg:Mobile homepage for the PlanIt Impact application

#### Comparison report
IMAGE:PlanItComparisonImg:Report comparing multiple designs for environmental impact analysis`
          },
          {
            title: "Results",
            content: `The final step prior to development was to incorporate the results of the concept testing into a fully-functioning prototype, including data integration and visualizations, then test it with users again. In this stage, we validated the responsive and adaptive features we designed for mobile devices and ensured the data visualizations were clear and intuitive.`
          }
        ]
      }
    },
    "pomco-emergency": {
      id: "pomco-emergency",
      title: "POMCO Emergency Alert System",
      client: "POMCO",
      category: "consulting",
      year: "2020",
      status: "Completed",
      duration: "Consulting project",
      role: "Lead Designer",
      description: "Redesign of a mobile app with bluetooth connected device used by students to alert campus security when they are in an emergency situation. Also redesigned dispatcher dashboard and the flow between the two users.",
      services: ["Service Design", "Interaction Design", "Prototyping"],
      technologies: ["Mobile app", "Bluetooth integration", "Emergency systems"],
      images: [POMCOEmergencyImg, POMCOBeforeImg, POMCOAfterImg, POMCODeviceImg, POMCOFlowImg],
      deliverables: ["Workflow Diagrams", "Wireframes", "Mobile Prototype", "Quick Start Guide"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Users",
            content: `College students who want peace of mind when walking alone on campus.`
          },
          {
            title: "Problem",
            content: `POMCO provides personal safety tools utilizing a key-chain device linked to a mobile app for college students living on campus. In order to enable students to make an emergency call to campus security with the push of a button, the POMCO team needed a more user-friendly process to get students up and running quickly.

The POMCO team needed help educating students about their personal safety device and app as well as designing an intuitive user interface for campus security dispatchers to use when receiving an emergency call from students.`
          },
          {
            title: "Solution",
            content: `Using thorough end-to-end process analysis for both online and offline POMCO components, Useagility distilled the set-up process and tested it by simulating real-world campus safety situations before updating the front- and back-end web site and app and designing a quick-start guide especially for students. I was the lead designer on the project.`
          },
          {
            title: "Screens",
            content: `#### Before
IMAGE:POMCOBeforeImg:Student mobile app and dispatcher page before the redesign

#### After
IMAGE:POMCOAfterImg:Student mobile app and dispatcher page after the redesign

IMAGE:POMCODeviceImg:Student mobile app and keychain device integration

#### User flow
IMAGE:POMCOFlowImg:Complete user flow showing the emergency alert process`
          }
        ]
      }
    },
    "zumba-instructor": {
      id: "zumba-instructor",
      title: "Zumba Instructor Network Portal",
      client: "Zumba Fitness",
      category: "Fitness",
      year: "2020", 
      status: "Completed",
      duration: "Consulting project",
      role: "UX Designer",
      description: "Redesign of the Zumba Instructor Network portal.",
      services: ["Content Inventory", "Template Design", "Information Architecture", "Collaboration with Visual Designers"],
      technologies: ["Web portal"],
      images: [ZumbaInstructorImg],
      deliverables: ["Content Inventory", "Screen Templates", "Wireframes", "Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Users had difficulty navigating the portal for instructors.
• The layout on screens within the portal was inconsistent and difficult to understand.`
          },
          {
            title: "Process",
            content: `• Inventory existing screens
• Design screen templates
• Apply templates to screens
• Design navigation menu
• Review comps
• Create prototype from comps for usability study`
          },
          {
            title: "Solution",
            content: `• Templatized the screens within the portal.
• Added a navigation menu to make it easier to find content.`
          },
          {
            title: "Edit Account Screen",
            content: `#### Before
IMAGE:ZumbaAccountBeforeImg:Edit Account screen before redesign showing inconsistent layout

#### After  
IMAGE:ZumbaAccountAfterImg:Edit Account screen after redesign with improved template and navigation`
          },
          {
            title: "Training History Screen", 
            content: `#### Before
IMAGE:ZumbaTrainingBeforeImg:Training History screen before redesign showing poor information hierarchy

#### After
IMAGE:ZumbaTrainingAfterImg:Training History screen after redesign with better organization and template consistency`
          }
        ]
      }
    },
    "block-mobile": {
      id: "block-mobile",
      title: "Block Mobile",
      client: "H&R Block",
      category: "Finance",
      year: "2014",
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "Redesign of H&R Block's mobile retail office customer management app to allow for logging into an account, uploading documents, and viewing tax returns.",
      services: ["Conceptual Design", "Interaction Design", "Service Design", "Collaboration with Visual Designers and Vendors", "Prototyping"],
      technologies: ["Mobile app"],
      images: [],
      deliverables: ["Wireframes", "Workflow Diagrams", "Mobile Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Revamp the existing phone app to add new functionality for uploading documents, viewing prior years returns, and logging into an account.
• Ensure consistency across platforms for the new functionality - i.e. if a user logs into an account to upload a document from the mobile app, the experience should be consistent with how it works online.
• Fix usability issues with the existing app.`
          },
          {
            title: "Process",
            content: `• Collaborate on user stories and create storyboards
• Define workflow and screen design options
• Evaluate concepts with stakeholders and iterate design
• Start detailed design and build Axure prototype
• Test high fidelity prototype with users and iterate design
• Work through detailed design with product team
• Review visual design with vendor
• Work with vendor to conduct usability study on build
• Iterate design based on findings`
          },
          {
            title: "Solution",
            content: `• Redesigned basic information architecture of the app to incorporate the new functionality.
• Designed interactions for the new functionality.
• Fixed known usability issues.
• Enabled direct action to be taken on the Home screen for common user tasks.`
          },
          {
            title: "Home Screen",
            content: `#### Before
IMAGE:HRBMobileBeforeImg:Home screen before redesign showing cluttered layout

#### After
IMAGE:HRBMobileAfterImg:Home screen after redesign with improved organization and direct actions`
          },
          {
            title: "Document Upload Screens (New Feature)",
            content: `IMAGE:HRBMobilePhoto1Img:First screen of new document upload feature

IMAGE:HRBMobilePhoto2Img:Second screen of new document upload feature`
          },
          {
            title: "Results",
            content: `Designs performed well in usability studies.`
          }
        ]
      }
    },
    "block-mobile-ipad": {
      id: "block-mobile-ipad", 
      title: "Block Mobile iPad App",
      client: "H&R Block",
      category: "Finance",
      year: "2014",
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "Optimize the redesigned mobile app for iPad.",
      services: ["Conceptual Design", "Interaction Design", "Adaptive Design", "Collaboration with Visual Designers and Vendors", "Prototyping"],
      technologies: ["iPad app"],
      images: [],
      deliverables: ["Wireframes", "Workflow Diagrams", "Mobile Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `Create a version of the Block Mobile app optimized for the iPad.`
          },
          {
            title: "Process",
            content: `• Evaluate phone functionality for iPad
• Define workflow and screen design options
• Evaluate concepts with stakeholders and iterate design
• Start detailed design and build Axure prototype
• Test high fidelity prototype with users and iterate design
• Work through detailed design with product team
• Review visual design with vendor
• Work with vendor to conduct usability study on build
• Iterate design based on findings`
          },
          {
            title: "Solution",
            content: `Improved organization and layout of features to take advantage of the real estate and functionality available on the iPad.`
          },
          {
            title: "Home Screen",
            content: `IMAGE:HRBiPadHomeImg:iPad home screen showing optimized layout for tablet`
          },
          {
            title: "Find an Office",
            content: `IMAGE:HRBiPadPhoto1Img:Find an Office screen optimized for iPad interface`
          },
          {
            title: "Tax Estimator",
            content: `IMAGE:HRBiPadPhoto2Img:First Tax Estimator screen on iPad

IMAGE:HRBiPadPhoto3Img:Second Tax Estimator screen showing calculations

IMAGE:HRBiPadPhoto4Img:Third Tax Estimator screen with results display`
          },
          {
            title: "Results",
            content: `Designs performed well in usability studies.`
          }
        ]
      }
    },
    "taxcut-support": {
      id: "taxcut-support",
      title: "TaxCut Support Site",
      client: "H&R Block",
      category: "Finance", 
      year: "2011",
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "Project to reduce call volume to the support center.",
      services: ["Information Architecture", "Series of Card Sorts", "Content Inventory", "Usability Studies"],
      technologies: ["Support website"],
      images: [],
      deliverables: ["Content Inventory", "Sitemap", "Wireframes"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• We had been asking our customers to tell us which of four support providers they needed. Users didn't understand how we'd structured our support organization, they only knew what was preventing them from finishing their taxes.
• The site presented vaguely labeled, redundant content, such as FAQs and Q&A, which made it difficult to discern where to go find the content users were seeking.
• The primary means for accessing content was through a search that didn't provide relevant results and we were unable to customize to improve.
• All contact information was removed from products and users were required to view a self-help article prior to viewing contact information.`
          },
          {
            title: "Process",
            content: `• Evaluate business requirements and existing data
• Content inventory of existing content
• Open card sort
• Closed card sort
• New information architecture design
• Wireframe of page templates`
          },
          {
            title: "Solution",
            content: `• A topical browse view that visually communicates the organization of the support content based on a series of card sorts conducted with users.
• Elimination of most of the redundant Customer Support content.
• Rewrites of KB articles and titles to better match the user's understanding of issues.
• Development of a methodical approach to content maintenance based on user evaluation and data analysis.`
          },
          {
            title: "Main Customer Support Page",
            content: `#### Before
IMAGE:TaxCutSupportBeforeImg:Customer Support page before redesign showing confusing organization

#### After
IMAGE:TaxCutSupportAfterImg:Customer Support page after redesign with improved topical browse view`
          },
          {
            title: "Results",
            content: `• Two usability tests and one summative card sort validated the browse view design. Users easily scanned for the article they needed to solve their issues.
• Significantly decreased contact volume to the support center, saving $1 million in the first year.`
          }
        ]
      }
    },
    "taxcut-welcome": {
      id: "taxcut-welcome",
      title: "TaxCut Welcome Sequence", 
      client: "H&R Block",
      category: "Finance",
      year: "2011",
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "Project to reduce confusion around creating multiple tax returns.",
      services: ["Data Analysis", "Interaction Design", "Usability Study"],
      technologies: ["Tax software"],
      images: [],
      deliverables: ["Functional Requirements", "Workflow Diagram", "Wireframes", "Functional Specification"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Users were overwriting returns because they didn't know how to start a new return.
• Users were creating multiple copies of a return and checking e-file status from a copy that wasn't sent.
• Getting started took more steps than necessary.
• The process for new and returning users was the same.
• Importing a prior year return took more steps than necessary.
• Update availability information was not readily available before beginning a return.`
          },
          {
            title: "Process",
            content: `• Evaluate business requirements and existing data
• Define workflow and screen design options
• Review design options with stakeholders and iterate design
• Refine design to meet stakeholder needs
• Test high fidelity prototype with users and iterate design
• Solidify and specify design for dev
• Summative usability study on build and iterate
• Monitory contacts related to original issue`
          },
          {
            title: "Solution",
            content: `• Single Welcome screen that isn't tied to a return and lists out available returns and other important information, such as update availability.
• Shortened import process that displays available returns to import, since 60% of users import.
• Update functionality available outside of return preparation task.`
          },
          {
            title: "Welcome & Update Prompt",
            content: `#### Before
IMAGE:TaxCutWelcomeBeforeImg:Welcome screen before redesign showing complex process

IMAGE:TaxCutWelcomeUpdateBeforeImg:Update screen before redesign

#### After
IMAGE:TaxCutWelcomeAfterImg:Welcome screen after redesign with simplified single-screen approach`
          },
          {
            title: "Import Screens",
            content: `#### Before
IMAGE:TaxCutWelcomeImport1BeforeImg:First import screen before redesign showing multiple steps

IMAGE:TaxCutWelcomeImport2BeforeImg:Second import screen before redesign showing complex flow

#### After
IMAGE:TaxCutWelcomeImportAfterImg:Import screen after redesign with shortened process and available returns display`
          },
          {
            title: "Results",
            content: `• Reduced user confusion around creating multiple tax returns
• Simplified the getting started process with fewer steps
• Improved import functionality usage with streamlined workflow`
          }
        ]
      }
    },
    "taxcut-support-reports": {
      id: "taxcut-support-reports",
      title: "TaxCut Support Reports",
      client: "H&R Block",
      category: "Finance",
      year: "2010", 
      status: "Completed",
      duration: "Corporate project",
      role: "UX Designer",
      description: "Redesign of support reports to make it easier to track issues, find new user requirements, and evaluate implemented designs.",
      services: ["Data Analysis", "Information Architecture", "Card Sorting"],
      technologies: ["Internal reporting system"],
      images: [],
      deliverables: ["Report Templates", "Reporting Structure"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• We had a difficult time identifying user issues that should be fixed in the product.
• Multiple reports had to be reconciled to determine what the issues were and the severity of the issues.
• We couldn't get a holistic view of the issues.`
          },
          {
            title: "Issue Identification Process",
            content: `IMAGE:TaxCutReportsBeforeImg:Issue identification process before redesign showing multiple disconnected reports`
          },
          {
            title: "Solution",
            content: `Combine 5 reports into one.

IMAGE:TaxCutReportsAfterImg:Combined reporting structure showing how multiple reports were integrated into one comprehensive view`
          },
          {
            title: "Combining Reports Benefits",
            content: `#### Combining reports allowed us to:
• Understand the total number of users who experience an issue.
• Take action on the issues in the report.
• Clearly see the effect that posting a given write-up has on volume.
• Identify trends in volume.
• Identify high-volume issues that need to be fixed.

#### How I got to one report:
• Conducted a card sort with support agents to get accurate categorizations.
• Tied knowledgebase articles to the categories agents use.
• Developed a plan for ongoing maintenance of categories as new issues arise.`
          },
          {
            title: "Results",
            content: `• Increased accuracy of support data.
• Better understanding of exactly what issues users experience.
• Improvements to the product.
• Also helps QA troubleshoot technical issues.`
          }
        ]
      }
    },
    "deductionpro-donations": {
      id: "deductionpro-donations",
      title: "DeductionPro Donations",
      client: "H&R Block",
      category: "Finance",
      year: "2010",
      status: "Completed", 
      duration: "Corporate project",
      role: "UX Designer",
      description: "Project to clear up user issues with data entry workflow in H&R Block's deduction tracking software.",
      services: ["Data Analysis", "Interaction Design", "Usability Study", "Usability Walkthrough"],
      technologies: ["Deduction tracking software"],
      images: [],
      deliverables: ["Functional Requirements", "Workflow Diagram", "Wireframes", "Functional Specification"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• Users who donated more than one type of item to a charity had to enter each item individually on a separate line.
• Users didn't understand what the Details button was for or how to access the details required for donations over $500.`
          },
          {
            title: "Process",
            content: `• Evaluate business requirements and existing data
• Define workflow and screen design options
• Review design options with stakeholders and iterate design
• Refine design to meet stakeholder needs
• Solidify and specify design for dev
• Summative usability study on build and iterate
• Monitory contacts related to original issue`
          },
          {
            title: "Solution",
            content: `• Added the ability to enter a series of items for each trip to a charity.
• Clarified the detail entry process.`
          },
          {
            title: "Donation Entry Screens",
            content: `#### Before
IMAGE:DProBefore1Img:First donation entry screen before redesign showing single-item workflow

#### After
IMAGE:DProAfter1Img:First donation entry screen after redesign with improved multiple-item capability

IMAGE:DProAfter2Img:Second donation entry screen showing enhanced detail entry process

IMAGE:DProAfter3Img:Third donation entry screen with clarified details functionality`
          },
          {
            title: "Results",
            content: `A summative usability study and walkthrough confirmed reduced confusion over the details and increased time to enter noncash donations.`
          }
        ]
      }
    },
    "llbean-responsive-email": {
      id: "llbean-responsive-email",
      title: "L.L.Bean Responsive Email",
      client: "L.L.Bean",
      category: "Retail",
      year: "2015",
      status: "Completed",
      duration: "Contract project", 
      role: "UX Designer",
      description: "Redesign of L.L.Bean's transactional emails to make them responsive.",
      services: ["Responsive Email Design", "Interaction Design", "Collaboration with Visual Designers", "Prototyping"],
      technologies: ["Email templates"],
      images: [],
      deliverables: ["Wireframes", "Responsive Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `Users viewing L.L.Bean transactional emails on their phones had a difficult time reading the contents of the email.`
          },
          {
            title: "Process",
            content: `• Evaluate business requirements and existing data
• Define screen design options for all breakpoints
• Review design options with stakeholders
• Iterate design based on feedback (several times)
• Finalize approach and work through details
• Review and provide feedback on visual design comps
• Collaborate with project team in comp reviews and iterate design`
          },
          {
            title: "Solution",
            content: `• Responsified existing emails and incorporated new business requirements related to matching transactional emails to the llbean.com order summary screen.`
          },
          {
            title: "Transactional Email Screens",
            content: `#### Mobile
IMAGE:LLBEmailMobileImg:Transactional email optimized for mobile viewing

#### Desktop
IMAGE:LLBEmailDesktopImg:Transactional email designed for desktop viewing`
          }
        ]
      }
    },
    "hallmark-baby": {
      id: "hallmark-baby",
      title: "Hallmark Baby Responsive E-Commerce Site",
      client: "Hallmark",
      category: "E-Commerce",
      year: "2016",
      status: "Completed",
      duration: "Consulting project",
      role: "UX Designer", 
      description: "New responsive site built using Demandware. Translated Demandware specifications to Hallmark Baby's domain.",
      services: ["Interaction Design", "Responsive Web Design"],
      technologies: ["Demandware platform"],
      images: [],
      deliverables: ["Wireframes", "Responsive Prototype"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Users",
            content: `Online shoppers who are purchasing clothing for babies.`
          },
          {
            title: "Problem", 
            content: `Hallmark is more than a greeting card company – it's a brand engaging customers emotionally with a variety of digital and tangible products.

When Hallmark needed an upscale ecommerce site for Hallmark Baby, Useagility customized their Demandware ecommerce platform to deliver an engaging and efficient customer shopping experience.`
          },
          {
            title: "Process",
            content: `I worked in tandem with another designer on this project. The other designer designed the desktop wireframes and I adapted the responsive designs for other viewport sizes. We used Demandware's extensive documentation and templates to ensure the designs could be implemented using their framework.`
          },
          {
            title: "Solution",
            content: `Useagility worked closely with the Hallmark Baby team to understand their goals for the shopping experience before exploring the capabilities of the Demandware solution and creating customized responsive wireframes and prototypes using Axure.

Defining desired workflows and functionality through clickable prototypes gives development teams like Hallmark Baby's clear specifications for what they should build, allowing quick site implementation to capitalize on brand momentum in other markets.`
          },
          {
            title: "Product Selection Page",
            content: `#### Wireframe
IMAGE:HallmarkWireThumbnailImg:Wireframe of the product selection page showing layout and functionality

#### Implementation  
IMAGE:HallmarkFinalThumbnailImg:Final implemented product selection page showing the completed design`
          },
          {
            title: "Product Detail Page",
            content: `#### Wireframe
IMAGE:HallmarkWireProductImg:Wireframe of the product detail page showing responsive layout

#### Implementation
IMAGE:HallmarkFinalProductImg:Final implemented product detail page with complete functionality`
          }
        ]
      }
    },
    "city-year-redesign": {
      id: "city-year-redesign",
      title: "City Year Redesign",
      client: "City Year",
      category: "Nonprofit",
      year: "2015",
      status: "Completed",
      duration: "Consulting project",
      role: "UX Designer",
      description: "Redesign of the City Year website.",
      services: ["Expert Review", "Card Sort", "Interaction Design"],
      technologies: ["Website"],
      images: [],
      deliverables: ["Expert Review Findings", "Sitemap", "Workflow Diagram", "Wireframes"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• The site was confusing and overwhelming for users.
• Users didn't know where to start or where to go for specific information.
• Subsites, such as the Application and Donation processes were confusing, as well, and buried within the main site.`
          },
          {
            title: "Process",
            content: `• Expert review
• Current sitemap analysis
• Card sort
• Revised sitemap
• Wireframes & page templates
• Summative usability study`
          },
          {
            title: "Solution",
            content: `• Revised information architecture to match card sort results.
• Standardized page layouts.
• Reworked subsites and processes to clarify purpose and process.
• Reorganized application process into logical groupings to make it clear what needs to be done and in what order it will be done.
• Made it clear that the user is in the application by taking away the site navigation.`
          },
          {
            title: "Registration Screen",
            content: `#### Before
IMAGE:CityYearBeforeImg:Registration screen before the redesign showing confusing layout

#### After
IMAGE:CityYearAfterImg:Registration screen after redesign with improved clarity and organization`
          },
          {
            title: "Application Process",
            content: `#### Before
IMAGE:CityYearAppBeforeImg:Application screen before redesign showing poor information hierarchy

#### After
IMAGE:CityYearAppAfterImg:Application screen after redesign with logical grouping and clear process flow`
          },
          {
            title: "Results",
            content: `Summative usability study confirmed an improved experience.`
          }
        ]
      }
    },
    "cruises-only": {
      id: "cruises-only",
      title: "Cruises Only",
      client: "Cruises Only",
      category: "Travel",
      year: "2014",
      status: "Completed",
      duration: "Consulting project",
      role: "UX Designer",
      description: "Project to restructure the navigation and create page templates.",
      services: ["Sitemap Analysis", "Information Architecture"],
      technologies: ["Travel website"],
      images: [],
      deliverables: ["Sitemap", "Wireframes", "Screen Templates"],
      liveUrl: undefined,
      content: {
        sections: [
          {
            title: "Problem",
            content: `• A new client wasn't satisfied with the organization of the ship information pages on Cruises Only's site, so they requested a redesign before they would use the service.
• The information architecture wasn't intuitive.
• Users weren't able to easily drill down into detailed information they were looking for.
• Users couldn't easily scan pages to find information they were looking for.`
          },
          {
            title: "Process",
            content: `• Current sitemap analysis
• Revised sitemap
• Wireframes & page templates`
          },
          {
            title: "Solution",
            content: `• Revised the information architecture to match common user tasks.
• Changed the layout of pages to enable easy scanning and drilling.
• Templatized the pages for use with all of their clients.`
          },
          {
            title: "Information Architecture",
            content: `#### Before
IMAGE:CruisesOnlyIABeforeImg:Information architecture before redesign showing complex hierarchy

#### After
IMAGE:CruisesOnlyIAAfterImg:Information architecture after redesign with improved organization`
          },
          {
            title: "Informational Page",
            content: `#### Before
IMAGE:CruisesOnlyInfoBeforeImg:Informational screen before redesign showing poor layout

#### After
IMAGE:CruisesOnlyInfoAfterImg:Informational screen after redesign with improved scanning and drilling`
          },
          {
            title: "Drill Down Page",
            content: `Replaced a long scrolling page.

IMAGE:CruisesOnlyDrillDownImg:Drill down screen after redesign showing improved organization`
          },
          {
            title: "Results",
            content: `• The client was satisfied with the redesigned pages.
• Summative usability study confirmed that the redesigned pages are easier to use.`
          }
        ]
      }
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Link to="/" className="text-primary hover:text-primary-light">
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <button onClick={navigateToPortfolio} className="text-primary hover:text-primary/80 transition-colors">
                    Portfolio
                  </button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Project Header */}
          <div className="mb-12">
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground font-medium mb-6">
              {project.client}
            </p>

            <div className="text-sm">
              {project.liveUrl && (
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      {project.id === "tax-data-visualization" ? "Read an article about this project" : "View Live Project"}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-2">
              {/* Project Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>

              {/* Project Content Sections */}
              {project.content?.sections?.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {/* Check if content contains markdown headers or IMAGE markers */}
                      {section.content.includes('###') || section.content.includes('IMAGE:') ? (
                        // Process content with markdown headers or IMAGE markers
                        (() => {
                          console.log('Section content:', section.content);
                          
                          // First check if there are any IMAGE markers not inside ### sections
                          const contentParts = section.content.split(/(?=###)/g);
                          console.log('Content parts:', contentParts);
                          
                          return contentParts.map((part, partIndex) => {
                            if (part.trim().startsWith('###')) {
                              const lines = part.trim().split('\n');
                              const title = lines[0].replace('###', '').trim();
                              const contentLines = lines.slice(1);
                              
                              // Separate regular content from IMAGE markers
                              const regularContent = [];
                              const imageMarkers = [];
                              
                              contentLines.forEach(line => {
                                if (line.trim().startsWith('IMAGE:')) {
                                  imageMarkers.push(line.trim());
                                } else if (line.trim()) {
                                  regularContent.push(line);
                                }
                              });
                              
                              const content = regularContent.join('\n').trim();
                              
                              return (
                                <div key={partIndex} className="space-y-3">
                                   {title && <h3 className="text-lg font-semibold text-foreground">{title}</h3>}
                                   {content && (
                                     <div className="text-muted-foreground leading-relaxed">
                                       {renderContentWithLinks(content)}
                                     </div>
                                   )}
                                  {/* Render images for this subheading */}
                                  {imageMarkers.map((imageMarker, imgIndex) => {
                                    console.log('Processing image marker:', imageMarker);
                                    const [, imageName, caption] = imageMarker.match(/IMAGE:(\w+):(.+)/) || [];
                                    console.log('Parsed imageName:', imageName, 'caption:', caption);
                                    if (imageName && caption) {
                                        // Map image names to actual imports
                                        const imageMap = {
                                          'DOLR1Before': DOLR1Before,
                                          'DOLr1After': DOLr1After,
                                          'DOLr2': DOLr2,
                                          'DOLFinal': DOLFinal,
                                          'ONRRDreamweaverImg': ONRRDreamweaverImg,
                                          'ONRRHomeNewImg': ONRRHomeNewImg,
                                          'ONRRPersonaTrianglesImg': ONRRPersonaTrianglesImg,
                                          'ONRRNRRDBeforeImg': ONRRNRRDBeforeImg,
                                          'ONRRFilter1Img': ONRRFilter1Img,
                                          'ONRRFilter2Img': ONRRFilter2Img,
                                          'ONRRFilter3Img': ONRRFilter3Img,
                                          'ONRRFilterBuiltImg': ONRRFilterBuiltImg,
                                          'NRRDPortalImg': NRRDPortalImg,
                                         'MaineBallotImg': MaineBallotImg,
                                         'EZMainImg': EZMainImg,
                                         'EZIncomeImg': EZIncomeImg,
                                         'EZPhotoImg': EZPhotoImg,
                                         'TDVProcessImg': TDVProcessImg,
                                         'TDVExample1Img': TDVExample1Img,
                                         'iPadFlowImg': iPadFlowImg,
                                         'iPadMainImg': iPadMainImg,
                                         'iPadPortraitImg': iPadPortraitImg,
                                         'BLProcessImg': BLProcessImg,
                                         'BlockLiveHowItWorksImg': BlockLiveHowItWorksImg,
                                         'LLBResponsiveFlowImg': LLBResponsiveFlowImg,
                                         'LLBPortraitImg': LLBPortraitImg,
                                         'LLBLandscapeImg': LLBLandscapeImg,
                                          'LLBDesktopImg': LLBDesktopImg,
                                           'LLBCustomizationDesktopImg': LLBCustomizationDesktopImg,
                                           'LLBCustomizationPortraitImg': LLBCustomizationPortraitImg,
                                           'LLBCustomizationFlowImg': LLBCustomizationFlowImg,
                                          'LLBeanCustomizationImg': LLBeanCustomizationImg,
                                          'LLBeanAccountImg': LLBeanAccountImg,
                                          'LLBAccountMobileImg': LLBAccountMobileImg,
                                          'LLBAccountFlowImg': LLBAccountFlowImg,
                                          'LLBAccountBeforeImg': LLBAccountBeforeImg,
                                          'LLBAccountDesktopImg': LLBAccountDesktopImg,
                                          'LLBAccountPortraitImg': LLBAccountPortraitImg,
                                          'ATINursingImg': ATINursingImg,
                                          'ATICardsImg': ATICardsImg,
                                          'ATILoopImg': ATILoopImg,
                                          'ATIGraphsImg': ATIGraphsImg,
                                          'PlanItImpactImg': PlanItImpactImg,
                                          'PlanItHomepageImg': PlanItHomepageImg,
                                          'PlanItComparisonImg': PlanItComparisonImg,
                                          'POMCOEmergencyImg': POMCOEmergencyImg,
                                          'POMCOBeforeImg': POMCOBeforeImg,
                                          'POMCOAfterImg': POMCOAfterImg,
                                          'POMCODeviceImg': POMCODeviceImg,
                                          'POMCOFlowImg': POMCOFlowImg,
                                          'ZumbaInstructorImg': ZumbaInstructorImg,
                                          'ZumbaFlowImg': ZumbaFlowImg,
                                          'ZumbaAccountBeforeImg': ZumbaAccountBeforeImg,
                                          'ZumbaAccountAfterImg': ZumbaAccountAfterImg,
                                          'ZumbaTrainingBeforeImg': ZumbaTrainingBeforeImg,
                                          'ZumbaTrainingAfterImg': ZumbaTrainingAfterImg,
                                          'HallmarkWireThumbnailImg': HallmarkWireThumbnailImg,
                                          'HallmarkFinalThumbnailImg': HallmarkFinalThumbnailImg,
                                          'HallmarkWireProductImg': HallmarkWireProductImg,
                                          'HallmarkFinalProductImg': HallmarkFinalProductImg,
                                          'CityYearFlowImg': CityYearFlowImg,
                                          'CityYearBeforeImg': CityYearBeforeImg,
                                          'CityYearAfterImg': CityYearAfterImg,
                                          'CityYearAppBeforeImg': CityYearAppBeforeImg,
                                          'CityYearAppAfterImg': CityYearAppAfterImg,
                                          'LLBEmailProcessImg': LLBEmailProcessImg,
                                          'LLBEmailMobileImg': LLBEmailMobileImg,
                                          'LLBEmailDesktopImg': LLBEmailDesktopImg,
                                          'HRBMobileProcessImg': HRBMobileProcessImg,
                                          'HRBMobileBeforeImg': HRBMobileBeforeImg,
                                          'HRBMobileAfterImg': HRBMobileAfterImg,
                                          'HRBMobilePhoto1Img': HRBMobilePhoto1Img,
                                          'HRBMobilePhoto2Img': HRBMobilePhoto2Img,
                                          'CruisesOnlyProcessImg': CruisesOnlyProcessImg,
                                          'CruisesOnlyIABeforeImg': CruisesOnlyIABeforeImg,
                                          'CruisesOnlyIAAfterImg': CruisesOnlyIAAfterImg,
                                          'CruisesOnlyInfoBeforeImg': CruisesOnlyInfoBeforeImg,
                                          'CruisesOnlyInfoAfterImg': CruisesOnlyInfoAfterImg,
                                          'CruisesOnlyDrillDownImg': CruisesOnlyDrillDownImg,
                                          'HRBiPadProcessImg': HRBiPadProcessImg,
                                          'HRBiPadHomeImg': HRBiPadHomeImg,
                                          'HRBiPadPhoto1Img': HRBiPadPhoto1Img,
                                          'HRBiPadPhoto2Img': HRBiPadPhoto2Img,
                                          'HRBiPadPhoto3Img': HRBiPadPhoto3Img,
                                          'HRBiPadPhoto4Img': HRBiPadPhoto4Img,
                                          'TaxCutSupportProcessImg': TaxCutSupportProcessImg,
                                          'TaxCutSupportBeforeImg': TaxCutSupportBeforeImg,
                                          'TaxCutSupportAfterImg': TaxCutSupportAfterImg,
                                          'TaxCutWelcomeProcessImg': TaxCutWelcomeProcessImg,
                                          'TaxCutWelcomeBeforeImg': TaxCutWelcomeBeforeImg,
                                          'TaxCutWelcomeUpdateBeforeImg': TaxCutWelcomeUpdateBeforeImg,
                                          'TaxCutWelcomeAfterImg': TaxCutWelcomeAfterImg,
                                          'TaxCutWelcomeImport1BeforeImg': TaxCutWelcomeImport1BeforeImg,
                                          'TaxCutWelcomeImport2BeforeImg': TaxCutWelcomeImport2BeforeImg,
                                          'TaxCutWelcomeImportAfterImg': TaxCutWelcomeImportAfterImg,
                                          'TaxCutReportsBeforeImg': TaxCutReportsBeforeImg,
                                          'TaxCutReportsAfterImg': TaxCutReportsAfterImg,
                                          'DProProcessImg': DProProcessImg,
                                          'DProBefore1Img': DProBefore1Img,
                                          'DProAfter1Img': DProAfter1Img,
                                          'DProAfter2Img': DProAfter2Img,
                                          'DProAfter3Img': DProAfter3Img
                                       };
                                       const imageSrc = imageMap[imageName as keyof typeof imageMap];
                                       console.log('Looking for image:', imageName, 'Found image source:', imageSrc);
                                      
                                      if (imageSrc) {
                                        return (
                                          <div key={imgIndex} className="space-y-2 mt-4">
                                            <div className="rounded-lg overflow-hidden bg-muted max-w-2xl mx-auto">
                                              <img 
                                                src={imageSrc} 
                                                alt={`${title} screenshot`}
                                                className="w-full h-auto"
                                              />
                                            </div>
                                            <p className="text-sm text-muted-foreground italic text-center">
                                              {caption}
                                            </p>
                                          </div>
                                        );
                                      } else {
                                        console.log('No image source found for:', imageName);
                                      }
                                    }
                                    return null;
                                  })}
                                </div>
                              );
                            } else if (part.trim()) {
                              // Handle content that contains IMAGE markers but no ###
                              const lines = part.trim().split('\n');
                              const regularContent = [];
                              const imageMarkers = [];
                              
                              lines.forEach(line => {
                                if (line.trim().startsWith('IMAGE:')) {
                                  imageMarkers.push(line.trim());
                                } else if (line.trim()) {
                                  regularContent.push(line);
                                }
                              });
                              
                              const content = regularContent.join('\n').trim();
                              
                              return (
                                <div key={partIndex} className="space-y-3">
                                   {content && (
                                     <div className="text-muted-foreground leading-relaxed">
                                       {renderContentWithLinks(content)}
                                     </div>
                                   )}
                                  {/* Render images */}
                                  {imageMarkers.map((imageMarker, imgIndex) => {
                                    console.log('Processing image marker (no header):', imageMarker);
                                    const [, imageName, caption] = imageMarker.match(/IMAGE:(\w+):(.+)/) || [];
                                    console.log('Parsed imageName (no header):', imageName, 'caption:', caption);
                                    if (imageName && caption) {
                                        // Map image names to actual imports
                                        const imageMap = {
                                          'DOLR1Before': DOLR1Before,
                                          'DOLr1After': DOLr1After,
                                          'DOLr2': DOLr2,
                                          'DOLFinal': DOLFinal,
                                          'ONRRDreamweaverImg': ONRRDreamweaverImg,
                                          'ONRRHomeNewImg': ONRRHomeNewImg,
                                          'ONRRPersonaTrianglesImg': ONRRPersonaTrianglesImg,
                                          'ONRRNRRDBeforeImg': ONRRNRRDBeforeImg,
                                          'ONRRFilter1Img': ONRRFilter1Img,
                                          'ONRRFilter2Img': ONRRFilter2Img,
                                          'ONRRFilter3Img': ONRRFilter3Img,
                                          'ONRRFilterBuiltImg': ONRRFilterBuiltImg,
                                          'NRRDPortalImg': NRRDPortalImg,
                                         'MaineBallotImg': MaineBallotImg,
                                         'EZMainImg': EZMainImg,
                                         'EZIncomeImg': EZIncomeImg,
                                         'EZPhotoImg': EZPhotoImg,
                                         'TDVProcessImg': TDVProcessImg,
                                         'TDVExample1Img': TDVExample1Img,
                                         'iPadFlowImg': iPadFlowImg,
                                         'iPadMainImg': iPadMainImg,
                                         'iPadPortraitImg': iPadPortraitImg,
                                         'BLProcessImg': BLProcessImg,
                                         'BlockLiveHowItWorksImg': BlockLiveHowItWorksImg,
                                         'LLBResponsiveFlowImg': LLBResponsiveFlowImg,
                                         'LLBPortraitImg': LLBPortraitImg,
                                         'LLBLandscapeImg': LLBLandscapeImg,
                                          'LLBDesktopImg': LLBDesktopImg,
                                           'LLBCustomizationDesktopImg': LLBCustomizationDesktopImg,
                                           'LLBCustomizationPortraitImg': LLBCustomizationPortraitImg,
                                           'LLBCustomizationFlowImg': LLBCustomizationFlowImg,
                                          'LLBeanCustomizationImg': LLBeanCustomizationImg,
                                          'LLBeanAccountImg': LLBeanAccountImg,
                                          'LLBAccountMobileImg': LLBAccountMobileImg,
                                          'LLBAccountFlowImg': LLBAccountFlowImg,
                                          'LLBAccountBeforeImg': LLBAccountBeforeImg,
                                          'LLBAccountDesktopImg': LLBAccountDesktopImg,
                                          'LLBAccountPortraitImg': LLBAccountPortraitImg,
                                          'ATINursingImg': ATINursingImg,
                                          'ATICardsImg': ATICardsImg,
                                          'ATILoopImg': ATILoopImg,
                                          'ATIGraphsImg': ATIGraphsImg,
                                          'PlanItImpactImg': PlanItImpactImg,
                                          'PlanItHomepageImg': PlanItHomepageImg,
                                          'PlanItComparisonImg': PlanItComparisonImg,
                                          'POMCOEmergencyImg': POMCOEmergencyImg,
                                          'POMCOBeforeImg': POMCOBeforeImg,
                                          'POMCOAfterImg': POMCOAfterImg,
                                          'POMCODeviceImg': POMCODeviceImg,
                                          'POMCOFlowImg': POMCOFlowImg,
                                          'ZumbaInstructorImg': ZumbaInstructorImg,
                                          'ZumbaFlowImg': ZumbaFlowImg,
                                          'ZumbaAccountBeforeImg': ZumbaAccountBeforeImg,
                                          'ZumbaAccountAfterImg': ZumbaAccountAfterImg,
                                          'ZumbaTrainingBeforeImg': ZumbaTrainingBeforeImg,
                                          'ZumbaTrainingAfterImg': ZumbaTrainingAfterImg,
                                          'HallmarkWireThumbnailImg': HallmarkWireThumbnailImg,
                                          'HallmarkFinalThumbnailImg': HallmarkFinalThumbnailImg,
                                          'HallmarkWireProductImg': HallmarkWireProductImg,
                                          'HallmarkFinalProductImg': HallmarkFinalProductImg,
                                          'CityYearFlowImg': CityYearFlowImg,
                                          'CityYearBeforeImg': CityYearBeforeImg,
                                          'CityYearAfterImg': CityYearAfterImg,
                                          'CityYearAppBeforeImg': CityYearAppBeforeImg,
                                          'CityYearAppAfterImg': CityYearAppAfterImg,
                                          'LLBEmailProcessImg': LLBEmailProcessImg,
                                          'LLBEmailMobileImg': LLBEmailMobileImg,
                                          'LLBEmailDesktopImg': LLBEmailDesktopImg,
                                          'HRBMobileProcessImg': HRBMobileProcessImg,
                                          'HRBMobileBeforeImg': HRBMobileBeforeImg,
                                          'HRBMobileAfterImg': HRBMobileAfterImg,
                                          'HRBMobilePhoto1Img': HRBMobilePhoto1Img,
                                          'HRBMobilePhoto2Img': HRBMobilePhoto2Img,
                                          'CruisesOnlyProcessImg': CruisesOnlyProcessImg,
                                          'CruisesOnlyIABeforeImg': CruisesOnlyIABeforeImg,
                                          'CruisesOnlyIAAfterImg': CruisesOnlyIAAfterImg,
                                          'CruisesOnlyInfoBeforeImg': CruisesOnlyInfoBeforeImg,
                                          'CruisesOnlyInfoAfterImg': CruisesOnlyInfoAfterImg,
                                          'CruisesOnlyDrillDownImg': CruisesOnlyDrillDownImg,
                                          'HRBiPadProcessImg': HRBiPadProcessImg,
                                          'HRBiPadHomeImg': HRBiPadHomeImg,
                                          'HRBiPadPhoto1Img': HRBiPadPhoto1Img,
                                          'HRBiPadPhoto2Img': HRBiPadPhoto2Img,
                                          'HRBiPadPhoto3Img': HRBiPadPhoto3Img,
                                          'HRBiPadPhoto4Img': HRBiPadPhoto4Img,
                                          'TaxCutSupportProcessImg': TaxCutSupportProcessImg,
                                          'TaxCutSupportBeforeImg': TaxCutSupportBeforeImg,
                                          'TaxCutSupportAfterImg': TaxCutSupportAfterImg,
                                          'TaxCutWelcomeProcessImg': TaxCutWelcomeProcessImg,
                                          'TaxCutWelcomeBeforeImg': TaxCutWelcomeBeforeImg,
                                          'TaxCutWelcomeUpdateBeforeImg': TaxCutWelcomeUpdateBeforeImg,
                                          'TaxCutWelcomeAfterImg': TaxCutWelcomeAfterImg,
                                          'TaxCutWelcomeImport1BeforeImg': TaxCutWelcomeImport1BeforeImg,
                                          'TaxCutWelcomeImport2BeforeImg': TaxCutWelcomeImport2BeforeImg,
                                          'TaxCutWelcomeImportAfterImg': TaxCutWelcomeImportAfterImg,
                                          'TaxCutReportsBeforeImg': TaxCutReportsBeforeImg,
                                          'TaxCutReportsAfterImg': TaxCutReportsAfterImg,
                                          'DProProcessImg': DProProcessImg,
                                          'DProBefore1Img': DProBefore1Img,
                                          'DProAfter1Img': DProAfter1Img,
                                           'DProAfter2Img': DProAfter2Img,
                                           'DProAfter3Img': DProAfter3Img
                                       };
                                       const imageSrc = imageMap[imageName as keyof typeof imageMap];
                                       console.log('Looking for image (no header):', imageName, 'Found source:', imageSrc);
                                       console.log('Available keys:', Object.keys(imageMap));
                                      
                                      if (imageSrc) {
                                        return (
                                          <div key={imgIndex} className="space-y-2 mt-4">
                                            <div className="rounded-lg overflow-hidden bg-muted max-w-2xl mx-auto">
                                              <img 
                                                src={imageSrc} 
                                                alt={`${section.title} screenshot`}
                                                className="w-full h-auto"
                                              />
                                            </div>
                                            <p className="text-sm text-muted-foreground italic text-center">
                                              {caption}
                                            </p>
                                          </div>
                                        );
                                      } else {
                                        console.log('No image source found for (no header):', imageName);
                                      }
                                    }
                                    return null;
                                  })}
                                </div>
                              );
                            }
                            return null;
                          });
                        })()
                      ) : (
                        // Regular content without markdown headers or IMAGE markers
                        <div className="text-muted-foreground leading-relaxed">
                          {renderContentWithLinks(section.content)}
                        </div>
                      )}
                    </div>
                    {(section as any).images && (section as any).images.length > 0 && (
                      <div className="space-y-6 mt-6">
                        {(section as any).images.map((image: any, imgIndex: number) => (
                          <div key={imgIndex} className="space-y-2">
                            <div className="rounded-lg overflow-hidden bg-muted max-w-2xl mx-auto">
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-auto"
                              />
                            </div>
                            {image.caption && (
                              <p className="text-sm text-muted-foreground italic text-center">
                                {image.caption}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-3">
              {/* Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Services Provided</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Deliverables */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deliverables</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables?.map((deliverable) => (
                      <Badge key={deliverable} variant="outline" className="text-xs">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <button
                onClick={navigateToPortfolio}
                className="inline-flex items-center text-primary hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;