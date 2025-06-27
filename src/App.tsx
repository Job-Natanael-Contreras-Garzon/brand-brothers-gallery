import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Index from './pages/Index';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import BlogPage from './pages/BlogPage';
import NotFound from './pages/NotFound';
import { Navigation } from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Navigation />
          <main className="pt-10"> 
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
