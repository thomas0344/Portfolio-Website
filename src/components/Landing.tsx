import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const roles = [
  {
    prefix: "Precision",
    backText: "SOFTWARE",
    frontText: "TESTER",
  },
  {
    prefix: "Automation-Focused",
    backText: "DEVOPS",
    frontText: "ENGINEER",
  },
];

const Landing = ({ children }: PropsWithChildren) => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  const activeRole = roles[activeRoleIndex];

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              THOMAS
              <br />
              <span>JAMES</span>
            </h1>
          </div>
          <div className="landing-info">
            <div className="landing-role-stack">
              <h3 key={activeRole.prefix}>{activeRole.prefix}</h3>
              <div className="landing-role-lines">
                <h2 className="landing-role-back">{activeRole.backText}</h2>
                <h2 className="landing-role-front">{activeRole.frontText}</h2>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
