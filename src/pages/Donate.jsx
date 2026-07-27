import { Heart, QrCode, Share2, MessageSquarePlus, Bug, FileText, Star, CheckCircle } from 'lucide-react';
import bankQR from '../assets/images/Bank.jpeg';
import './Donate.css';

function Donate() {
  return (
    <div className="donate-page">
      <div className="donate-container">
        <div className="donate-header">
          <Heart className="donate-heart-icon" />
          <h1>Support This Project</h1>
          <p className="donate-subtitle">
            Technical Quiz is a free, open-source project built to help students
            prepare for technical interviews and exams. If this project has helped
            you, consider supporting its development and maintenance.
          </p>
        </div>

        <div className="donate-methods">
          <div className="donate-method-card">
            <div className="method-icon">
              <QrCode className="icon-qr" />
            </div>
            <h2>UPI / QR Code</h2>
            <p>Scan the QR code below to make a quick donation via UPI.</p>
            <div className="qr-container">
              <img
                src={bankQR}
                alt="UPI QR Code"
                className="donate-qr-image"
              />

              <p className="donate-upi-id">
                UPI ID:
                <br />
                <strong>vighneshpoojary49@okhdfcbank</strong>
              </p>
            </div>
          </div>

          <div className="donate-method-card">
            <div className="method-icon">
              <Star className="icon-star" />
            </div>
            <h2>Not able to donate?</h2>
            <p>You can still make a huge difference by:</p>
            <div className="contribute-list">
              <div className="contribute-item">
                <Share2 className="contribute-icon" />
                <span>Sharing this project</span>
              </div>
              <div className="contribute-item">
                <MessageSquarePlus className="contribute-icon" />
                <span>Contributing new questions</span>
              </div>
              <div className="contribute-item">
                <Bug className="contribute-icon" />
                <span>Reporting issues</span>
              </div>
              <div className="contribute-item">
                <FileText className="contribute-icon" />
                <span>Improving documentation</span>
              </div>
              <div className="contribute-item">
              <Star className="contribute-icon" />
              <span>Starring this project on GitHub</span>
            </div>

            <div className="contribute-item">
              <Heart className="contribute-icon" />
              <span>Providing feedback and suggestions</span>
            </div>

            <div className="contribute-item">
              <CheckCircle className="contribute-icon" />
              <span>Fixing bugs and submitting pull requests</span>
            </div>
            </div>
            <p className="contribute-note">Every contribution helps.</p>
            <a
              className="github-star-btn"
              href="https://github.com/vighnesh153/Technical-Quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="star-btn-icon" />
              Star on GitHub
            </a>
          </div>
        </div>

        <div className="donate-thankyou">
          <Heart className="thankyou-icon" />
          <p>Every contribution, no matter how small, matters. Thank you for believing in open source!</p>
        </div>
      </div>
    </div>
  );
}

export default Donate;