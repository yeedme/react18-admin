import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {HashRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <HashRouter>
     <App />
     </HashRouter>
 
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import LoginOrRegistered from './pages/LoginOrRegistered/LoginOrRegistered';

// ReactDOM.render(
//   <LoginOrRegistered />,
//   document.getElementById('root')
// );

