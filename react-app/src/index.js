import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from'./Login/Login';
import Dashboard from "./Home/Dashboard";
import ChemistRegistor from './ChemistRegistor/ChemistRegistor';
import OperationTeam from './Admin/OperationTeam';
import Home from './Home/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>      
   <BrowserRouter>
      <Routes>       
        <Route index element={<Login />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/ChemistRegistor" element={<ChemistRegistor/>} />   
        <Route path="Home" element={<Home />}>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="OperationTeam" element={<OperationTeam/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
