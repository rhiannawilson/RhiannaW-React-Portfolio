// import { useState } from 'react';
// import './styles/pages.css';

export default function ContactForm() {
  return(
        <>
{/* First and Last Name input boxes  */}
          <form>
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
  {/* email address section */}
    <div className="m-3">
      <input
        type="email"
        className="form-control"
        placeholder="Email Address"
        aria-label="Email Address"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text"></div>
    </div>

{/* comments section */}
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

{/* submit button */}
     <button type="submit" className="btn btn-primary m-3">
      Submit
    </button>

    {/* end of form */}
  </form>

  {/* end of contactform return */}
</>
  )
}









