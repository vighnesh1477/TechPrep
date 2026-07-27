import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-desc">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="notfound-btn">
          <Home className="notfound-btn-icon" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;