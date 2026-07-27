import { Link } from 'react-router-dom';
import {
  Code, FileCode, Coffee, Terminal, Binary, GitBranch,
  Database, Table, Laptop, Network, Layers, Brain,
  Briefcase, GraduationCap, BookOpen, Shield, Monitor,
  GitCommit, Cloud,
} from 'lucide-react';
import './TopicCard.css';

const iconMap = {
  Code, FileCode, Coffee, Terminal, Binary, GitBranch,
  Database, Table, Laptop, Network, Layers, Brain,
  Briefcase, GraduationCap, BookOpen, Shield, Monitor,
  GitCommit, Cloud,
};

function TopicCard({ slug, name, description, icon, color }) {
  const IconComponent = iconMap[icon] || BookOpen;

  return (
    <Link to={`/quiz/${slug}`} className="tc-link">
      <div className="tc-card">
        <div className="tc-icon-box" style={{ backgroundColor: `${color}14` }}>
          <IconComponent className="tc-icon" style={{ color }} />
        </div>
        <div className="tc-body">
          <h3 className="tc-name">{name}</h3>
          <p className="tc-desc">{description}</p>
        </div>
        <span className="tc-arrow" style={{ color }}>→</span>
      </div>
    </Link>
  );
}

export default TopicCard;