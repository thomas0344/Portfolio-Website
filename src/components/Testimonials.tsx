import "./styles/Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="test-section section-container" id="testimonials">
      <div className="test-container">
        <h2>
          Client <span>Testimonials</span>
        </h2>
        <div className="test-grid">
          <div className="test-card">
            <FaQuoteLeft className="test-icon" />
            <p>
              "Thomas demonstrated exceptional skill in UI/UX design during his internship. His ability to iterate on prototypes and collaborate with developers streamlined our web usability significantly."
            </p>
            <div className="test-author">
              <h4>Pace Lab</h4>
              <span>Mentorship Team</span>
            </div>
          </div>

          <div className="test-card">
            <FaQuoteLeft className="test-icon" />
            <p>
              "An incredibly motivated software tester and developer. The Courier Route Optimization System showed great promise in reducing simulated fuel consumption and optimizing delivery logistics."
            </p>
            <div className="test-author">
              <h4>Academic Project Board</h4>
              <span>Vimal Jyothi Engineering College</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
