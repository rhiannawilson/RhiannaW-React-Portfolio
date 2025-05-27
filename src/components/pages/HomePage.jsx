// ~ HOME PAGE ~ 3 SECTIONS// 
import React, { useEffect } from 'react';
import pfPicNoBg from './pageAssets/pfPicNoBg.png';
// import { Link } from "react-router-dom"; 
import '../pages/styles/pages.css';
import { pages } from './UI/routes';  // Adjust relative path as needed
import NextArrow from './UI/NextArrow';
import PageWrapper from '../pages/UI/PageWrapper';


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
        <div className='col-4 mt-3'>
          <img 
          src={pfPicNoBg} 
          width={250} 
          height={100} 
          className="img-thumbnail float-end img-fluid shadow" 
          alt="Author's profile picture" 
          />
        </div>

        <div className="col">
          <div className="panel-success">
            <h1 className="authorsName panel-heading">
              <br />
              Rhianna Wilson
              </h1>
            <div className="panel-body m-3">
              <h3 className="authorsBio">Junior Web Developer</h3>       <NextArrow />

              </div>
              <h5 className="summary m-3">
              {/* <br></br><strong>Full Stack Web Developer</strong> with 10+ years experience in Office and Event Management background. <br></br><br></br>An adaptable, solutions-oriented professional, logically minded, with various transferable skills and advanced IT proficiency, including experience with <strong>project management</strong> tools such as <strong>Agile methodologies and Scrum principles</strong>. <br></br>  */}

              </h5>
          </div>

        {/*END OF PROFILE PICTURE   */}
        {/* END OF SECTION 1 */}


 {/* SECTION 3b */}
 <div className='homepage-bio flex-wrap p-5 mt-5 text-end shadow'>  
  <p>
    Hi, I’m Rhianna — a junior web developer with a love for clean code and thoughtful design.
    After years of curiosity and creative exploration, I took the leap and trained as a full stack engineer through the University of Sydney.
    Now, I build responsive, intuitive web applications using tools like React, Node.js, and MongoDB.
    Whether I’m styling a sleek interface or structuring a robust backend, I’m driven by a genuine passion for crafting digital experiences that feel as good as they look.
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
        {/* END OF SECTION 3 */}

{/* ----------------------------------------------------------------------
 */}


<div className='experience flex-wrap p-5 mt-5 text-end shadow'>  

        <h3>Experience</h3>

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



        {/* SECTION 3 */}
        <div className='certificates flex-wrap p-5 m-5 mt-5 text-start shadow'>
        <h3 className='certiText'>Resume</h3>

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


        {/* END OF SECTION 3 */}


{/* -------------------------------------------------- */}

        {/* SECTION 4 */}
        <div className='projectsMain mb-5 shadow'>
          <h1>Resume</h1>
          <p>this is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a <br></br>paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is<br></br> a paragraphthis is a paragraphthis is a paragraphthis is<br></br> a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis <br></br>is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraph<br></br>this is a parag<br></br>raphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthi<br></br>s is a paragraphthis is a paragraphthis is a paragraph</p>
        {/* END OF SECTION 4 */}



        </div>
      </div>
    </div>
    </div>
    </PageWrapper>
  );
}

