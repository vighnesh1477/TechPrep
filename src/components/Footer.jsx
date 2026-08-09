import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-brand">Technical Quiz</h3>
            <p className="footer-desc">
              A free, open-source platform to practice technical concepts
              through interactive quizzes. Built for students and professionals.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/topics">Topics</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/vighnesh1477/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vighnesh-poojary-006b65329/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:Vighneshpoojary49@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Project</h4>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/vighnesh1477/TechPrep" target="_blank" rel="noopener noreferrer">
                  Contribute
                </a>
              </li>
              <li>
                <a href="https://github.com/vighnesh1477/TechPrep" target="_blank" rel="noopener noreferrer">
                  Report an Issue
                </a>
              </li>
              <li>
                <span>MIT License</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Technical Quiz. Open source under MIT License.
          </p>
          <p className="footer-made-with">
            Built somewhere on Planet Earth by <strong>Vighnesh</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;