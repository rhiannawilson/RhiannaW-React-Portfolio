// Purpose: Entry point of React application. Responsible for rendering the root component APP.JSX into the DOM

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
