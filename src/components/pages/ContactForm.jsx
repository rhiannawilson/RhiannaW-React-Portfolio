// ~ CONTACT FORM ~ //

// import { useState } from 'react';
// import './styles/pages.css';
import PageWrapper from '../pages/UI/PageWrapper';

export default function ContactForm() {
  return(
    <PageWrapper>
       
<>
  <section className="text-center m-5">
    <h2 className="display-5 fw-bold p-5">Let’s Connect</h2>
    <p className="lead text-muted">
      Have a question, idea, or opportunity? I'd love to hear from you.
    </p>

    {/* Contact Form */}
<div className="d-flex p-3 justify-content-center">
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

</PageWrapper>
  )
}
