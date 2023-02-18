//ExpressServer.js

//this is for web api.


import express from 'express';
import bodyParser from 'body-parser';

class ExpressServer {

    //here is the constructor
    constructor(
        hostname = process.env.LOCAL_HOST,
        port = process.env.DEFAULT_PORT2
    ) {
        this.serverName = 'Express Server API';
        this.hostname = hostname;
        this.port = port;

        this.initServer();
    }

    //here is the initServer

    initServer = () => {

        this.server = express();
        this.server.use(bodyParser.json());

        this.server.get('/', (req, res) => {
            res.send('Hello World. Okay guys it is 9 PM!');
        }
        );

        this.server.get('/gohome', (req, res) => {
            res.send('Okay guys. see you tomorrow');
        }
        );

        //LISTEN

        this.server.listen(this.port, () => {
            console.log(`Server ${this.serverName} is listening on port ${this.port}`);
        })
    }
}

export default ExpressServer;