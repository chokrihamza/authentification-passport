/***Third step */
require('./config/dbConnect')();

/***End of Third step */
//@ etape 1
//touch server.js
const express = require('express');
const app = express();
// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', require('./Routes/user'));
const PORT = 5000
app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`server running at port ${PORT}`)
})

//end of first step
//@ connect to the database mongoAtlas
//second step
//mkdir config 
