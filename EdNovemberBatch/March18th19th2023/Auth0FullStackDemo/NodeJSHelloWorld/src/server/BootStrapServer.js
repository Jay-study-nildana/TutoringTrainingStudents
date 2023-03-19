import express from "express"
const bodyParser = require('body-parser');
import path from "path" //for loading files from a path. serve bootstrap site for example.

/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */
class BootStrapServer {
  constructor(hostname =process.env.LOCAL_HOST, port= process.env.DEFAULT_PORT4) {
    this.serverName = 'Bootstrap Server';
    this.hostname = hostname;
    this.port = port;

    // this.htmlPath = path.join(__dirname, 'bootstrapsite');
    this.htmlPath = path.join('bootstrapsite');

    //Auto Start Server
    this.initServer()
    
  }

  initServer=()=> {
    //Create Server
    this.server = express()

    //serve bootstrap site
    //app.use(express.static(htmlPath));
    this.server.use(express.static(this.htmlPath));
  
    // this.server.get('/', (req, res)=> {
    // res.send('Hello World from '+this.serverName)
    // // next()
    // })

    //Start Listening
    this.server.listen(this.port, () => {
      console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
      console.log(`bootstrap site location is: ${this.htmlPath}`)
    })
  }
}

//EXPORT MODULE
module.exports = BootStrapServer