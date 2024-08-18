// Purpose: 
// Entry point of React application. 
//Responsible for rendering the root component APP.JSX into the DOM

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import Error from './components/pages/ErrorPage.jsx'
import HomePage from './components/pages/HomePage.jsx';
import ContactForm from './components/pages/ContactForm.jsx';
import Projects from './components/pages/Projects.jsx';
import About from './components/pages/About.jsx';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement:<Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
            path: 'contact',
            element: <ContactForm />,
          },
      ],
    },
  ]);
  
// Render the RouterProvider component
  

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} /> 
 );
      
// // main.jsx renders your App.jsx file 

// ReactDOM.createRoot(document.getElementById('root')).render(
    //     <App/>
    // )