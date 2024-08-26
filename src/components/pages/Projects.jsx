import viewOfProject from './pageAssets/ViewOfProject.jpeg';

export default function Projects() {
  return (
    <div className='projectsPage container '>
      <h1 className="">Projects</h1>

      {/* Display Project Cards on Main Page - FIRST CARD */}
      <div className='row flex-wrap p-4 m-2 '>
        {/* First Card */}
        <div className='col-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-white rounded'>
          <div className='card'>
            <a href="https://cmsify.onrender.com" target="_blank" rel="noopener noreferrer">
              <img src={viewOfProject} alt='CMSify Project Image of Website' className="card-img-top" />
              Click here to view
            </a>
            <div className='card-body'>
              <h4 className='card-title'>Project One (title)</h4>
              <div className="modal-footer">

                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  data-toggle="modal"
                  data-target="#exampleModalScrollable"
                >
                  Keep me
                </button>


{/* POP UP MODAL */}
                {/* Scrollable Modal for Short Descriptions */}
                <div
                  className="modal fade"
                  id="exampleModalScrollable"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalScrollableLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableLabel">
                          Project Description
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className='projContainer'>
                          <div className='row g-3'>

                            {/* First Description */}
                            <div className='col-12'>
                              <div className='card'>
                                <div className='card-body'>
                                  <h4 className='card-title'>Project One (title)</h4>
                                  <p className='card-text'>This is where a short description will go thank yu for being here thank yu for being here</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* SECOND CARD */}

          {/* First Card */}
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <a href="https://cmsify.onrender.com" target="_blank" rel="noopener noreferrer">
                <img src={viewOfProject} alt='CMSify Project Image of Website' className="card-img-top" />
                Click here to view
              </a>
              <div className='card-body'>
                <h4 className='card-title'>Project Two (title)</h4>
                <div className="modal-footer">

                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    data-toggle="modal"
                    data-target="#exampleModalScrollable"
                  >
                    Keep me
                  </button>


{/* POP UP MODAL */}

                  {/* Scrollable Modal for Short Descriptions */}
                  <div
                    className="modal fade"
                    id="exampleModalScrollable"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalScrollableLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalScrollableLabel">
                            Project Description
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className='projContainer'>
                            <div className='row g-3'>

                              {/* First Description */}
                              <div className='col-12'>
                                <div className='card'>
                                  <div className='card-body'>
                                    <h4 className='card-title'>Project Two (title)</h4>
                                    <p className='card-text'>This is where a short description will go thank yu for being here thank yu for being here</p>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        {/* THIRD CARD */}
          {/* First Card */}
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <a href="https://cmsify.onrender.com" target="_blank" rel="noopener noreferrer">
                <img src={viewOfProject} alt='CMSify Project Image of Website' className="card-img-top" />
                Click here to view
              </a>
              <div className='card-body'>
                <h4 className='card-title'>Project Three (title)</h4>
                <div className="modal-footer">

                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    data-toggle="modal"
                    data-target="#exampleModalScrollable"
                  >
                    Keep me
                  </button>



{/* POP UP MODAL */}
                  {/* Scrollable Modal for Short Descriptions */}
                  <div
                    className="modal fade"
                    id="exampleModalScrollable"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalScrollableLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalScrollableLabel">
                            Project Description
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className='projContainer'>
                            <div className='row g-3'>

                              {/* First Description */}
                              <div className='col-12'>
                                <div className='card'>
                                  <div className='card-body'>
                                    <h4 className='card-title'>Project Three (title)</h4>
                                    <p className='card-text'>This is where a short description will go thank yu for being here thank yu for being here</p>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div>
</div>


  );
}
