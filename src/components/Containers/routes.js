import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Projects from '../../pages/projects'
import About from '../../pages/about'
import Logs from '../../pages/logs'
import Cinema from '../../pages/project_the_cinema'

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="logs" element={<Logs />} />
        <Route path="project_the_cinema" element={<Cinema />} />
      </Route>
    </Routes>
  )
}

export default routes
