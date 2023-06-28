const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Atitiva',
  password: 'avantnet',
  port: 5433,
}); 

const Post_chemistregistration = (request, response) => {
   const {chemist_name, chemist_contactpersonname, chemist_druglicenseno, 
     chemist_mobileno, chemist_email, chemist_doorno, chemist_street, chemist_location, 
     chemist_city, chemist_state, chemist_country,chemist_uploadfilespath,createdby} = request.body;
 
   pool.query(
     'select chemist_registrationinsert($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)',
     [chemist_name, chemist_contactpersonname, chemist_druglicenseno, 
         chemist_mobileno, chemist_email, chemist_doorno, chemist_street, chemist_location, 
         chemist_city, chemist_state, chemist_country,chemist_uploadfilespath,createdby],
     (error, results) => {
       if (error) {
         throw error;
       }
       response.status(201).send(`Chemist Registration successfully completed,shortly we contact you...`);
     }
   );
 };
 const   GetStatusCheckalreadyRegisteredEmail = (request, response) => {    
  const chemist_email = request.params.chemist_email;  
  pool.query('SELECT * FROM chemist where chemist_email=$1',[chemist_email], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}; 
 module.exports = {   
  Post_chemistregistration,
  GetStatusCheckalreadyRegisteredEmail,
 }; 
