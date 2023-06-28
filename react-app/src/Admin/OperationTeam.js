import React,{useState} from 'react';
import axios from '../api/axios';//API Comman page..
import { useNavigate,Link } from "react-router-dom";

const OperationTeamRegistor=()=>{
  //
  const navigate = useNavigate();
  const OperationTeamURL ='operationteammaster';//OperationTeamRegistor calling api..  
  const OperationTeamlistURL ='operationteamlist';
  //const CheckalreadyRegisteredEmailURL ='CheckalreadyRegisteredEmail';//CheckalreadyRegisteredEmail calling api
  //variable declaration
  const [operationteam_name, setOperationTeam_Name] = useState('');
  const [operationteam_dob, setOperationTeam_DOB] = useState('');
  const [operationteam_qualification, setOperationTeam_Qualification] = useState('');
  const [operationteam_mobileno, setOperationTeam_MobileNo] = useState('');
  const [operationteam_emailId, setOperationTeam_EmailId] = useState('');
  const [operationteam_doj, setOperationTeam_DOJ] = useState('');
  const [operationteam_address,setOperationTeam_Address]=useState('');
  const [operationteam_refno,setOperationTeam_RefNo]=useState('');  
  const [createdby,setcreatedby]=useState('1');//1 default for admin
  const [error, setError] = useState(null);  
  const [toggle, setToggle] = useState(false);
  const [OperationTeamlist,setOperationTeamlist]=useState([]);
  //
  const handlemobileNoChange = event => {
    setError(null);
    if (!isValidmobileno(event.target.value)) {
      setError('Mobile No. is invalid');
    } else {
      setError(null);
    }  
    setOperationTeam_MobileNo(event.target.value);
  };
  //Validation controls
  function isValidmobileno(OperationTeam_MobileNo) {
    return /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/.test(OperationTeam_MobileNo);    
  }
  //
  //Register Data
  const fnpostOperationTeamregistrationData = (event) => {    
    event.preventDefault();
    
          axios.post(`${OperationTeamURL}`, 
          {
            operationteam_name,
            operationteam_dob, 
            operationteam_qualification, 
            operationteam_mobileno, 
            operationteam_emailId, 
            operationteam_doj, 
            operationteam_address, 
            operationteam_refno,
            createdby
          }).then((response) => {   

              alert('Operation Team Member created successfully');   
              window.location.reload();
              //navigate("OperationTeam");
              
            
          })
          .catch(error => {
            // handle error
            alert(error);
          }); 
    
  }
  //
  const handletoggle = event => {
    setToggle(!toggle);
    axios.get(`${OperationTeamlistURL}`)
          .then((response) => {   
            const OperationTeamlist =response.data; 
            setOperationTeamlist(OperationTeamlist); 
          })
          .catch(error => {
            // handle error
            alert(error);
          }); 

  };
return(
<>
<main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">            

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Operation Team Member Creation</h5>                    
                  </div>


                </div>
            <div className="card">
                <div className="card-body">
             
              {/* <!-- Multi Columns Form --> */}
              <form className="row g-3" onSubmit={fnpostOperationTeamregistrationData}>
              {!toggle && (<>
                <div className="col-md-6">
                  <label htmlFor="inputName5" className="form-label">Team Member Name</label><span>*</span>
                  <input type="text" className="form-control" id="txtOperationTeam_Name" onChange={(e) => setOperationTeam_Name(e.target.value)} required maxLength={50}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputName5" className="form-label">Date Of Birth</label><span>*</span>
                  <input type="date" className="form-control" id="txtOperationTeam_DOB" onChange={(e) => setOperationTeam_DOB(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputName5" className="form-label">Qualification</label><span>*</span>
                  <input type="text" className="form-control" id="txtOperationTeam_Qualification" onChange={(e) => setOperationTeam_Qualification(e.target.value)} required maxLength={15}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail5" className="form-label">Mobile No.</label><span>*</span>
                  <input type="text" className="form-control" id="txtOperationTeam_MobileNo" onChange={handlemobileNoChange} required maxLength={10}/>
                </div>  
                <div className="col-md-6">
                  <label htmlFor="inputEmail5" className="form-label">Email</label><span>*</span>
                  <input type="email" className="form-control" id="txtOperationTeam_EmailId" onChange={(e) => setOperationTeam_EmailId(e.target.value)} required/>
                </div> 
                <div className="col-md-6">
                  <label htmlFor="inputName5" className="form-label">Date Of Joining</label><span>*</span>
                  <input type="date" className="form-control" id="txtOperationTeam_DOJ" onChange={(e) => setOperationTeam_DOJ(e.target.value)} required/>
                </div>       
                <div className="col-6">
                  <label htmlFor="inputAddress5" className="form-label">Address</label><span>*</span>                  
                  <textarea id="txtOperationTeam_Address" rows="3" cols="40" name="txtOperationTeam_Address" onChange={(e) => setOperationTeam_Address(e.target.value)} required></textarea>
                </div>
              
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>  
                  <button type="reset" className="btn btn-secondary">Reset</button>  
                  <button type="reset" className="btn btn-info" onClick={handletoggle}>View</button>               
                </div>     
                {error && <div class="alert alert-danger alert-dismissible fade show" role="alert">{error}                            
                            </div>}
                </>)}
                {toggle && (
                            
               <div class="card">

                <div class="card-body">
               
                <div className="col-md-12">
                  <h5 class="card-title">Operation Team List</h5>
                </div>              
               {/* <!-- Table with hoverable rows --> */}
                <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOJ</th>
                  </tr>
                </thead>
                <tbody>
                {OperationTeamlist.map((Team) => (
                  <tr key={Team.operationteam_id}>
                    <td>{Team.operationteam_id}</td>                   
                    <td>{Team.operationteam_name}</td>
                    <td>{Team.operationteam_mobileno}</td>
                    <td>{Team.operationteam_emailId}</td>
                    <td>{Team.operationteam_doj}</td>
                  </tr>
                ))}
                
                </tbody>
                </table>
                {/* <!-- End Table with hoverable rows --> */}
                <div className="text-center">                 
                  <button type="reset" className="btn btn-info" onClick={handletoggle}>ADD</button>               
                </div>    
                </div>
                </div> )}                 
                <div className="credits text-center">              
                  Designed by <a href="https://avanttec.net/">Avanttec</a>
                  </div>
               </form>                
                </div>
               {/* <!-- End Multi Columns Form --> */}             

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
export default OperationTeamRegistor;