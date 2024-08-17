// Purpose: 
// Entry point of React application. 
//Responsible for rendering the root component APP.JSX into the DOM

import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import './App.css'

// import ContactForm from './components/pages/ContactForm.jsx';
// import Projects from './components/pages/Projects.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App />,
//       children: [
//         {
//           index: 'contact',
//           element: <ContactForm />,
//         },

//         {
//           path: 'about',
//           element: <Projects />,
//         },
//       ],
//     },
//   ]);
  
//   // Render the RouterProvider component
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <RouterProvider router={router} />
//   );
  
// // main.jsx renders your App.jsx file 