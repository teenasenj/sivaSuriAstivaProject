import React,{ useEffect, useState} from 'react';
import axios from '../api/axios';//API Comman page..
//import { useHistory } from 'react-router-dom';
import { useNavigate,Link } from "react-router-dom";


const loginURL ='getUserDetails';//Login calling method..

const Login=()=>{
    //let history = useHistory();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [LoginData, setLoginData] = useState([]);
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  
    const handleEmailChange = event => {
      setError(null);
      if (!isValidEmail(event.target.value)) {
        setError('Email is invalid');
      } else {
        setError(null);
      }  
      setEmail(event.target.value);
    };
    function isValidEmail(email) {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }

     const fnHandleSubmit =(event) =>{
      event.preventDefault();
      if(email =='')
      {
        setError('Enter email id and proceed!!!');
      }
      else if(password=='')
      {
        setError('Enter password and proceed!!!');
      }
      else if (!isValidEmail(email)) {
        setError('Email is invalid');
      } 
      else
      {
        
          axios.get(`${loginURL}/${email}/${password}`)
          .then((response) => {   
            const _loginInformation =response.data; 
            setLoginData(_loginInformation);   
            //console.log(_loginInformation); 
            // handle success 
            //response.status                     
            if(response.data.length ==1){               
                setauthenticated(true)
                localStorage.setItem("authenticated", true);
                let _username = response.data.map((DataItem)=> DataItem.userfullname);
                localStorage.setItem("loginusername", _username);
              
                navigate("Home"); 
            }
            else{
              setError('Please enter valid Username and Password!!!');
            }         
            
          })
          .catch(error => {
            // handle error
            alert(error);
          }); 
        };
      }
      
          return (

            <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
        
                    <div className="d-flex justify-content-center py-4">
                      <a href="index.html" className="logo d-flex align-items-center w-auto">
                        <img src="assets/img/logo.png" alt=""/>
                        <span className="d-none d-lg-block">Astitiva</span>
                      </a>
                    </div>
        
                    <div className="card mb-3">
        
                      <div className="card-body">
        
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                          <p className="text-center small">Enter your username & password to login</p>
                        </div>
        
                        <form className="row g-3 needs-validation" noValidate onSubmit={fnHandleSubmit}>
        
                          <div className="col-12">
                            <label className="form-label">Username</label>
                            <div className="input-group has-validation">
                              <span className="input-group-text" id="inputGroupPrepend">@</span>
                              <input type="text" name="txtUsername" className="form-control" id="txtUsername" value={email} required onChange={handleEmailChange}/>
                              <div className="invalid-feedback">Please enter your username.</div>
                              
                            </div>
                            
                          </div>
        
                          <div className="col-12">
                            <label  className="form-label">Password</label>
                            <input type="password" name="txtPassword" className="form-control" id="txtPassword" required onChange={(e) => setPassword(e.target.value)}/>
                            <div className="invalid-feedback">Please enter your password!</div>
                          </div>       
                         
                          <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit">Login</button>
                            
                          </div>
                          
                          <div className="col-12">                           
                            <button className="btn btn-link" onClick={()=>{navigate("/ChemistRegistor")}}>Chemist Registration</button>                           
                          </div>
                          {/* {error && <h5 style={{color: 'red'}}>{error}</h5>} */}
                          {error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          {error}                            
                            </div>}
                        </form>
        
                      </div>
                    </div>
        
                    <div className="credits">            
                      Designed by <a href="https://bootstrapmade.com/">Avanttec -Sivasuri</a>
                    </div>
        
                  </div>
                </div>
              </div>
        
            </section>
        
          </div>
          )
      }
      export default Login;


  
