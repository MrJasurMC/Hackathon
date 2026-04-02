import './App.css'
import Header from "./components/Header/Header.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
<<<<<<< HEAD
import Transactions from "./pages/Transactions/Transactions.jsx"
=======
import Financial from "./pages/Financial/Financial.jsx"
import Transactions from "./pages/Transactions/Transactions.jsx"
import Users from "./pages/Users/Users.jsx"
>>>>>>> 563f046876bd0fc25e49526a9c21070af366f0e8
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <section className="container">
      <Sidebar />
      <main>
        <Header />
        <Routes>
<<<<<<< HEAD
          <Route path='/transactions' element={<Transactions />} />
=======
          <Route path='/' element={<Financial />} />
          <Route path='/' element={<Transactions />} />
          <Route path='/' element={<Users />} />
>>>>>>> 563f046876bd0fc25e49526a9c21070af366f0e8
        </Routes>
      </main>
    </section>
  )
}

export default App
