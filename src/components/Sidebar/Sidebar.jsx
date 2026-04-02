import React from 'react'
import "./Sidebar.css"
import { RiNewspaperLine } from "react-icons/ri";
import { RiWallet3Line } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersFill } from "react-icons/pi";

function Sidebar() {
  return (
    <section className='sidebar'>
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <RiWallet3Line  className='sidebar-log'/>
                </div>
                <div className="sidebar-logo-text">
                    <h3>Fiscal Atelier</h3>
                    <span>Wealth Management</span>
                </div>
            </div>
            <div className="sidebar-main">
                <div className="sidebar-links">
                    <LuLayoutDashboard />
                    <h3>Dashboard</h3>
                </div>
                <div className="sidebar-links">
                    <RiNewspaperLine />
                    <h3>Transactions</h3>
                </div>
                <div className="sidebar-links">
                    <PiUsersFill />
                    <h3>User List</h3>
                </div>
            </div>
        </section>
  )
}

export default Sidebar