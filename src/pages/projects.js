import React from 'react'

const Projects = () => {
  const handleOpenProject = (path) => {
    window.location.href = `/shannn-portfolio/${path}`
  }

  return (
    <div className="project-container">
      <div className="project-banner">
        <h1>Hi there, I'm Shannn. 👋</h1>
        <div className="des">
          I'm passionate about UX design and front-end development.
        </div>
      </div>
      <div className="project-wrap">
        <div
          className="card"
          onClick={() => handleOpenProject('project_the_cinema')}
        >
          <img src="cinema_cover.png" alt="cinema app cover" />
        </div>
        {/* <div className="card">aaa</div>
        <div className="card">aaa</div>
        <div className="card">aaa</div>
        <div className="card">aaa</div> */}
      </div>
    </div>
  )
}

export default Projects
