const Hero = () => {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden" id="hero">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-5"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            Effective experiences, designed efficiently{" "}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed animate-slide-up [animation-delay:200ms]">
            I am an experience strategist and product manager specializing in complex domains.
            My clients hire me when they have a complex problem that needs to be solved and they 
            want someone who will solve it well and who will work efficiently.
            </p>
         

        </div>
      </div>
    </section>
  );
};

export default Hero;