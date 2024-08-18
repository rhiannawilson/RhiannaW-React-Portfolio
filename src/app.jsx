// Purpose: 
// this is the root component of you React application, 
// serving as the MAIN container for all other components
import { Outlet } from 'react-router-dom';

import PortfolioContainer from "./components/PortfolioContainer";
import Nav from './components/Nav';

// import UI components under UI folder
// import Alert from './components/pages/UI/Alert'


// We create a couple variables which contain strings
// const message = 'All fields are required';
// const alertType = "danger"

function App() {
  return (
<>    
      {/* <Alert type={alertType} message={message} />; */}
{/* <Nav /> */}
<Nav />
      <PortfolioContainer />
      <Outlet />
    </>
  );
}

export default App;




// app.jsx file imports our styling app.css and our header, homepage, nav and footer