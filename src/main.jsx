import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx';
import Auth from './Auth'; // Correct import
import { BrowserRouter } from 'react-router-dom'; // Correct import
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth> {/* Use Auth as a wrapper around the entire application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth>,
);
