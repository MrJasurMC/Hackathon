import React from 'react'
import { LuUserRoundSearch } from "react-icons/lu";

function Users() {
  return (
    <section className='users'>
      <div className="users-header">
        <div className="users-header-text">
          <p>ADMIN / <span>User Directory</span></p>
          <h1>User Directory</h1>
          <p>Curate your organization's access hierarchy. Manage roles, permissions, and active
            status for all digital curators within the Fiscal Atelier ecosystem.</p>
        </div>
        <div className="add-user">

        </div>

      </div>
      <div className="user-email">
        <LuUserRoundSearch />
        <div className="user-input">
          <input type="text" />
        </div>
      </div>
    </section>
  )
}

export default Users