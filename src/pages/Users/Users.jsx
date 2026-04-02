import React from 'react'
import { LuUserRoundSearch } from "react-icons/lu";
import { RiShieldUserLine } from "react-icons/ri";
import "./Users.css"

function Users() {
  return (
    <section className='users'>
      <div className="users-header">
        <div className="user-slash">
          <p>ADMIN / <span>USER DIRECTORY</span></p>
        </div>
        <div className="users-header-text">
          <div className="user-text">
            <h1>User Management</h1>
            <p>Curate your organization's access hierarchy. Manage roles, permissions, and active
              status for all digital curators within the Fiscal Atelier ecosystem.</p>
          </div>
          <div className="add-user">
            + Add User
          </div>
        </div>
      </div>

      <div className="user-email">
        <div className="user-input">
        <LuUserRoundSearch />
          <input type="text" placeholder='Find user by name or email...'/>
        </div>
        <div className="roles">
          <RiShieldUserLine />
          <select>
            <option value="All Roles">All Roles</option>
          </select>
          </div>
          <div className="actives">
            <div className="active">
              <span>Total Curators</span>
              <h3>142</h3>
            </div>
            <div className="active activated">
              <span>Active Now</span>
              <h3>12</h3>
            </div>
          </div>
      </div>
      <div className="currators">
        <div className="currators-header">
          <h3>Curator Name</h3>
          <div className="currators-header-buffs">
            <h3>Access Role</h3>
            <h3>Access Role</h3>
            <h3>Current Status</h3>
          </div>
          <h3>Actions</h3>
        </div>
        <div className="currators-main">
          
        </div>
      </div>

    </section>
  )
}

export default Users