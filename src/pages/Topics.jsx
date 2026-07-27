import { useState, useMemo } from 'react';

import TopicCard from '../components/TopicCard';

import { Search } from 'lucide-react';

import './Topics.css';



const topicList = [

  { slug: 'cpp', name: 'C++ Programming', description: 'Master C++ concepts including OOP, STL, templates, and memory management.', icon: 'Code', color: '#00599C' },

  { slug: 'c', name: 'C Programming', description: 'Test your knowledge of C fundamentals, pointers, arrays, and structures.', icon: 'FileCode', color: '#A8B9CC' },

  { slug: 'java', name: 'Java Programming', description: 'Core Java, collections, multithreading, JVM internals, and more.', icon: 'Coffee', color: '#ED8B00' },

  { slug: 'python', name: 'Python Programming', description: 'Python basics, data structures, decorators, generators, and libraries.', icon: 'Terminal', color: '#3776AB' },

  { slug: 'dsa', name: 'Data Structures & Algorithms', description: 'Arrays, trees, graphs, sorting, searching, and complexity analysis.', icon: 'Binary', color: '#2563EB' },

  { slug: 'oops', name: 'Object-Oriented Programming', description: 'Classes, inheritance, polymorphism, abstraction, and design principles.', icon: 'GitBranch', color: '#7C3AED' },

  { slug: 'dbms', name: 'Database Management Systems', description: 'Relational models, ER diagrams, normalization, transactions, and indexing.', icon: 'Database', color: '#059669' },

  { slug: 'sql', name: 'SQL', description: 'Queries, joins, subqueries, aggregation, and database operations.', icon: 'Table', color: '#0EA5E9' },

  { slug: 'os', name: 'Operating Systems', description: 'Processes, memory management, file systems, deadlocks, and scheduling.', icon: 'Laptop', color: '#DC2626' },

  { slug: 'cn', name: 'Computer Networks', description: 'OSI model, TCP/IP, routing, protocols, and network security.', icon: 'Network', color: '#16A34A' },

  { slug: 'fullStack', name: 'Full Stack Development', description: 'Frontend, backend, APIs, databases, deployment, and web architecture.', icon: 'Layers', color: '#F59E0B' },

  { slug: 'aiml', name: 'AI & Machine Learning', description: 'Supervised learning, neural networks, NLP, and ML algorithms.', icon: 'Brain', color: '#EC4899' },

  { slug: 'software_engineering', name: 'Software Engineering', description: 'SDLC, Agile, testing, design patterns, and project management.', icon: 'Briefcase', color: '#8B5CF6' },

  { slug: 'placement_fundamentals', name: 'Placement Fundamentals', description: 'Aptitude, reasoning, verbal ability, and interview preparation.', icon: 'GraduationCap', color: '#14B8A6' },

  { slug: 'cyber', name: 'Cybersecurity', description: 'Network security, cryptography, ethical hacking, and threat analysis.', icon: 'Shield', color: '#E11D48' },

  { slug: 'linux', name: 'Linux', description: 'Linux commands, file systems, user management, shell scripting, and more.', icon: 'Monitor', color: '#FCC624' },

  { slug: 'git', name: 'Git', description: 'Version control, branching, merging, rebasing, and collaborative workflows.', icon: 'GitCommit', color: '#F05032' },

  { slug: 'cloud', name: 'Cloud Computing', description: 'AWS, Azure, GCP, cloud services, deployment models, and architecture.', icon: 'Cloud', color: '#38BDF8' },

];



function Topics() {

  const [search, setSearch] = useState('');



  const filtered = useMemo(() => {

    if (!search.trim()) return topicList;

    const q = search.toLowerCase();

    return topicList.filter(

      (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)

    );

  }, [search]);



  return (

    <div className="topics-page">

      <div className="topics-container">

        <div className="topics-header">

          <h1 className="topics-title">All Topics</h1>

          <p className="topics-subtitle">

            Browse all available quiz topics and test your knowledge

          </p>

        </div>



        <div className="topics-search-wrap">

          <Search className="topics-search-icon" />

          <input

            type="text"

            placeholder="Search topics..."

            className="topics-search-input"

            value={search}

            onChange={(e) => setSearch(e.target.value)}

          />

          {search && (

            <button className="topics-search-clear" onClick={() => setSearch('')} aria-label="Clear search">

              ×

            </button>

          )}

        </div>



        {filtered.length > 0 ? (

          <div className="topics-grid">

            {filtered.map((topic) => (

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

        ) : (

          <div className="topics-empty">

            <Search className="topics-empty-icon" />

            <p>No topics found matching "{search}"</p>

            <button className="topics-empty-btn" onClick={() => setSearch('')}>

              Clear Search

            </button>

          </div>

        )}

      </div>

    </div>

  );

}



export default Topics;