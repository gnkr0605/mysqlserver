/*
    this file used to import the modules
*/
//create the rest object
var app = require("./config/imports").express();
//import bodyparser module
var bodyparser = require("./config/imports").bodyparser;
//set the json as MIME Type
app.use(bodyparser.json());
//parse the json or read the post parameters
app.use(bodyparser.urlencoded({extended:false}));
//import cors module
var cors = require("./config/imports").cors;
//enable cors or ports communication
app.use(cors());
// use fetch module
app.use("/fetch",require("./fetch/fetch"));
// use insert module
app.use("/insert",require("./insert/insert"));
// use update module
app.use("/update",require("./update/update"));
// use delete module
app.use("/delete",require("./delete/delete"));
//assign the port no
app.listen(8080);
console.log("Server Listening the port no.8080");
