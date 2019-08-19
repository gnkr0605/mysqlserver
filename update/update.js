/*
    update the data in products table
*/
module.exports = require("../config/imports").express
                    .Router()
                    .post("/",(req,res)=>{
    let conn = require("../config/db_connection");
    let connection = conn.getConnection();
    connection.connect();
    require("../config/queries").update(connection,req,res);
});
