//instanciate the server
const express = require('express');
const app = express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

//starting the server at 8000 localhost
app.listen(4000, () => {
    console.log('Server is started');
});
 
//get request useing routes
app.get('/', (request, response) => {
    response.send('hello ji yese ho');
});

//post request useing routes
app.post('/api/cars', (request, response) => {
    const { Name, Brand } = request.body;
    console.log(Name);
    console.log(Brand);
    response.send('car submitted')
})


//connect server to database
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MyDatabase', {useUnifiedTopology: true,
 useNewUrlParser: true})
  .then(() => {
    console.log('Connection to the database successful');
  })
  .catch((error) => {
    console.error('Error connecting to the database:',error);
  });

//   const mongoose = require("mongoose");
//  // Import dotenv and load environment variables
// require('dotenv').config();

// const dbConnect = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_URL, {
//             useNewUrlParser: true, // no longer needed in MongoDB Node.js driver v4.0.0+
//             useUnifiedTopology: true, // no longer needed in MongoDB Node.js driver v4.0.0+
//         });

//         console.log("Successfully connected to the database");
//     } catch (error) {
//         console.error("Error connecting to the database:", error.message);
//     }
// };

// module.exports = dbConnect;

