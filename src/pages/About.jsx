import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CreditsScroll from "../components/CreditsScroll";
import profilePic from "../assets/images/Vighnesh.png";
import "./About.css";

function About() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="about-page">
      <div className="about-container">

        <div className="about-hero">
          <div className="about-hero-left">
            <img
              src={profilePic}
              alt="Vighnesh"
              className="about-avatar"
            />

            <h2 className="about-creator-name">Vighnesh</h2>

            <p className="about-creator-role">
              Creator & Maintainer
            </p>

            <p className="about-creator-bio">
              Passionate about making technical education accessible to everyone through open source.
            </p>

            <div className="about-creator-links">
              <a
                href="https://github.com/vighnesh1477"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vighnesh-poojary-006b65329/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:Vighneshpoojary49@gmail.com">
                Email
              </a>
            </div>
          </div>

          <div className="about-hero-right">
            <p className="about-hero-label">
              About Technical Quiz
            </p>

            <h1 className="about-hero-title">
              Knowledge.
              <br />
              Not Memorization.
            </h1>

            <div className="about-hero-statement">
              <p>Most platforms teach you to remember answers.</p>
              <p>Technical Quiz exists to teach you to understand them.</p>
            </div>
          </div>
        </div>

        <div className="about-divider" />

        <div className="about-section" id="contribute">
          <h2 className="about-section-title">
            How You Can Contribute
          </h2>

          <p className="about-section-desc">
            This project grows with community contributions. Here's how you can make a difference.
          </p>

          <div className="about-help-grid">

            <div className="about-help-card">
              <div className="about-help-icon">📚</div>
              <div className="about-help-body">
                <h3>Add New Questions</h3>
                <p>
                  Submit well-written multiple-choice questions with accurate answers and detailed explanations.
                </p>
              </div>
            </div>

            <div className="about-help-card">
              <div className="about-help-icon">✅</div>
              <div className="about-help-body">
                <h3>Improve Existing Questions</h3>
                <p>
                  Report incorrect answers, improve explanations, or suggest better wording.
                </p>
              </div>
            </div>

            <div className="about-help-card">
              <div className="about-help-icon">🆕</div>
              <div className="about-help-body">
                <h3>Suggest New Topics</h3>
                <p>
                  Recommend technologies or subjects you'd like to see added to the platform.
                </p>
              </div>
            </div>

            <div className="about-help-card">
              <div className="about-help-icon">🐞</div>
              <div className="about-help-body">
                <h3>Report Issues</h3>
                <p>
                  Found a bug or typo? Let us know so we can improve the learning experience.
                </p>
              </div>
            </div>

          </div>

          <div className="about-help-cta">
            <a
              href="https://github.com/vighnesh"
              target="_blank"
              rel="noopener noreferrer"
              className="about-help-btn"
            >
              Open an Issue on GitHub
            </a>
          </div>
        </div>

        <CreditsScroll />

      </div>
    </div>
  );
}

export default About;