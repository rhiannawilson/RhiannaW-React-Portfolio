import viewOfProject from './pageAssets/ViewOfProject.jpeg';

export default function Projects() {
  return (
    <div className='projectsPage'>
      <h1>Projects Page</h1>

      <div className='projContainer'>

        <div className='row g-3'>

          {/* First Card */}
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <a href="https://cmsify.onrender.com" target="_blank" rel="noopener noreferrer">
               <img src={viewOfProject} alt='CMSify Project Image of Website' className="card-img-top" />
              Click here to view </a>

              <div className='card-body'>
                <h4 className='card-title'>Project One (title)</h4>
                <p className='card-text'>This is where a short description will go</p>
              </div>
            </div>
          </div>

          {/* Second Card */}

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <img src="project.jpg" alt='Project IMAGE' className="card-img-top" />
              <div className='card-body'>
                <h4 className='card-title'>Project Two (title)</h4>
                <p className='card-text'>This is where a short description will go</p>
              </div>
            </div>
          </div>


          {/* Third Card */}

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <img src="project.jpg" alt='Project IMAGE' className="card-img-top" />
              <div className='card-body'>
                <h4 className='card-title'>Project Three (title) </h4>
                <p className='card-text'>This is where a short description will go</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}