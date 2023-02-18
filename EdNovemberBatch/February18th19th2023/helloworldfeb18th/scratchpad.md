import express from "express"
const bodyParser = require('body-parser');

/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */
class ExpressServer {
  constructor(hostname =process.env.LOCAL_HOST, port= process.env.DEFAULT_PORT2) {
    this.serverName = 'Express Server API';
    this.hostname = hostname;
    this.port = port;

    //Auto Start Server
    this.initServer()
    
  }

  initServer=()=> {
    //Create Server
    this.server = express()

      this.server.use(bodyParser.json()); // for parsing application/json
      this.server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

      this.server.get('/user', (req, res)=> {
        res.send('Got a GET request at /user')
        // next()
      })

      this.server.get('/dummycar', (req, res)=> {
        const somecar = {
          "name" : "Mach 5",
          "driver" : "Speed Racer"
        }
        res.send(somecar)
        // next()
      })

      this.server.put('/user', (req, res)=> {
        res.send('Got a PUT request at /user')
        // next()
      })

      this.server.delete('/user', (req, res)=> {
        res.send('Got a DELETE request at /user')
        // next()
      })

      this.server.post('/', (req, res, next) => {
        console.log(req);
        // next()
        });
  
      this.server.get('/', (req, res)=> {
        res.send('Hello World from EXPRESS SERVER!')
        // next()
      })

    //Start Listening
    this.server.listen(this.port, () => {
      console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
    })
  }
}

//EXPORT MODULE
module.exports = ExpressServer