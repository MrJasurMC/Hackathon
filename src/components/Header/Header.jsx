import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header className='header'>
        <div className="header-input">
          <input type="text" placeholder='Search transactions, assets, or users...'/>
        </div>
        <div className="header-acount">
          
        </div>
    </header>
  )
}

export default Header