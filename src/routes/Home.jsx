import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Michael Tuller - Home";
    }, []);
    return (
        <>
            <div className="grid-x" >
                <main className="cell text-padding">
                    <h1>Welcome</h1>
                    <section >
                        <p>I have been fortunate to have worked with different companies, growing my knowledge of development as I go. First in design, then development. During that journey I have seen a number of technologies come and go, along with how we interact with websites, applications, and each other. Some good things have appeared and some not so good. But the idea of providing access to all, the initial ideas of the web.
                        </p>
                        <blockquote>Innovation is fueled by open standards and open access to knowledge. --Vint Cerf</blockquote>
                        <p>I am fortunate to have the perspectives I do. I have aging parents that are confused by technology, an adult son that has grown up with the internet, and a son that suffered a <abbr title="Tramatic Brain Injury">TBI</abbr> at a young age. Their experiences along with my own frustrations at times have laid the foundation for my drive for accessibility in the web.</p>
                        <p>I have worked in development and accessibility roles at a number of companies. Many that are well known, including Optum, Jostens, Wells Fargo, and U.S. Bank</p>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Home;
