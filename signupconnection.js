var mysql=require("mysql")

var customercon = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"onlinerestaurant"
});

module.export = customercon;