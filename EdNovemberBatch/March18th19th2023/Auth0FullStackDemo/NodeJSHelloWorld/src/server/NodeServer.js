import http from "http"

/**
 * Example of using ES6 syntectic sugar to create Node JS server
 */
class NodeServer {
  constructor(hostname =process.env.LOCAL_HOST, port= process.env.DEFAULT_PORT3) {
    this.serverName = 'Node Server';
    this.hostname = hostname;
    this.port = port;

    //Auto Start Server
    this.initServer()
    
  }

  initServer=()=> {
    //Create Server
    this.server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(this.sayHello());
    });
    
    //Start Listening
    this.server.listen(this.port, this.hostname, () => {
      console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
    });
  }
  
  sayHello=()=> {
    return ` Hello World from ${this.serverName} Running at http://${this.hostname}:${this.port}/`;
  }

}

//EXPORT MODULE
module.exports = NodeServer