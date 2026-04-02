import './App.css'
import Header from "./components/Header/Header.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Transactions from "./pages/Transactions/Transactions.jsx"
import Financial from "./pages/Financial/Financial.jsx"
import Users from "./pages/Users/Users.jsx"
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <section className="container">
      <Sidebar />
      <main>
        <Header />
        <Routes>
          <Route path='/transactions' element={<Transactions />} />

          <Route path='/' element={<Financial />} />
          <Route path='/' element={<Transactions />} />
          <Route path='/' element={<Users />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/Financial' element={<Financial />} />
          <Route path='/' element={<Transactions />} />
          <Route path='/Users' element={<Users />} />
        </Routes>
      </main>
    </section>
  )
}

export default App
