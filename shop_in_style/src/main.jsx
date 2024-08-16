import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./assets/css/style.css";
// import file admin 
import "./assets/admin/css/bootstrap.min.css";
import "./assets/admin/css/bootstrap-icons.css";
import "./assets/admin/css/apexcharts.css";
import "./assets/admin/css/main.css";

// import js file admin 

import "./assets/admin/js/jquery.min.js";
import "./assets/admin/js/bootstrap.bundle.min.js";
import "./assets/admin/js/apexcharts.min.js";

// import tailwind 
import "./assets/confix-tailwind/tailwind.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
