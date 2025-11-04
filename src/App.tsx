import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Writing from './pages/Writing'
import CV from './pages/CV'
import Theories from './pages/Theories'
import OpenPapers from './pages/OpenPapers'
import './styles/App.css'

function App() {
  return (
    <Router>
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
          <p>&copy; 2025 Karsten Wade. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
