import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import calendar from "../assets/examples/calendar.png";
import address_group from "../assets/examples/address-group.png";
import chart from "../assets/examples/chart.png";
import connexions1thumb from "../assets/examples/connexions1-thumb.png";
import connexions1 from "../assets/examples/connexions1.png";
import connexions2thumb from "../assets/examples/connexions2-thumb.png";
import connexions2 from "../assets/examples/connexions2.png";
import cub1thumb from "../assets/examples/cub1-thumb.png";
import cub1 from "../assets/examples/cub1.png";
import medicaleducation from "../assets/examples/medicaleducation.png";

const images = [
  {
    image: "/src/assets/examples/connexions1.png",
    thumbnail: "/src/assets/examples/connexions1thumb.png",
    altText: "This is the first connections image",
  },
];

function Examples() {
  return (
    <>
      <main className="prose max-w-none text-base">
        <h1>Work Examples</h1>
        <div className="">
          <h2>U.S. Bank</h2>
          <p>
            U.S. Bank is where I have done the most work in accessibility. The
            culture requires that everyone be part of accessibility, with Deque
            University training, internal training on Deque tools, and frequent
            sessions on accessibility topics. Teams have accessibility
            consultants in design, and developers are required to test code for
            accessibility issues before deploying. I worked on a team that
            develops React components for consumption by service-specific parts
            of the organization. This includes all areas of the online banking
            experience. Components include forms, selects, calendars, tables,
            and many others. Working in this type of environment has given me an
            in-depth understanding of how to get web accessibility right.
            Another benefit of working at U.S. Bank has been the ability to work
            with the accessibility consultants and learn from them. This is not
            available at many companies, and is something that has been
            invaluable. Below are a couple of examples of the type of components
            created.
            <PhotoProvider>
              <article className="flex flex-row justify-center items-center">
                <div className="pr-16">
                  <PhotoView src={chart}>
                    <img
                      src={chart}
                      className=""
                      width="300px"
                      alt="example of the area chart component"
                    />
                  </PhotoView>
                </div>
                <div className="pr-16">
                  <PhotoView src={calendar}>
                    <img
                      src={calendar}
                      className=""
                      width="300px"
                      alt="example of the calendar component"
                    />
                  </PhotoView>
                </div>
                <div className="pr-16">
                  <PhotoView src={address_group}>
                    <img
                      src={address_group}
                      className=""
                      width="300px"
                      alt="example of an address group"
                    />
                  </PhotoView>
                </div>
              </article>
            </PhotoProvider>
          </p>
        </div>

        <div className="">
          <h2>Connexions Loyalty</h2>
          <p>
            These images are examples of development work done at Connexions
            Loyalty. The application was created for banks to provide rewards
            benefits for travel. At the very beginning of the project, one of
            the primary directives was to ensure the site was accessible.
            Testing using NVDA was completed by the developer prior to going to
            QA. This was my first big dive into developing to the WCAG 2.0
            standards.
          </p>
          <PhotoProvider>
            <article className="flex flex-row justify-center items-center">
              <div className="pr-16">
                <PhotoView src={connexions1}>
                  <img
                    src={connexions1}
                    className="examples"
                    width="300px"
                    alt="example of activity search results from Connexions Loyalty"
                  />
                </PhotoView>
              </div>
              <div className="pr-16">
                <PhotoView src={connexions2}>
                  <img
                    src={connexions2}
                    className="examples"
                    width="300px"
                    alt="example of activity search results from Connexions Loyalty"
                  />
                </PhotoView>
              </div>
            </article>
          </PhotoProvider>
        </div>
        <div className="">
          <h2>Cub Foods</h2>
          <p>
            When I worked as a contractor at Cub Foods, they had a number of
            issues with accessibility. Unfortunately, they needed remediation
            with the running code. I started looking at the issues and used an
            accessibility scanner called SortSite to scan the site for issues.
            Many were as simple as fixing alt tags, where they didn't understand
            the proper usage.
          </p>
          <PhotoProvider>
            <article className="flex flex-row justify-center items-center">
              <div>
                <PhotoView src={cub1}>
                  <img
                    src={cub1}
                    className=""
                    width="300px"
                    alt="example the Cub Foods website with incorrect alt tags"
                  />
                </PhotoView>
              </div>
            </article>
          </PhotoProvider>
        </div>
        <div className="">
          <h2>University of Minnesota</h2>
          <p>
            The University of Minnesota was my first introduction into accessibility as being a public institution, accessibility is a requirement. The tools to ensure that we were meeting requirements were not yet available at that time. We did, however, do our best to think about how to present content to everyone.
          </p>
          <PhotoProvider>
            <article className="flex flex-row justify-center items-center">
              <div>
                <PhotoView src={medicaleducation}>
                  <img
                    src={medicaleducation}
                    className=""
                    width="300px"
                    alt="example the Medical Education website"
                  />
                </PhotoView>
              </div>
            </article>
          </PhotoProvider>
        </div>
      </main>
    </>
  );
}

export default Examples;
