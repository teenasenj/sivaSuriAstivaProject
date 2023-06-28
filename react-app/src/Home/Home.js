import {NavLink, Outlet,useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
  // Redirect
  } else {

    return (
      
      <>
      <Header/>
      <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
             <a className="nav-link ">
                <i className="bi bi-grid"></i>
                <NavLink to="dashboard">Dash Board</NavLink> 
            </a>
            
            </li>
            {/* <!-- End Dashboard Nav --> */}

            <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#Admin-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide"></i><span>Admin</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="Admin-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                <a href="Admin-alerts.html">
                    <i className="bi bi-circle"></i><span>Product Master</span>
                </a>
                </li>
                <li>
                {/* <a onClick={()=>{navigate("/OperationTeam")}}>
                    <i className="bi bi-circle"></i><span>Operation Team</span>
                </a> */}
                <NavLink to="OperationTeam">Operation Team</NavLink> 
                </li>
                <li>
                <a href="Admin-badges.html">
                    <i className="bi bi-circle"></i><span>User Master</span>
                </a>
                </li>        
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#Operation-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide"></i><span>Operation Team</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="Operation-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                <a href="Operation-alerts.html">
                    <i className="bi bi-circle"></i><span>Chemist Registration</span>
                </a>
                </li>
                <li>
                <a href="Operation-accordion.html">
                    <i className="bi bi-circle"></i><span>Inquiry</span>
                </a>
                </li>
                <li>
                <a href="Operation-badges.html">
                    <i className="bi bi-circle"></i><span>Billing</span>
                </a>
                </li> 
                <li>
                <a href="Operation-badges.html">
                    <i className="bi bi-circle"></i><span>Despatch</span>
                </a>
                </li>         
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#Chemist-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide"></i><span>Chemist</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="Chemist-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                <a href="Chemist-alerts.html">
                    <i className="bi bi-circle"></i><span>Inquiry</span>
                </a>
                </li>          
            </ul>
            </li>
            {/* <!-- End Components Nav --> */} 

        </ul>

        </aside>
        <Outlet /> 
         {/* <!-- End Page Title --> */}  
      {/* <main id="main" className="main">
        <div className="pagetitle">
            <h1>Home</h1>  
                
        </div>      
              
     </main> */}
    
    <Footer/>
    </>
    /* <!-- End #main --> */
    );



    
  }
};

export default Home;