import React from 'react'

const techSkills = [
  'JavaScript',
  'HTML',
  'CSS/CSCC',
  'React/React Router',
  'Redux',
  'Next.js',
  'Three.js',
  'Webpack',
  'Cypress',
  'Git',
  'Sentry',
]

const designSkills = [
  'Figma',
  'Adobe XD',
  'Procreate',
  'Design Thinking',
  'Design Research',
]

const About = () => {
  return (
    <div className="about-container">
      <div className="profile">
        <div className="section imgWrap">
          <img src="profileImg.JPG" alt="profile" />
        </div>
        <div className="section">
          <h2>Hi there, I'm Chin Shang. 👋</h2>
          <div className="des">
            I'm a front-end engineer with passion for creating thoughtful and
            delightful products. Recently diving into UX design which can enrich
            my points of view toward development. <br /> <br /> Aside from work,
            I develop and play games, play indoor climbing, and create digital
            arts.
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="item">
          <div className="title">Experience</div>
          <div className="content"></div>
        </div>
        <div className="item">
          <div className="title">Technical Skills</div>
          <div className="content">
            {techSkills.map((el) => (
              <div>{el}</div>
            ))}
          </div>
        </div>
        <div className="item">
          <div className="title">Design Skills</div>
          <div className="content">
            {designSkills.map((el) => (
              <div>{el}</div>
            ))}
          </div>
        </div>
        <div className="item">
          <div className="title">Education</div>
        </div>
      </div>
    </div>
  )
}

export default About
