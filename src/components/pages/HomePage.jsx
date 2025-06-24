// ~ HOME PAGE ~ 3 SECTIONS// 
import React, { useEffect } from 'react';
import pfPicNoBg from './pageAssets/pfPicNoBg.png';
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
      <p className="fs-5 text-start">
        Clean code and thoughtful design. <br />
        Beginning my journey when the world hit a global pause in 2020, I delved into my curiosity and creative exploration, and trained as a software engineer through Bootcamp EDX, University of Sydney. <br /><br />
        Now, I build responsive, intuitive web applications using tools like React, Node.js, and MongoDB.
        Whether I’m styling a sleek interface or structuring a robust backend, I’m driven by a genuine passion for crafting raw, earthy digital experiences that feel as good as they look.
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






              {/* SECTION 3 */}
              {/* HOMEPAGE PROJECTS & EXPERIENCE CONTAINER */}


              {/* HOMEPAGE PROJECTS CONTAINER */}
              <div className='PEcontainer overflow-hidden'>
                <div className="row flex-wrap p-4 m-2">
                  <div className="row">

                    <div className='experience flex-wrap p-5 mt-5 text-start shadow'>
                      <TopProjects />
                    </div>

                    {/* HOMEPAGE EXPERIENCE CONTAINER */}
                    <div className="row gy-5">

                      <div className="col-6">

                        <div className='CV flex-wrap p-5 mt-5 text-start shadow'>
                          <h3 className='CVText'>EXPERIENCE</h3>

                          <h4>University of Sydney January - August 2024</h4>
                          <h5>Frontend Technology</h5>
                          <p>- HTML5, CSS3, TailwindCSS, JavaScript, Bootstrap, jQuery, React</p>

                          <h5>Backend Technology</h5>
                          <p>- Node, Express.js, FastAPI, MySQL, PostgreSQL, MongoDB, Sequelize, GraphQL</p>

                          <h5>Developer Heading</h5>
                          <p>- Visual Studio Code, Git, GitHub, GitLab, CLI, Wordpress, Render, Apollo</p>

                          <h5>Operating Systems</h5>
                          <p>- Windows, iOS MacOS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* END OF SECTION 3 */}
      {/* END OF HOMEPAGE PROJECTS & EXPERIENCE CONTAINER */}










      {/* SECTION 4 */}
      {/* CONTACT FORM */}
      <>
        {/* Contact Form Heading */}
        <section className="text-center m-5">
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
                <label htmlFor="floatingTextarea2">Message</label>
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

