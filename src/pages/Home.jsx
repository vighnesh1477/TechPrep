import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TopicCard from '../components/TopicCard';
import './Home.css';

const featuredTopics = [
  { slug: 'dsa', name: 'Data Structures & Algorithms', description: 'Arrays, trees, graphs, sorting, and complexity analysis.', icon: 'Binary', color: '#2563EB' },
  { slug: 'cpp', name: 'C++ Programming', description: 'OOP, STL, templates, and memory management.', icon: 'Code', color: '#00599C' },
  { slug: 'os', name: 'Operating Systems', description: 'Processes, memory, file systems, and scheduling.', icon: 'Laptop', color: '#DC2626' },
  { slug: 'aiml', name: 'AI & Machine Learning', description: 'Neural networks, NLP, and ML algorithms.', icon: 'Brain', color: '#EC4899' },
];

function CountUp({ checkpoints, suffix = '', delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let seg = 0;
    let start = null;
    let phase = 'animate';
    let pauseStart = null;
    let raf;

    const tick = (ts) => {
      if (!start) start = ts;

      if (phase === 'animate') {
        const from = checkpoints[seg];
        const to = checkpoints[seg + 1];
        const dur = 2000;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(from + (to - from) * eased));

        if (p >= 1) {
          if (seg + 2 < checkpoints.length) {
            phase = 'pause';
            pauseStart = ts;
          } else {
            setDisplay(to);
            return;
          }
        }
      } else {
        if (ts - pauseStart >= 200) {
          seg++;
          phase = 'animate';
          start = ts;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    setDisplay(checkpoints[0]);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  return <>{display}{suffix}</>;
}

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-badge">Open Source</div>
          <h1 className="hero-title">
            Master Technical<br />Concepts
          </h1>
          <p className="hero-subtitle">
            Practice with interactive quizzes on programming, computer science,
            databases, and more. Built by the community, for the community.
          </p>
          <div className="hero-actions">
            <Link to="/topics" className="hero-btn hero-btn-primary">
              Start Quiz
              <ArrowRight className="hero-btn-icon" />
            </Link>
<Link
  to="/about#contribute"
  className="hero-btn hero-btn-outline"
>
  Contribute on GitHub
</Link>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="home-stats-container">
          <div className="home-stat">
            <span className="home-stat-number">
              <CountUp checkpoints={[0, 5, 10, 17]} suffix="+" delay={0} />
            </span>
            <span className="home-stat-label">Topics</span>
          </div>
          <div className="home-stat-divider" />
          <div className="home-stat">
            <span className="home-stat-number">
              <CountUp checkpoints={[0, 1200, 2800, 4900]} suffix="+" delay={100} />
            </span>
            <span className="home-stat-label">Questions</span>
          </div>
          <div className="home-stat-divider" />
          <div className="home-stat">
            <span className="home-stat-number">
              <CountUp checkpoints={[0, 40, 75, 100]} suffix="%" delay={200} />
            </span>
            <span className="home-stat-label">Free & Open Source</span>
          </div>
        </div>
      </section>

      <section className="home-featured">
        <div className="home-featured-container">
          <h2 className="home-section-title">Popular Topics</h2>
          <p className="home-section-subtitle">
            Start with these essential subjects loved by learners.
          </p>
          <div className="home-featured-grid">
            {featuredTopics.map((topic) => (
              <TopicCard
                key={topic.slug}
                slug={topic.slug}
                name={topic.name}
                description={topic.description}
                icon={topic.icon}
                color={topic.color}
              />
            ))}
          </div>
          <div className="home-featured-cta">
            <Link to="/topics" className="home-browse-btn">
              Browse All 14 Topics
              <ArrowRight className="hero-btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta-container">
          <h2 className="home-cta-title">Ready to Test Your Knowledge?</h2>
          <p className="home-cta-desc">
            Start practicing now and track your progress across all topics.
          </p>
          <Link to="/topics" className="hero-btn hero-btn-white">
            Get Started
            <ArrowRight className="hero-btn-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;