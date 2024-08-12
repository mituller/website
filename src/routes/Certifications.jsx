import { useEffect } from "react";
import CPACCLogo from '../assets/cpacc-logo.png';
import WASLogo from '../assets/was-logo.png';
import CPWALogo from '../assets/cpwa-logo.png';
import '../styles/certifications.css';

function Certifications() {
    useEffect(() => {
        document.title = "Michael Tuller - Certifications";
      }, []);
    return (
        <>
            <main className="grid-x text-padding">
                <h1>Certifications</h1>
                <p>Over the years I have done a great deal of work in accessibility. Like most, at first it was learn as you go and figuring out with searches. The basics were covered and used tools like Wave and use of screen readers to help find issues during development.</p>
                <p>As time went by and my career developed, I was pulled more and more into accessibility solutioning, both in code and design. Tools grew and accessibility began to be looked at more critically and careers in the space developed.</p>
                <p>In 2020 I was fortunate to start working at U.S. Bank in a role that pushed me further on the accessibility path. The bank has a strong accessibility culture, and because of that extensive training through Deque University is manditory for all developers and designers. This gave me an even stronger foundation in accessibility and introduced me to more people that focused on A11y in the design space. I grew more interested, and with this decided to get my certifications in web accessibility.</p>
                <p>I completed the Certified Professional in Web Accessibility (CPWA), which is attained after completing Certified Professional in Accessibility Core Competencies and the Web Accessibility Specialist certifications by the International Association of Accessibility Professionals.</p>
            </main>

            <div className="grid-x grid-padding-x align-center-middle text-center">
                <div className="cell medium-4">
                    <img className="iaap-logo" src={CPACCLogo} alt="Certified Professional in Accessibility Core Competencies logo" />
                </div>
                <div className="cell medium-4">
                    <img className="iaap-logo" src={WASLogo} alt="Web Accessibility Specialist logo" />
                </div>
                <div className="cell medium-4">
                    <img className="iaap-logo" src={CPWALogo} alt="Certified Professional in Web Accessibility logo" />
                </div>
            </div>
        </>
    )
}

export default Certifications