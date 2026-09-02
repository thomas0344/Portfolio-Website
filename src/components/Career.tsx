import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Vimal Jyothi Engineering College</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              Focused on core computer science, software testing, algorithm optimization,
              cloud infrastructure, and network protocols.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Trainee</h4>
                <h5>Offenso Hackers Academy (Remote / Online)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed hands-on remote training covering network protocols, TCP/IP,
              vulnerability analysis, Kali Linux, and security auditing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Design Intern</h4>
                <h5>Pace Lab | Kochi (1 Month)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Created interactive prototypes, wireframes, and design flows in Figma and
              Adobe XD, collaborating directly with developers on web usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
