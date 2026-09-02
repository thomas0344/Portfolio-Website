import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              number: "01",
              title: "Courier Route Optimization System",
              category: "Patent Pending",
              tools: "Python, Dijkstra's Algorithm, Google Maps API",
              description:
                "Intelligent routing engine designed to evaluate real-time traffic and delivery costs, optimizing dispatch turnaround and fuel efficiency.",
              image: "/images/route_optimization.jpg",
              github: undefined,
            },
            {
              number: "02",
              title: "Campus Voting System",
              category: "Blockchain & Web Security",
              tools: "Blockchain, Node.js, Web & Security Technologies, REST APIs",
              description:
                "Tamper-proof election platform integrating digital voter anonymity with immutable, auditable result verification.",
              image: "/images/voting_system.webp",
            },
          ].map(({ number, title, category, tools, description, image, github }) => (
            <div className="work-box" key={number}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{number}</h3>

                  <div>
                    <h4>{title}</h4>
                    <p>{category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{tools}</p>
                <p style={{ marginTop: "10px" }}>{description}</p>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "15px",
                      color: "var(--accentColor)",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
              <WorkImage image={image} alt={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
