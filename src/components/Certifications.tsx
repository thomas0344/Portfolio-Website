import "./styles/Certifications.css";
import { MdVerified, MdArrowOutward } from "react-icons/md";

const certData = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "October 27, 2025",
    description: "Designed for Software Developers and Machine Learning/AI Engineers to build, trace, evaluate, and deploy LLM applications using OCI Generative AI Service, RAG, Semantic Search, and LangChain.",
    tags: ["Generative AI", "LLMs", "RAG", "LangChain"],
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=78F73E8DAE3763A2C90A74335FA10E450E340B0219F699AAE97B3743AF132DC9",
    image: "/images/certifications/oracle.png",
  },
  {
    title: "Machine Learning Foundation Certification",
    issuer: "Infosys Springboard",
    date: "July 3, 2025",
    description: "Foundational training in Machine Learning algorithms, data preprocessing, and model evaluation techniques.",
    tags: ["Machine Learning", "Data Science", "Python"],
    link: "",
    image: "/images/certifications/infosys.jpg",
  },
  {
    title: "Introduction to Ethical Hacking",
    issuer: "Offenso Hackers Academy",
    date: "June 28, 2025",
    description: "Comprehensive hands-on training in network protocols, TCP/IP, vulnerability analysis, Kali Linux, and security auditing.",
    tags: ["Security", "Kali Linux", "Network Protocols"],
    link: "",
    image: "/images/certifications/offenso.jpg",
  }
];

const Certifications = () => {
  return (
    <div className="cert-section section-container" id="certifications">
      <div className="cert-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="cert-flex">
          {certData.map((cert, index) => (
            <div className="cert-box" key={index} style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
              {cert.image && (
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  style={{ width: "200px", borderRadius: "10px", objectFit: "cover" }} 
                />
              )}
              <div className="cert-info" style={{ flex: 1, minWidth: "300px" }}>
                <div className="cert-title">
                  <h3>
                    <MdVerified style={{ color: "var(--accentColor)", marginRight: "10px", verticalAlign: "middle" }} />
                    {cert.title}
                  </h3>
                  <h4>{cert.issuer} • {cert.date}</h4>
                </div>
                <p>{cert.description}</p>
                <div className="cert-tags">
                  {cert.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link"
                  >
                    View Credential <MdArrowOutward />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
