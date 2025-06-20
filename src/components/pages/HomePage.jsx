// ~ HOME PAGE ~ 3 SECTIONS// 
import React, { useEffect } from 'react';
import pfPicNoBg from './pageAssets/pfPicNoBg.png';
// import { Link } from "react-router-dom"; 
import '../pages/styles/pages.css';
import { pages } from './UI/routes';  // Adjust relative path as needed
import NextArrow from './UI/NextArrow';
import PageWrapper from '../pages/UI/PageWrapper';
import TopProjects from './TopProjects';


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
    // main homepage div
    <PageWrapper>
      <div className="container-fluid">

        {/*     // SECTION 1 */}
        <div className="row p-5">
          <div className='row-1 mt-4'>
            <img
              src={pfPicNoBg}
              width={250}
              height={100}
              className="img-thumbnail float-end img-fluid shadow"
              alt="Author's profile picture"
            />
            <div className="col w-50">
              <div className="panel-success">
                <h1 className="authorsName m-5 panel-heading">
                  Rhianna
                </h1>
                <div className="panel-body m-5">
                  <h3 className="authorsBio">Web Developer</h3>       <NextArrow />
{/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}

                </div>
                <h5 className="summary m-3">
                  {/* <br></br><strong>Full Stack Web Developer</strong> with 10+ years experience in Office and Event Management background. <br></br><br></br>An adaptable, solutions-oriented professional, logically minded, with various transferable skills and advanced IT proficiency, including experience with <strong>project management</strong> tools such as <strong>Agile methodologies and Scrum principles</strong>. <br></br>  */}

                </h5>
              </div>
            </div>

            {/*END OF PROFILE PICTURE   */}
            {/* END OF SECTION 1 */}


            {/* SECTION 2 */}
            <div className='myName'>
              <div className='homepage-bio flex-wrap p-5 text-center fs-5 m-5 shadow'>
                <p>
                  A junior developer with a love for clean code and thoughtful design.
                  Beginning my journey when the world hit a global pause in 2020, I delved into my curiosity and creative exploration, and trained as a software engineer through Bootcamp EDX, University of Sydney.
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

              {/* END OF SECTION 2 */}

              {/* --------------
*/}
            {/* SECTION 3 */}
            {/* HOMEPAGE PROJECTS & EXPERIENCE CONTAINER (P&E) */}
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
          {/* END OF SECTION 3 & 3a */}


        </div>
      </div>











            {/* SECTION 4 */}
            {/* CONTACT FORM */}

<>

{/* Contact Form Heading */}
  <section className="text-center m-5">
    <h2 className="display-5 fw-bold p-5">Let’s Connect</h2>
    <p className="lead text-muted">
      Have a question, idea, or opportunity? I'd love to hear from you.
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
          style={{ height: 100}}
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

    </PageWrapper>
  );
}

