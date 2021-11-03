const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  console.log('You have been disconnected');

  return conn;
};


//module.exports = { connect };
module.exports = { conn: conn };
