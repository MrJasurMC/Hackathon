import './App.css'
import Header from "./components/Header/Header.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Transactions from "./pages/Transactions/Transactions.jsx"
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <section className="container">
      <Sidebar />
      <main>
        <Header />
        <Routes>
          <Route path='/transactions' element={<Transactions />} />
        </Routes>
      </main>
    </section>
  )
}

export default App
