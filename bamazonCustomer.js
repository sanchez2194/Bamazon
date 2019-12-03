var mysql = require("mysql");

var inquirer =  require('inquirer');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'bamazon'
});

connection.connect(function(err) {
    queryAllProducts();
});

function queryAllProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }
      console.log("-----------------------------------");
    });
  }