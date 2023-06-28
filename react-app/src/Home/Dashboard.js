import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
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
    
      <main id="main" className="main">

      <div className="pagetitle">
        <h1>Dashboard</h1>
        {/* <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav> */}
      </div>
      {/* <!-- End Page Title --> */}
  
      <section className="section dashboard">
        <div className="row">  
        
        </div>
      </section>
  
    </main>
    
    
    </>
    /* <!-- End #main --> */
    );



    
  }
};

export default Dashboard;