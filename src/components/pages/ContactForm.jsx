import { useState } from 'react';
import '../pages/pages.css';

// import Alert from './UI/Alert';

// Here we set 2 variables for first and last name using useState
// ('') this sets a default value 'starting value'
function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (e) => {
    // get value and name of the input which triggered a change
    const { name, value} = e.target;

    // this statement calls either first or last name based on what field the user is typing in

    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hey ${firstName} ${lastNAme}`);
    setFirstName('');
    setLastName('');
  };
  
  return(
    <div className="container text-center">
      <h1>CONTACT FORM{firstName} </h1>
        <p>
          Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
          molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
          magna a ultrices. Aenean pellentesque placerat lacus imperdiet
          efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
          mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
          posuere, eget tristique dui dapibus. <br></br>Maecenas fermentum elementum
          faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
          ipsum. Nulla facilisi. Sed ut erat ligula. <br></br>Nam tincidunt nunc in nibh
          dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. <br></br>Etiam ornare rutrum felis at
          rhoncus. Etiam vel condimentum magna, quis tempor nulla.
        </p>
    </div>
  )
}
















































//   const [alert, setAlert] = useState({ type: '', message: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate a submission process
//     const success = true; // Change this based on submission result

//     if (success) {
//       setAlert({ type: 'success', message: 'Form submitted successfully!' });
//     } else {
//       setAlert({ type: 'danger', message: 'There was an error submitting the form.' });
//     }
//   };

//   return (
// <form>
//     <h1>Get in touch</h1>
//     <p>
//       {/* Use the Chrome DevTools to inspect the elements. Try to force <code>:focus</code> state on some of them and look for CSS properties like <code>appearance</code>, <code>outline</code>, and <code>cursor</code>. */}
//     </p>
//     <p>
//       <label htmlFor="username">Name:</label>
//       {/* <!-- This element has a CSS declaration of `cursor: text` --> */}
//       <input id="username" type="text" placeholder="First & Last" />
//     </p>
//     <p>
//       <label  htmlFor="email">E-mail:</label>
//       <input id="email" type="text" placeholder="me@example.com" />
//     </p>
//     <p>
//       {/* <label htmlFor="expertise">CSS level of expertise:</label> */}
//       {/* <!-- This element has a CSS declaration of `appearance: menulist` --> */}
//       {/* <select id="expertise">
//         <option>Beginner</option>
//         <option selected>Intermediate</option>
//         <option>Advanced</option>
//       </select> */}
//     </p>
//     <p>
//       <label htmlFor="comment">Message:</label>
//       <textarea id="comment" placeholder="Write in here"></textarea>
//     </p>
//     <p>
//       <input className="checkbox" id="agreement" type="checkbox" />
//       <label htmlFor="agreement">I agree to share my e-mail address with The CSS Blog</label>
//     </p>
//     <p>
//       {/* <!-- When this element is in a :focus state, the CSS `outline` property is applied --> */}
//       <button>Submit</button>
//     </p>
//   </form>
//   )
// }

export default ContactForm;







// function Nav() {
//     return (
//   <div>
//   <nav className="nav">
//       <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
  
//           <a href="https://github.com/ANDRESGOM77" target="_blank" rel="noopener noreferrer">
//           Andres,
  
//       </ul>
//   </nav>
//   </div>
//     );
//   }
       
  
//   export default Nav;






















// function ContactForm() {
//   const [alert, setAlert] = useState({ type: '', message: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate a submission process
//     const success = true; // Change this based on submission result

//     if (success) {
//       setAlert({ type: 'success', message: 'Form submitted successfully!' });
//     } else {
//       setAlert({ type: 'danger', message: 'There was an error submitting the form.' });
//     }
//   };

//   return (
//     <div>
//       {alert.message && <Alert type={alert.type} message={alert.message} />}
//       <form onSubmit={handleSubmit}>
//         {/* Your form fields here */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;

// import { useState } from 'react';
// // import emailjs from '';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({
//     email: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateEmail(formData.email)) {
//       setErrors({ email: 'Invalid email address' });
//       return;
//     }

//     setErrors({ email: '' });

//     // Send email using EmailJS
//     // emailjs.send(
//     // 'service_ibi5d5q',
//     // 'template_ry1fhrv',
//     {
//       from_name: formData.name,
//       from_email: formData.email,
//       message: formData.message,
//     },
//     '72iuHhNaIaZI3AnTa'
//     )
//     .then((response) => {
//       console.log('SUCCESS!', response.status, response.text);
//       alert('Email sent successfully!');
//     }, (error) => {
//       console.log('FAILED...', error);
//       alert('Failed to send email. Please try again later.');
//     });

//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="container mt-5 contact">
//       <h2>Contact Form:</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <div className="text-danger">{errors.email}</div>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="message" className="form-label">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             className="form-control"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="btn btn-danger">Send</button>
//       </form>
//     </div>
//   );
// };
// export default ContactForm;
