import React,{useState} from 'react';
import axios from '../api/axios';//API Comman page..
import { useNavigate,Link } from "react-router-dom";
const ChemistRegistor=()=>{
  //
  const navigate = useNavigate();
  const ChemistURL ='chemistregistration';//chemistregistration calling api..
  const CityMasterURL ='citymaster';//citymaster calling api..
  const StateMasterURL ='statemaster';//statemaster calling api..
  const CheckalreadyRegisteredEmailURL ='CheckalreadyRegisteredEmail';//CheckalreadyRegisteredEmail calling api
  //variable declaration
  const [chemist_name, setchemist_name] = useState('');
  const [chemist_contactpersonname, setchemist_contactpersonname] = useState('');
  const [chemist_druglicenseno, setchemist_druglicenseno] = useState('');
  const [chemist_mobileno, setchemist_mobileno] = useState('');
  const [chemist_email, setchemist_email] = useState('');
  const [chemist_doorno, setchemist_doorno] = useState('');
  const [chemist_street,setchemist_street]=useState('');
  const [chemist_location,setchemist_location]=useState('');
  const [chemist_city,setchemist_city]=useState('0');
  const [chemist_state,setchemist_state]=useState('0');
  const [chemist_uploadfilespath,setchemist_uploadfilespath]=useState('');
  const [createdby,setcreatedby]=useState('1');//1 default for admin
  const [error, setError] = useState(null);
  const [CityMaster,setCityMasterData] =useState([]);
  const [StateMaster,setStateMasterData]=useState([]);
  const [chemist_emailalreadyReg,setchemist_emailalreadyReg]=useState(false);
  //  
  function isCheckalreadyRegisteredEmail(email) {    
    
    axios.get(`${CheckalreadyRegisteredEmailURL}/${email}`)
    .then((response) => {      
      console.log(response.data);                   
      if(response.data.length>0){
        //console.log(response.data.length+'Gettting true'); 
        //setchemist_emailalreadyReg(true);      
        setchemist_emailalreadyReg(!chemist_emailalreadyReg);      
      }
      else{
        console.log(response.data.length); 
        //setchemist_emailalreadyReg(false +'Gettting false');
      }         
      
    })
    .catch(error => {      
      return false;
      alert(error);
    });     
    if(chemist_emailalreadyReg)
    return true;
    else
    return false;   
    
  }
  //
  //city master
  const getCityMasterList = () => {
    axios.get(`${CityMasterURL}`).then(response => {    
      setCityMasterData(response.data);      
    })
    return CityMaster.map((city) => {
      return (
        <option value={city.cityid} key={city.cityid} >
          {city.cityname}
        </option>
      );
    });
  };
  //
  //State master
  const getStateMasterList = () => {
    axios.get(`${StateMasterURL}`).then(response => {    
      setStateMasterData(response.data);      
    })
    return StateMaster.map((state) => {
      return (
        <option value={state.stateid} key={state.stateid}>
          {state.statename}
        </option>
      );
    });
  };
  //
  //
  const handlemobileNoChange = event => {
    setError(null);
    if (!isValidmobileno(event.target.value)) {
      setError('Mobile No. is invalid');
    } else {
      setError(null);
    }  
    setchemist_mobileno(event.target.value);
  };
  //Validation controls
  function isValidmobileno(chemist_mobileno) {
    return /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/.test(chemist_mobileno);    
  }
  //
  //Register Data
  const fnpostchemistregistrationData = (event) => {    
    event.preventDefault();
    console.log(isCheckalreadyRegisteredEmail(chemist_email));
    if (isCheckalreadyRegisteredEmail(chemist_email)) {
      setError('This email id is already registered, please try another one.');
    }
    else
    {
          axios.post(`${ChemistURL}`, 
          {
            chemist_name,
            chemist_contactpersonname,
            chemist_druglicenseno,
            chemist_mobileno,
            chemist_email,
            chemist_doorno,
            chemist_street,
            chemist_location,
            chemist_city,
            chemist_state,
            chemist_uploadfilespath,
            createdby,
          }).then((response) => {   

              alert('Chemist Registration successfully completed,shortly we contact you...');   
              navigate("/");        
            
          })
          .catch(error => {
            // handle error
            alert(error);
          }); 
    }
  }
  //

return(
<>
<main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-6">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  <span className="d-none d-lg-block">Astitiva</span>
                </a>
              </div>
              {/* <!-- End Logo --> */}

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Chemist Registration</h5>
                    <p className="text-center small">Enter your personal details to registration</p>
                  </div>


                </div>
                <div className="card">
            <div className="card-body">
             
              {/* <!-- Multi Columns Form --> */}
              <form className="row g-3" onSubmit={fnpostchemistregistrationData}>
                <div className="col-md-6">
                  <label htmlFor="inputName5" className="form-label">Pharmacy Name</label><span>*</span>
                  <input type="text" className="form-control" id="txtchemist_name" onChange={(e) => setchemist_name(e.target.value)} required maxLength={50}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputName5" className="form-label">Contact Person Name</label><span>*</span>
                  <input type="text" className="form-control" id="txtchemist_contactpersonname" onChange={(e) => setchemist_contactpersonname(e.target.value)} required maxLength={25}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputName5" className="form-label">Drug License No</label><span>*</span>
                  <input type="text" className="form-control" id="txtchemist_druglicenseno" onChange={(e) => setchemist_druglicenseno(e.target.value)} required maxLength={15}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail5" className="form-label">Mobile No.</label><span>*</span>
                  <input type="text" className="form-control" id="txtchemist_mobileno" onChange={handlemobileNoChange} required maxLength={10}/>
                </div>  
                <div className="col-md-6">
                  <label htmlFor="inputEmail5" className="form-label">Email</label><span>*</span>
                  <input type="email" className="form-control" id="txtchemist_email" onChange={(e) => setchemist_email(e.target.value)} required/>
                </div>        
                <div className="col-6">
                  <label htmlFor="inputAddress5" className="form-label">Door No</label><span>*</span>
                  <input type="text" className="form-control" id="txtchemist_doorno" placeholder="" onChange={(e) => setchemist_doorno(e.target.value)} required maxLength={50}/>
                </div>
                <div className="col-6">
                  <label className="form-label">Street</label><span>*</span>
                  <input type="text" className="form-control" id="txtchemist_street" placeholder="" onChange={(e) => setchemist_street(e.target.value)} required maxLength={50}/>
                </div>
                <div className="col-6">
                  <label className="form-label">Location</label><span>*</span>
                  <input type="text" className="form-control" id="txtchemist_location" placeholder="" onChange={(e) => setchemist_location(e.target.value)} required maxLength={50}/>
                </div>
                <div className="col-md-6">
                  <label className="form-label">City</label><span>*</span>
                  <select id="ddlchemist_city" className="form-select" onChange={(e) => setchemist_city(e.target.value)} required>
                    <option>Choose...</option>                   
                    {getCityMasterList()}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">State</label><span>*</span>
                  <select id="ddlchemist_state" className="form-select" onChange={(e) => setchemist_state(e.target.value)} required>
                    <option>Choose...</option>
                    {getStateMasterList()}
                  </select>
                </div>               
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>  
                  <button type="reset" className="btn btn-secondary">Reset</button>                
                </div>     
                {error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          {error}                            
                            </div>}           
                <div className="credits text-center">              
                  Designed by <a href="https://avanttec.net/">Avanttec</a>
                </div>
              </form>
              {/* <!-- End Multi Columns Form --> */}             

            </div>
            </div>             
             
            </div>
          </div>
        </div>
        </div>

      </section>

    </div>
  </main>
  
</>
)
};
export default ChemistRegistor;