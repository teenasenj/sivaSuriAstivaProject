const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Atitiva',
  password: 'avantnet',
  port: 5433,
});

const getCityMasterList = (request, response) => {        
      pool.query('SELECT * FROM citymaster order by cityname', (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      });
    }; 
    const getStateMasterList = (request, response) => {        
        pool.query('SELECT * FROM statemaster order by statename', (error, results) => {
          if (error) {
            throw error;
          }
          response.status(200).json(results.rows);
        });
      };

 module.exports = { 
    getCityMasterList,
    getStateMasterList,
 }; 
