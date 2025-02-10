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
          <p>Web Accessibility doesn't have to be hard. With the right mindset, where it is brought into the design process and included throughout the development cycle, it can be just another part of creating a website. Even better, it can be a check on overengineering components, pages, or even whole websites. Accessibility requires following standards that have been created so that all can access and understand the content provided.</p>
          <p>As a business, if you don't have an accessible website, you are limiting your customers. Accessibility is often viewed as something for the blind. It also includes the young and the old, those with hearing disabilities, and people that are colorblind. It even includes those that have a temporary need such as a broken hand. Voice inputs will help. I have very good hearing, but often have closed captioning on, so if I didn't hear something in the background while watching a movie, I see it in writing. I've found that this helps greatly in understanding what is happening by pointing out very subtle things.</p>
          <p>The reality is that all of us will most likely have some accessibility need at some point in our lives. Shouldn't we be part of the solution to ensure that we don't leave anyone behind?</p>
          <p>There are many resources for web accessibility, and as it has become a larger part of development. The <a href="https://www.w3.org/WAI/">Web Accessibility Initiative</a> is a great place to start.</p>
        </section>
      </main>
    </>
  );
}

export default Home;
