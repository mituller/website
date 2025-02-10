import { useEffect } from "react";
import CPACCLogo from "../assets/cpacc-logo.png";
import WASLogo from "../assets/was-logo.png";
import CPWALogo from "../assets/cpwa-logo.png";
import "../styles/certifications.css";

function Certifications() {
  useEffect(() => {
    document.title = "Michael Tuller - Certifications";
  }, []);
  return (
    <>
      <main className="prose max-w-none lg:prose-lg">
        <h1>Certifications</h1>
        <h2>Accessibility</h2>
        <p>
          Over the years, I have done a great deal of work in accessibility.
          Like most, at first, it was learn as you go and figuring out with
          searches. The basics were covered, and I used tools like Wave and
          screen readers to help find issues during development.
        </p>
        <p>
          As time went by and my career developed, I was pulled more and more
          into accessibility solutioning, both in code and design. Tools grew,
          and accessibility began to be looked at more critically, and careers
          in the space developed.
        </p>
        <p>
          In 2020, I was fortunate to start working at U.S. Bank in a role that
          pushed me further on the accessibility path. The bank has a strong
          accessibility culture, and because of that, extensive training through
          Deque University is mandatory for all developers and designers. This
          gave me an even stronger foundation in accessibility and introduced me
          to more people that focused on A11y in the design space. I grew more
          interested and, with this, decided to get my certifications in web
          accessibility.
        </p>
        <strong>CPACC</strong>
        <div>
          <img
            className="iaap-logo"
            src={CPACCLogo}
            alt="Certified Professional in Accessibility Core Competencies badge"
          />
        </div>
        <p>
          This is the Certified Professional in Accessibility Core
          Compentencies, which a foundational certification from the{" "}
          <a href="https://www.accessibilityassociation.org">IAAP</a>and covers
          the web, digital techonologies, and architecture.
        </p>
        <strong>WAP</strong>
        <div>
          <img
            className="iaap-logo"
            src={WASLogo}
            alt="Web Accessibility Specialist badge"
          />
        </div>
        <p>
          The Web Accessibility Specialist certification is for developers and
          quantifies hands-on technical digital accessibility proficiency.
        </p>
        <strong>CPWA</strong>
        <div>
          <img
            className="iaap-logo"
            src={CPWALogo}
            alt="Certified Professional in Web Accessibility badge"
          />
        </div>
        <p>
          The Certified Professional in Web Accessibility is a certificaton
          given after passing the CPACC and the WAP. It shows that there I have
          achieved a higher level of accessibility development knowledge. There
          are currently only 639 worldwide that hold this certificaton.
          Something that I am very proud to be one of.
        </p>
      </main>
    </>
  );
}

export default Certifications;
