import { useEffect } from "react";
import logo from '../assets/logo.png';
function Home() {
    useEffect(() => {
        document.title = "Michael Tuller - Home";
      }, []);
    return (
        <>
            <div className="grid-x" >
                <div className="cell">
                    <img src={logo} alt="Michael Tuller" />
                </div>
                <div className="cell">
                    <nav>
                        <ul class="vertical medium-horizontal menu">
                            <li><a href="/"><i className="fi-list"></i> <span>Home</span></a></li>
                            <li><a href="/certifications"><i className="fi-list"></i> <span>Certifications</span></a></li>
                            <li><a href="/resume"><i className="fi-list"></i> <span>Resume</span></a></li>
                            <li><a href="/work-examples"><i className="fi-list"></i> <span>Work Examples</span></a></li>
                        </ul>
                    </nav>
                </div>
                <main className="cell text-padding">
                    <h1>Welcome</h1>
                    <section >
                        <p>I started my career as a designer and developer. I have worked in a number of areas within digital content and have always been drawn to connecting technology and people.I have seen the struggles that my parents, my peers, and my sons have had with digital information, and have always felt that there are better ways.
                        </p>
                        <p>Starting as a designer, I became facinated with how people percieved information. Later in my education I studied Psychology and Human Factors to understand deeper how everything connects. Then in 2013 my youngest son was in a car accident and suffered a severe TBI. Obviously this would change anyone's perspective, and since then I have been working with him to help get past the limitations that the accident put on him. In that journey, I found my passion in ensuring that technology is available to everyone. We just need to reach them.</p>
                        <p>I hope you take a look at some of the work that I have included here. What you see is only the beginning.</p>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Home;
