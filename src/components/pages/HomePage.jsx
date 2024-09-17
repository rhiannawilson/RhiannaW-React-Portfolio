// ~ HOME PAGE ~ 3 SECTIONS// 

import pfPicNoBg from './pageAssets/pfPicNoBg.png';

export default function HomePage() {
  // p-5 m-3
  return (

// main homepage div
    <div>


    {/*     // SECTION 1 */}
    <div className="container-fluid p-5">
      <div className='row'>
        <div className='col-4'>
          <img src={pfPicNoBg} width={250} height={100} className="img-thumbnail float-end img-fluid shadow" alt="Author's profile picture" />
        </div>

        <div className="col">
          <div className="panel-success">
            <h1 className="panel-heading p-3">Rhianna Wilson</h1>
            <div className="panel-body m-3">
              <h3>UX | UI Designer and Web Developer</h3></div>
          </div>
        </div>
        {/*END OF PROFILE PICTURE   */}
        {/* END OF SECTION 1 */}

{/* ----------------------------------------------------------------------
 */}
        {/* SECTION 2 */}
        <div className='certificates flex-wrap p-5 m-5 mt-5 text-end'>
        <h3 className='certiText'>Certificates</h3>

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


        {/* END OF SECTION 2 */}


{/* -------------------------------------------------- */}

        {/* SECTION 3 */}
        <div className='projectsMain'>
          <h1>Resume</h1>
          <p>this is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a <br></br>paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is<br></br> a paragraphthis is a paragraphthis is a paragraphthis is<br></br> a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis <br></br>is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraph<br></br>this is a parag<br></br>raphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthi<br></br>s is a paragraphthis is a paragraphthis is a paragraph</p>
        {/* END OF SECTION 3 */}



        </div>
      </div>
    </div>
    </div>
  );
}

