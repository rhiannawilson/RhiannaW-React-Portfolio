// Purpose: 
// this is the root component of you React application, 
// serving as the MAIN container for all other components

import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage'
import Nav from './components/Nav'
import Footer from './components/Footer'
// import Alert from './components/pages/UI/Alert'
// import Projects from './components/pages/Projects'; 
import ContactForm from './components/pages/ContactForm';

// We create a couple variables which contain strings
// const message = 'All fields are required';
// const alertType = "danger"

export default function App() {
  return (
<div>
      <Nav />
      <Header />
      <HomePage />
      <Footer />
      <ContactForm />
      {/* <Alert type={alertType} message={message} />; */}
</div>
  );
}





// app.jsx file imports our styling app.css and our header, homepage, nav and footer