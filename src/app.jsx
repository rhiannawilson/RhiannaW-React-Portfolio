// Purpose: 
// this is the root component of you React application, 
// serving as the MAIN container for all other components
import './App.css';

import PortfolioContainer from "./components/PortfolioContainer";
import Header from './components/Header';
import Footer from './components/Footer';

// import UI components under UI folder
// import Alert from './components/pages/UI/Alert'


// We create a couple variables which contain strings
// const message = 'All fields are required';
// const alertType = "danger"

export default function App() {
   
  return (
<div>
      <PortfolioContainer />
      <Header />
      <Footer />

      {/* <Alert type={alertType} message={message} />; */}

      
</div>
  );
}





// app.jsx file imports our styling app.css and our header, homepage, nav and footer