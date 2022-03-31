import React from 'react'

const ProjectTheCinema = () => {
  return (
    <div className="project-content-container">
      <img
        className="project-content-banner"
        src="cinema_banner.png"
        alt="banner"
      />
      <div className="project-content-section">
        <div className="project-content-header">Overview</div>
        <div className="project-content-paragraph">
          As a front-end engineer who frequently cooperates with the design
          team, I’m really fascinated by the process of designing and developing
          products. In February 2022, I started taking the Coursera Google UX
          Design Certificate online course to learn UI/UX skills. In the first
          course project, I chose to design a seat reservation app for a theater
          as my topic.
        </div>
        <div className="project-content-header">My Role & Responsibilities</div>
        <div className="project-content-paragraph">
          UX Designer and researcher designing an app for the CINEMA from
          conception to delivery.
        </div>
        <div className="project-content-paragraph">
          Conducting interviews, paper and digital wireframes, low and
          high-fidelity prototypes. Implementing usability studies, accounting
          for accessibility and iterating on design.
        </div>
        <div className="project-content-header">Product Vision</div>
        <div className="project-content-paragraph">
          Design a movie seat reservation app to provide an efficient and
          flexible way for the users.
        </div>
        <div className="project-content-header">User Research</div>
        <div className="project-content-paragraph">
          I conducted interviews and created user journey maps to understand the
          users I’m designing for and their needs. A main user group in the
          research was busy adults who want to use their time more efficiently
          and manage a controllable schedule.
        </div>
        <div className="project-content-paragraph">
          The research also identified that some existence features included
          membership or seats reservation flow will influence their feelings and
          choices in using the app.
        </div>
      </div>
      <div className="project-content-section">
        <div className="project-content-header">Paper Wireframes</div>
        <div className="project-content-paragraph">
          I'm quickly making the draft of main reservation flow and functions.
          Taking the time to try different layouts to see if it’s clear enough
          for users to use.
        </div>
        <img
          className="project-content-img"
          src="paper_wireframes.jpg"
          alt="paper wireframes"
        />
      </div>
      <div className="project-content-section">
        <div className="project-content-header">Digital Prototype</div>
        <div className="project-content-paragraph">
          Turing the paper works to digital wireframes. Modified some details
          based on the user research and the real vision on the mobile screen.
        </div>
        <img
          className="project-content-img"
          src="low_fidelity_prototype.png"
          alt="low fidelity prototype"
        />
        <img
          className="project-content-img"
          src="high_fidelity_prototype.png"
          alt="high fidelity prototype"
        />
      </div>
      <div className="project-content-section">
        <div className="project-content-header">Refining Mockups</div>
      </div>
      <div className="project-content-section-column">
        <div className="project-content-paragraph margin-r">
          In the early design, the payment section lack some use cases and
          options for users. I added multiple payment options and the flow of
          switch cards to make it more close to the real world usage.
        </div>
        <img
          className="project-content-img-50"
          src="refine_01.png"
          alt="low fidelity prototype"
        />
      </div>
      <div className="project-content-section-column">
        <div className="project-content-paragraph margin-r">
          In the second usability study, I found the users are confusing about
          the function of seat preview. It didn’t provide enough guide for user
          to use and also make the page too complicate. So I add a button to
          open the preview and list the information about the layout. The
          reservation page also has more space to list the time options more
          clearly.
        </div>
        <img
          className="project-content-img-50"
          src="refine_02.png"
          alt="low fidelity prototype"
        />
      </div>
      <div className="project-content-section">
        <div className="project-content-header">Takeaways</div>
        <div className="project-content-paragraph">
          In the process of designing and doing the studies, I learned that
          getting the feedback and iterating the design is really important part
          to polish the product. Be aware of the bias is also a challenge.
        </div>
        <div className="project-content-paragraph">
          Thank you for your time reviewing my case study on the CINEMA app! If
          you have any questions and would like to reach out to me, my contact
          information is provided below.
        </div>
      </div>
      <div className="project-content-footer">
        <div className="title">REACH OUT TO ME!</div>
        <div className="contact">gracejin214@gmail.com</div>
        <div className="copy-right">© 2022 Chin Shang</div>
      </div>
    </div>
  )
}

export default ProjectTheCinema
