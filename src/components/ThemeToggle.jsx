import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="theme-toggle">
      {options.map((opt) => {
        const Icon = opt.icon;
        const active = theme === opt.value;
        return (
          <button
            key={opt.value}
            className={`theme-toggle-btn ${active ? 'theme-toggle-btn-active' : ''}`}
            onClick={() => setTheme(opt.value)}
            title={opt.label}
            aria-label={`Switch to ${opt.label} theme`}
          >
            <Icon className="theme-toggle-icon" />
            <span className="theme-toggle-label">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ThemeToggle;