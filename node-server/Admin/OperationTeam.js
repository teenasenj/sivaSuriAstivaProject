const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Atitiva',
  password: 'avantnet',
  port: 5433,
}); 

const Post_operationteammaster = (request, response) => {
   const {operationteam_name, operationteam_dob, operationteam_qualification, operationteam_mobileno, 
    operationteam_emailId, operationteam_doj, operationteam_address, operationteam_refno,createdby} = request.body;
 
   pool.query(
     'select operationteammasterinsert($1,$2,$3,$4,$5,$6,$7,$8,$9)',
     [operationteam_name, operationteam_dob, operationteam_qualification, operationteam_mobileno, 
        operationteam_emailId, operationteam_doj, operationteam_address, operationteam_refno,createdby],
     (error, results) => {
       if (error) {
         throw error;
       }
       response.status(201).send(`Operation Team member created successfully..`);
     }
   );
 };
 const Get_operationteammasterList = (request, response) => {        
    pool.query('SELECT * FROM operationteammaster', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  }; 
 module.exports = {   
    Post_operationteammaster,  
    Get_operationteammasterList,
 }; 
