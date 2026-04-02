import './App.css'
import Header from "./components/Header/Header.jsx"
import Home from "./pages/Home/Home.jsx"
import Footer from './components/Footer/Footer.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <section className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
