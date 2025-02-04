import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import connexions1thumb from "../assets/examples/connexions1-thumb.png";
import connexions1 from "../assets/examples/connexions1.png";
import connexions2thumb from "../assets/examples/connexions2-thumb.png";
import connexions2 from "../assets/examples/connexions2.png";
import cub1thumb from "../assets/examples/cub1-thumb.png";
import cub1 from "../assets/examples/cub1.png";
import medicaleducation from "../assets/examples/medicaleducation.png";

const images = [
    {
        image: '/src/assets/examples/connexions1.png',
        thumbnail: '/src/assets/examples/connexions1thumb.png',
        altText: 'This is the first connections image'
    },

]

function Examples() {
    return (
        <>
            <main className="prose max-w-none text-base">
                <h1>Work Examples</h1>
                <div className="grid-x" >
                    <h2>U.S. Bank</h2>
                    <p>U.S. Bank is where I have done the most work in accessibility. The culture requires that everyone be part of accessibility, with Deque University training, internal training on Deque tools, and frequent sessions on accessibility topics. Teams have accessibility consultants in design, and developers are required to test code for accessibility issues before deploying.</p>
                    <p>I work on a team that develops React components for consumption by service specific parts of the orgnaization. This includes all areas of the online banking experience. Components include forms, selects, calendars, tables, and many others. Working in this type of environment has given me an in depth understanding of how to get web accessibility right.</p>
                    <p>Another benefit of working at U.S. Bank has been the ability to work with the accesibility consultants and learn from them. This is not available at many companies, and is something that has been invaluable.</p>
                    <p>Because of the nature of banking, I don't have examples at this point. I will update when available.</p>
                </div>
                <div className="grid-x" >
                    <h2>Connexions Loyalty</h2>
                    <p>These images are examples of development work done at Connexions Loyalty. The application was created for banks to provide rewards benefits for travel. At the very beginning of the project, one of the primary directives was to ensure the site was accessible. Testing using NVDA was completed by developer prior to going to QA. This was my first big dive into developing to the WCAG 2.0 standards.</p>
                    <PhotoProvider >
                        <div className="cell medium-4 examples">
                            <PhotoView src={connexions1}>
                                <img src={connexions1} className="examples" width="200px" alt="example of activity search results from Connexions Loyalty" />
                            </PhotoView>
                        </div>
                        <div className="cell medium-4 examples">
                            <PhotoView src={connexions2}>
                                <img src={connexions2} className="examples" width="200px" alt="example of activity search results from Connexions Loyalty" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </div>
                <div className="grid-x" >
                    <h2>Cub Foods</h2>
                    <p>When I worked as a contractor at Cub Foods, they had a number of issues with accessibility. unfortunately they needed remediation with the running code. I started looking at the issues, and used an accessibility scanner called SortSite to scan the site for issues. Many were as simple fixing alt tags, where they didn't uncerstand the proper usage.</p>
                    <PhotoProvider >
                        <div className="cell medium-4 examples">
                            <PhotoView src={cub1}>
                                <img src={cub1} className="examples" width="200px" alt="example the Cub Foods website with incorrect alt tags" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </div>
                <div className="grid-x" >
                    <h2>University of Minnesota</h2>
                    <p>These images are examples of development work done at Connexions Loyalty. The application was created for banks to provide rewards benefits for travel. At the very beginning of the project, one of the primary directives was to ensure the site was accessible. Testing using NVDA was completed by developer prior to going to QA. This was my first big dive into developing to the WCAG 2.0 standards.</p>
                    <PhotoProvider >
                        <div className="cell medium-4 examples">
                            <PhotoView src={medicaleducation}>
                                <img src={medicaleducation} className="examples" width="200px" alt="example the Medical Education website" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </div>
            </main>

        </>
    )
}

export default Examples