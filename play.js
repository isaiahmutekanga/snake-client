const net = require("net");
// connection = require("client.js");
const myObject = require("./client");

//establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: // IP address here,
//     port: // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   console.log('You have been disconnected');

//   return conn;
// };

//myObject();

console.log("Connecting ...");
connect();
