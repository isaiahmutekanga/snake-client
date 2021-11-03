const net = require("net");
const { conn } = require("./client");
// connection = require("client.js");
//const myObject = require("./client");

//establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   //console.log("You have been disconnected");

//   return conn;
// };

//myObject.conn;
conn();

//connect();
