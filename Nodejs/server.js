const express = require("express");

const app = express();

require("./config/connect");

const cors = require("cors");

app.use( cors() );

app.use(express.json());

const routerAdmin = require('./routes/admin');

const routerCour = require("./routes/cour");

app.use( '/cour' , routerCour );

app.use( '/admin' , routerAdmin );


app.use( '/getimage' , express.static('./uploads') );

app.use(express.static('./angular'));

app.listen(3000 , ()=>{
    console.log("Server Work");
});
