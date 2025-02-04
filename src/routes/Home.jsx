import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Michael Tuller - Home";
  }, []);
  return (
    <>
      <main className="prose max-w-none text-base">
        <h1>Welcome</h1>
        <section>
          <blockquote>
            Innovation is fueled by open standards and open access to knowledge.
            --Vint Cerf
          </blockquote>
          <p>
            The quote above was the original intent of the web. <a href="https://en.wikipedia.org/wiki/Vint_Cerf">Vint Cerf</a> is one of the "fathers of the internet" and developed technologies that the internet runs on today. Both he and his wife have hearing issues, and that led him to help develop email. 
          </p>
          <p>I love developing websites and applications. It is something I have found purpose in and am excited every day to be part of. I do believe in what the original intent of the internet was. To provide access to information to everyone. We all should be part of this.</p>
        </section>
      </main>
    </>
  );
}

export default Home;
