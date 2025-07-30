import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Steven Joos",
    title: "Product Director",
    company: "Cengage Learning",
    text: "Shannon made it possible for my team to create the first fully responsive web application at the course level in higher education. Of note, her role in our design sprints was instrumental both as a thoughtful UX partner and advisor, and as someone who could grind out prototypes quickly and effectively. She conservatively shaved three months off of our product development and market research because of her care and speed.",
    avatar: "JS"
  },
  {
    name: "Jeff Lerch",
    title: "Principal Designer",
    company: "Amazon",
    text: "Shannon and I worked together for about three years on a number of product design and blended service initiatives. She's a gifted systematic thinker and organizer, who's always amazed me with her ability to effortlessly sift though, comprehend and solve for even to most complex problem spaces (typically under both time and budget). She's also a talented design leader, who consistently lead cross-functional teams to produce product solutions that created enriching customer experiences while also contributing to the overall market success of the product. Shannon's a wonderful colleague and mentor, and I look forward to working with her again in the near future.",
    avatar: "MR"
  },
  {
    name: "Sarah Gausewitz",
    title: "Director of User Experience",
    company: "H&R Block",
    text: "I have had the pleasure of working with Shannon in multiple capacities over the past decade plus! My experience working with her as a cross-functional team member, as her manager, and as a vendor to me, I recommend Shannon without question. Her ability to quickly come up to speed, to simplify complex processes, to iterate in a collaborative manner, and to contribute additional value through her insights makes her the BEST interaction designer I've worked with. She is diligent about keeping up with the latest trends and tools in design to ensure her projects are successful and relevant to end users.",
    avatar: "DC"
  },
  {
    name: "Lara Tacito",
    title: "Senior UX Designer",
    company: "L.L.Bean",
    text: "I worked with Shannon for about a year and a half at L.L.Bean as a peer and to sum it up in one sentence: I love the way Shannon sees the world. She sees the way things are the same, related, or different in ways that most don't. She isn't afraid to try many ideas and do the nitty gritty work of iteration and prototyping all the scenarios to make sure the design is sound. She is also not afraid of having a well educated and researched opinion/recommendation and advocating for the best possible experience for the customer. She gets the big picture, but also knows that details matter. She's extremely productive and thorough and can be trusted with the most difficult of projects. She is extremely skilled in the tools and processes of user experience and produces high quality deliverables. And lastly, she can understand and tackle complex issues and come to a very real solution, quickly.",
    avatar: "MR"
  },
  {
    name: "Christine Thomas",
    title: "Program Analyst",
    company: "U.S. Department of the Interior",
    text: "Working with Shannon at the Office of Natural Resources Revenue (ONRR) was a great experience. Shannon was one of those teammates who raised the bar for everyone around her. She built incredibly thoughtful Axure prototypes that were clear, detailed, and always user-first. She was an incredibly productive worker and always shared her knowledge. I truly appreciate that Shannon was always willing to take time out of her day to teach me more about UX design and research. Any team would be lucky to have her!",
    avatar: "JK"
  },
  {
    name: "Deanna Aho",
    title: "Innovation Catalyst",
    company: "Quick Base",
    text: "Shannon has a deep understanding of and passion for the user experience. She can define successful high-level strategies, as well as tactical solutions, and effectively communicate her vision to a cross-functional team. She can then execute or manage execution, assuring attention to detail. Shannon is committed to continuous improvement and innovation, and knows how and when to leverage testing to inform design decisions. She is both proactive and collaborative as she guides and shapes the product's path. Shannon works well with and has gained the admiration and respect of product managers, engineers, SMEs, designers, project managers, writers, and QA. She is a true professional, often delivering more than expected because she thought of 'one more thing.'",
    avatar: "DT"
  }
];

const Testimonies = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;