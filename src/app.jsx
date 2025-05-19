// Purpose: 
// this is the root component of you React application, 
// serving as the MAIN container for all other components

// import { Outlet } from 'react-router-dom';

// import PortfolioContainer from "./components/PortfolioContainer";
// import Nav from './components/Navigation';
// import Footer from "./components/Footer";

// // import UI components under UI folder
// // import Alert from './components/pages/UI/Alert'


// // We create a couple variables which contain strings
// // const message = 'All fields are required';
// // const alertType = "danger"

// function App() {
//   return (
//     <>
//       {/* <Alert type={alertType} message={message} />; */}
//       <Nav />
//       <PortfolioContainer />
//       <Outlet />
//     </>
//   );
// }



// export default App;




// app.jsx file imports our styling app.css and our header, homepage, nav and footer


import { Outlet } from 'react-router-dom';

import Nav from './components/Navigation';
import Footer from "./components/pages/Footer";
import './app.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <main className="flex-grow-1">
        <Outlet /> {/* Only this handles your page content */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

