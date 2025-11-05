import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { usePageTracking } from './hooks/usePageTracking'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Writing from './pages/Writing'
import CV from './pages/CV'
import Theories from './pages/Theories'
import OpenPapers from './pages/OpenPapers'
import './styles/App.css'

function AppContent() {
  // Track page views on route changes
  usePageTracking()

  return (
    <div className="app">
      <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/theories" element={<Theories />} />
          <Route path="/papers" element={<OpenPapers />} />
        </Routes>

      <footer className="app-footer">
        <p>
          &copy; 2025 Karsten Wade. All rights reserved.
          {' • '}
          <span className="app-footer__privacy">
            This site uses Google Analytics to understand usage. No personal information is collected beyond standard analytics data.
          </span>
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
