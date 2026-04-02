import React from 'react'
import user from "./assets/user.png"
import { CiSearch } from "react-icons/ci";


import "./Header.css"

function Header() {
  return (
    <header className='header'>
        <div className="header-input">
          <CiSearch style={{fontSize:"20px"}}/>
          <input type="text" placeholder='Search transactions, assets, or users...'/>
        </div>
        <div className="header-acount">
          <div className="header-acc-names">
            <h3>Alexander Vance</h3>
          <span>Admin Access</span>
          </div>
          <img src={user} alt="bu yerda rasim bor" />
        </div>
    </header>
  )
}

export default Header