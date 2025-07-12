import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Contact Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:shannon@efficientinteraction.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Email Shannon McHarg"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="http://linkedin.com/in/smcharg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Shannon McHarg's LinkedIn profile (opens in new window)"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="http://github.com/shannonmcharg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Shannon McHarg's GitHub profile (opens in new window)"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          {/* Copyright and Built with Lovable */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Efficient Interaction LLC. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lovable</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;