/*
    delete the data from products table
*/
module.exports = require("../config/imports").express
                    .Router()
                    .post("/",(req,res)=>{
    let conn = require("../config/db_connection");
    let connection = conn.getConnection();
    connection.connect();
    require("../config/queries").delete(connection,req,res);
});
