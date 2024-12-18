import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Mission from './components/Mission/Mission'
import WhatsNew from './components/WhatsNew/WhatsNew'
import Newsletter from './components/Newsletter/Newsletter'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Mission />
              <WhatsNew />
              <Newsletter />
            </>
          } />
          {/* Add more routes as needed */}
          <Route path="/day-spa" element={<div>Day Spa Page</div>} />
          <Route path="/med-spa" element={<div>Med Spa Page</div>} />
          <Route path="/locations" element={<div>Locations Page</div>} />
          <Route path="/shop" element={<div>Shop Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
