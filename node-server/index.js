const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

const db = require('./Login');//for login pages...
const chemistregistration = require('./ChemistReistration/Chemistregistration');//for chemist registration...
const Masters = require('./Masters/Masters');//for masters...
const OperationTeam = require('./Admin/OperationTeam');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

// app.get('/users', db.getUsers);
// app.get('/users/:id', db.getUserById);
//app.post('/users', db.createUser);
// app.put('/users/:id', db.updateUser);
// app.delete('/users/:id', db.deleteUser); 
 app.get('/allusers', db.getAllUserName);
 app.get('/getUserDetails/:_username/:_password', db.getUserByNameandpassowrd);
 app.post('/chemistregistration',chemistregistration.Post_chemistregistration);
 app.get('/citymaster',Masters.getCityMasterList);
 app.get('/statemaster',Masters.getStateMasterList);
 app.get('/CheckalreadyRegisteredEmail/:chemist_email',chemistregistration.GetStatusCheckalreadyRegisteredEmail);
 app.post('/operationteammaster',OperationTeam.Post_operationteammaster);
 app.get('/operationteamlist',OperationTeam.Get_operationteammasterList);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
