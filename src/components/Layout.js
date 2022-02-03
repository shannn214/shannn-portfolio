import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout-wrap">
      <div className="nav-wrap">
        <div className="nav-icon">icon</div>
        <div className="nav-item-wrap">
          <div className="nav-item">
            <Link to="/">Projects</Link>
          </div>
          <div className="nav-item">
            <Link to="logs">Logs</Link>
          </div>
          <div className="nav-item">
            <Link to="about">About</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
