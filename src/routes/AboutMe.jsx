import { useEffect } from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  useEffect(() => {
    document.title = "Michael Tuller - About Me";
  }, []);
  return (
    <>
      <main className="prose max-w-none text-base">
        <h1>About Me</h1>
        <p>
          I grew up in a rural area of Nebraska, surrounded by people who worked
          hard all their lives. You could see it by just looking at their hands.
          I'm proud that I had those examples to look up to—to know that
          anything can be accomplished with some effort and grit. My father was
          a welder, and my mother worked many different jobs to pay the bills.
          They provided a foundation for me to be where I am now.
        </p>
        <p>
          I am a proud father of two boys. They both amaze me in how they learn
          about life. My sons are far apart in age—one is 28 and the other 13.
          The younger son suffered a Traumatic Brain Injury as a toddler, and it
          has changed my life. I see the world in a different way because of the
          struggles he has. He has mobility and developmental challenges, which
          have required adaptive modifications at times. As he has grown, he has
          overcome many of these with the work he has put in. Many therapy
          sessions, working on learning, and exercises to help him have helped.
          I have also been introduced fully to the area of disabilities and
          accessibility.
        </p>
        <h2>Education and Work</h2>
        <p>
          I am very fortunate to have worked with different companies,
          exceptional people, and on great projects that have stretched my
          knowledge and skills. I am grateful that I started in design, where I
          learned the foundations of usability and clear visual communication. I
          gained deep knowledge about how people perceive, including color,
          iconography, and the written word. I was able to study typography in
          great detail with a year of study that included creating fonts that
          followed guidelines for legibility. As my career progressed, I took
          that knowledge to first work in web design, which led to development.
        </p>
        <p>
          My development experience has taken me from basic HTML to CSS to
          JavaScript and now into full front-end development with libraries such
          as React, Vue, and Svelte. This has opened me to new possibilities to
          create content that can be available to anyone.
        </p>
        <p>
          My education didn't stop with design. In 2006, I started the master's
          degree program for technology management. While there, I studied with
          a number of engineers and saw a side that I hadn't experienced before.
          Engineers often see technology as a gadget. I see technology as the
          connection between technology (i.e., computer, tablet, appliance) and
          a human. That made me realize that finding that connection was my
          passion. I had been working developing applications with backend code,
          which wasn't where I wanted to be. I needed a new direction. I found
          out that the University of Minnesota had developed the human factors
          program, which is a collaboration between the departments of design,
          psychology, mechanical engineering, computer science, and kinesiology.
          I jumped at the chance.
        </p>
        <h2>Accessibility</h2>
        <p>
          Finally, that led me to accessibility. I am still a developer. It's
          challenging, and that keeps me engaged, but I decided that I wanted to
          include accessibility in all that I develop—learning the tools,
          reading documentation, and implementing the practice. As the
          accessibility field has grown, I have moved with it—most recently
          attaining the highest of web accessibility certifications: the
          Certified Professional in Web Accessibility. I continue following up
          on the latest tools and information, allowing me to know the things
          that are available so that everyone can have access to information in
          their own way.
        </p>
      </main>
    </>
  );
}

export default AboutMe;
