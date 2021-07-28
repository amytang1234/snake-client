const net = require("net");
const connect = function () {
    const conn = net.createConnection({
      host: '135.23.223.133',// IP address here,
      port: 50542// PORT number here,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on('data', (data) => {
      console.log('Server says: ', data);
    });
    conn.Name = "QWE";
    conn.on('connect', () => {
      console.log("Successfully connected to game server!");
      conn.write('Hello from client!');
      conn.write(conn.Name)
    });
    
    return conn;
  };
 
  console.log("Connecting ...");
connect();