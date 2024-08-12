import { useEffect } from "react";
import { Link } from "react-router-dom";

function AboutMe() {
    useEffect(() => {
        document.title = "Michael Tuller - About Me";
      }, []);
    return (
        <div className="grid-x" >
            <main className="cell text-padding">
                <h1>About Me</h1>
                <p>I grew up in a rural area of Nebraska, surrounded by people who worked hard all their lives. You could see it by just looking at their hands. I'm proud that I had those examples to look up to. To know that anything can be accomplished with some effort and grit. My father was a welder, and my mother worked many different jobs to pay the bills. They provided a foundation for me to be where I am now.</p>
                <p>I am a proud father of 2 boys. They both amaze me in how they learn about life. My sons are far apart in age. One is 28 and the other 13. The younger son suffered a Tramatic Brain Injury as a toddler, and has changed my life. I see the world in a different way because of the stuggles he has. He has mobility and developmental challenges, which have required adaptive modifications at times. As he has grown, he has overcome many of these with the work he has put in. Many therapy sessions, working on learning and exercises to help him have helped. I have also been introduced fully to the area of special needs and accessibility.</p>
                <p>I started my career as a designer, I was very interested in how people view and understand the world. How boundaries can be pushed to create engaging content. I especially loved learning about typography. Learning that we don't read letter by letter as we first learn, but more by the shape of words changed forever how I looked at content.</p>
                <p>I later wanted to take the design skills to the web, and with that learned HTML. As I worked more in that area, I learned more and more. I later learned CSS and Javascript. As frameworks developed I started working in those. React and Vue in particular.</p>
                <p>While developing these skills, I also aquired my master's degree in technology management. There I rediscovered my interest in that connection between humans and technology. I started attending classes for the human factors program at the Univerisy of Minnesota.</p>
                <p>My education and training set me up for a path forward, but my son's accident gave me the purpose. Accessibility has been part of my development experience since. Starting with the very basics in the Section 508 or the Rehabilitation Act to later WCAG 2.2. My job provided me with the tools to learn more about accessibility and to work closely with accessibility consultants. I gained a strong understanding of the importance of the work that they do and the nuances that aren't always obvious. My curiosity led me to seek out certification in accessibility. You can learn more about that on my <Link to="/certifications"><i className="fi-list"></i>Certifications page.</Link></p> 
                <p>It's hard to sum up a 25+ year career in a single page. But in summary, I know that the there is a larger purpose in development than just creating the latest widget. It has to connect with ALL people where they are at. It was the original concept of the web, and we should strive to attain that. I want to be part of the solution.</p>
            </main>
        </div>
    )
}

export default AboutMe