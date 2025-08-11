// ~ HOME PAGE ~ 3 SECTIONS// 
import React, { useEffect } from 'react';
import pfPicNoBg from './pageAssets/newPortfolioPicture-Photoroom.png';
// import { Link } from "react-router-dom"; 
import '../pages/styles/pages.css';
import { pages } from './UI/routes';
import PageWrapper from '../pages/UI/PageWrapper';
import TopProjects from './TopProjects';
import AnimatedName from '../pages/UI/AnimatedName';


export default function HomePage() {
  useEffect(() => {
    const button = document.querySelector('.view-cv-btn');
    if (button) {
      const handleMouseUp = () => button.blur();
      button.addEventListener('mouseup', handleMouseUp);

      return () => {
        button.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, []);


  return (
    <PageWrapper>
      <div>
      <div className="pt-3 container-fluid">


<div className="row p-5 align-items-center">
  {/* Image Column */}
  <div className="col-md-3 pl-2 mb-4">
    <img
      src={pfPicNoBg}
      width={250}
      height={100}
      className="img-thumbnail img-fluid shadow"
      alt="Author's profile picture"
    />
  </div>

  {/* Animated Name & Bio together */}
  <div className="col-md-8">
    {/* Animated Name */}
    <div className="pt-3 mb-4">
      <AnimatedName />
    </div>

    {/* Bio & CV Button */}
    <div className="homepage-bio shadow p-4">
      <p className="fs-5 text-center">
        Clean code and thoughtful design. <br />
        <br />I build responsive, intuitive web applications using tools like React, Node.js, and MongoDB.<br />
        <br />Whether I’m styling a sleek interface or structuring a robust backend, I’m driven by a genuine passion for crafting raw, earthy digital experiences that feel as good as they look.
      </p>
      <a
        href="/Rhianna-Wilson-CV.pdf"
        className="view-cv-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My CV
      </a>
    </div>
  </div>

              {/* PROJECTS CONTAINER */}
              <div className='container overflow-hidden'>
                <div className="row flex-wrap p-4 m-2">
                  <div className="row">

                    <div className='flex-wrap p-5 mt-5 text-start shadow'>
                      <TopProjects />
                    </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

{/* EXPERIENCE */}
<section className="container my-5">
  <div className="experience-card shadow-lg p-4 p-md-5">
    <header className="d-flex align-items-center gap-3 mb-4">
      <div className="exp-dot" aria-hidden="true"></div>
      <h2 className="m-0">Experience</h2>
    </header>

    <h5 className="text-muted mb-1">University of Sydney <br></br> Jan–Aug 2024</h5>
    <p className="mb-4 text-muted">Full Stack Engineer Bootcamp</p>

    <div className="row text-muted g-4">
      {/* Frontend */}
      <div className="col-12 col-md-6">
        <h6 className="text-uppercase fw-bold small mb-2">Frontend</h6>
        <ul className="skill-chips">
          <li>HTML5</li><li>CSS3</li><li>Bootstrap</li>
          <li>Tailwind</li><li>JavaScript</li><li>jQuery</li><li>React</li>
        </ul>
      </div>

      {/* Backend */}
      <div className="col-12 col-md-6">
        <h6 className="text-uppercase fw-bold small mb-2">Backend</h6>
        <ul className="skill-chips">
          <li>Node</li><li>Express</li><li>FastAPI</li>
          <li>MySQL</li><li>PostgreSQL</li><li>MongoDB</li>
          <li>Sequelize</li><li>GraphQL</li>
        </ul>
      </div>

      {/* Tooling */}
      <div className="col-12 col-md-6">
        <h6 className="text-uppercase fw-bold small mb-2">Tooling</h6>
        <ul className="skill-chips">
          <li>VS Code</li><li>Git</li><li>GitHub</li><li>GitLab</li>
          <li>CLI</li><li>Render</li><li>WordPress</li><li>Apollo</li>
        </ul>
      </div>

      {/* Systems */}
      <div className="col-12 col-md-6">
        <h6 className="text-uppercase fw-bold small mb-2">Systems</h6>
        <ul className="skill-chips">
          <li>macOS</li><li>Windows</li>
        </ul>
      </div>
    </div>
  </div>
</section>








      {/* SECTION 4 */}
      {/* CONTACT FORM */}
      <>
        {/* Contact Form Heading */}
        <section className=" text-center m-5">
          <h2 className="display-5 fw-bold p-5">Let’s Connect</h2>
          <p className="lead text-muted">
            Have a question, idea, or opportunity? I/d love to hear from you.
          </p>

          {/* Contact Form */}
          <div className="d-flex justify-content-center">
            <form className="contactFormStyle p-3 w-50">
              <div className="row">
                <div className="col m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>

              <div className="m-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>

              <div className="form-floating m-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  aria-label="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
                <label className='text-muted' htmlFor="floatingTextarea2">Message</label>
              </div>

              <button type="submit" className="btn-custom m-3">
                Submit
              </button>
            </form>
          </div>
        </section>
      </>

      {/* END OF SECTION 4 */}
      {/* END OF CONTACT FORM */}






    </PageWrapper>
  );
}

