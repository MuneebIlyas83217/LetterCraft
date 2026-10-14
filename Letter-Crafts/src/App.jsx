import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Form from './pages/Form'
import Update from './pages/Update'
import GetUsers from './pages/GetUsers'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/get" element={<GetUsers />} />
        
    
      </Routes>
      <Footer />
    </Router>
  )
}
export default App

