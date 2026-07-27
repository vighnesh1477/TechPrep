import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import About from './pages/About';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/quiz/:slug" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/about" element={<About />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;