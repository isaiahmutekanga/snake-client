const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: IM");
    //setTimeout();
  });
  // setInterval(function () {
  //   conn.write("Move: down");
  // }, 3000);

  return conn;
};

module.exports = { connect };
