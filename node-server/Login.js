const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Atitiva',
  password: 'avantnet',
  port: 5433,
});
/* const getUsers = (request, response) => {
 pool.query('SELECT * FROM usermaster', (error, results) => {
   if (error) {
     throw error;
   }
    response.status(200).json(results.rows);
     });
     }; */

const getAllUserName = (request, response) => {        
      pool.query('SELECT * FROM usermaster', (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      });
    }; 
const   getUserByNameandpassowrd = (request, response) => {  
  //const { _username, _password } = request.body;
  const _username = request.params._username;
  const _password = request.params._password;
  pool.query('SELECT * FROM usermaster where username=$1 and password=$2',[_username,_password], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}; 

// const createUser = (request, response) => {
//   const { name, email } = request.body;

//   pool.query(
//     'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//     [name, email],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(201).send(`User added with ID: ${results.rows[0].id}`);
//     }
//   );
// };

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`User deleted with ID: ${id}`);
//   });
// };

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// };

 module.exports = { 
  getAllUserName,
  getUserByNameandpassowrd,
 }; 
