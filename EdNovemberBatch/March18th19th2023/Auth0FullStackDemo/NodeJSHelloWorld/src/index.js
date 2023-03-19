// import {http} from 'http'

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

import NodeServer from "./server/NodeServer"
import ExpressServer from "./server/ExpressServer"
import BootStrapServer from "./server/BootStrapServer"
import dotenv from "dotenv"
dotenv.config()

//use one of the two servers below.

// Start Node Server
const WebServer = new NodeServer(); //for basic website style

//Start Express JS Server
const expressServer = new ExpressServer(); //for api server style

//start BootStrap site.
const bootStrapServer = new BootStrapServer();