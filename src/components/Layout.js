import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout-wrap">
      <div>
        <Link to="/">Projects</Link>
        <Link to="logs">Logs</Link>
        <Link to="about">About</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
