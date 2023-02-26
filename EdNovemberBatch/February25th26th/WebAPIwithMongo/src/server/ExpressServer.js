import express from "express"
const bodyParser = require('body-parser');
//import mongo client
//const MongoClient = require('mongodb').MongoClient;
import { MongoClient, ObjectId } from 'mongodb';

/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */

//connection string

const connectionstring = 'mongodb+srv://monkey:3ClVr3J5HLsuu9w7@cluster0.cckieyd.mongodb.net/test';
//const connectionstring = 'mongodb+srv://monkey:@cluster0.cckieyd.mongodb.net/test';

class ExpressServer {
  constructor(hostname = process.env.LOCAL_HOST, port = process.env.DEFAULT_PORT2) {
    this.serverName = 'Express Server API';
    this.hostname = hostname;
    this.port = port;

    //Auto Start Server
    this.initServer()

  }

  initServer = () => {
    //Create Server
    this.server = express()

    this.server.use(bodyParser.json()); // for parsing application/json
    this.server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    this.server.get('/user', (req, res) => {
      res.send('Got a GET request at /user')
      // next()
    })

    this.server.get('/dummycar', (req, res) => {
      const somecar = {
        "name": "Mach 5",
        "driver": "Speed Racer"
      }
      res.send(somecar)
      // next()
    })

    //get endpoint for create in mongo db

    this.server.get('/createsimple', (req, res) => {

      async function run() {

        console.log(`async createsimple has started`);

        try {
          console.log(`about to create client object`);

          let cl = new MongoClient(connectionstring);

          console.log(`about to try connect`);

          await cl.connect();
          //we need to get the database
          let db = cl.db("superheroes");
          //we need to get the collection or table
          let collection = db.collection("heroes");

          //we need to create a hero

          let hero = {
            "name": "Spiderman",
            "realname": "Peter Parker"
          }

          //then we do our db operation
          //create 

          let result = await collection.insertOne(hero);

          console.log(result);

          //response object
          const responseObject = {
            "msg": "Got a GET request at /createsimple",
            "result": result
          }

          res.send(responseObject);
        }
        catch (err) {
          console.log(`error in try connect`);
          console.log(err);

          const responseObject = {
            "msg": "Got a GET request at /createsimple",
            "result": err

          }

          console.log(responseObject);

          res.send(responseObject);
          res.status = 500;
        }

      }

      run().catch(console.dir);

    }
    )

    //post endpoint with mongo db

    this.server.post('/createcomplex', (req, res) => {

      //first I have to get the data from the body
      console.log(req.body);

      let tempHero = {
        "name": req.body.name,
        "realname": req.body.realname

      }

      console.log(tempHero)

      async function run() {

        console.log(`async createcomplex has started`);

        let cl = new MongoClient(connectionstring);

        try {

          console.log(`about to try connect`);

          await cl.connect();

          //we need to get the database

          let db = cl.db("superheroes");

          //we need to get the collection or table

          let collection = db.collection("heroes");

          let hero = tempHero;

          //then we do our db operation

          //create

          let result = await collection.insertOne(hero);

          console.log(result);

          //response object

          const responseObject = {

            "msg": "Got a POST request at /createcomplex",

            "result": result

          }

          res.send(responseObject);
        }
        catch (err) {
          console.log(`error in try connect`);
          console.log(err);
        }

      }//end of run

      run().catch(console.dir);

    })

    //get all the rows from mongo db

    this.server.get('/getall', (req, res) => {

      async function run() {

        console.log(`async getall has started`);

        let cl = new MongoClient(connectionstring);

        try {

          console.log(`about to try connect`);

          await cl.connect();


          //we need to get the database

          let db = cl.db("superheroes");

          //we need to get the collection or table

          let collection = db.collection("heroes");

          const cursor = collection.find();

          //this is the empty collection
          //the plan is to add each item by getting it through the cursor
          //this collection becomes the response object
          let items = [];

          //this is the loop that gets each item

          await cursor.forEach(function (item) {

            if(item.hasOwnProperty("realname")){

              if(item.name != null &&
                item.realname != null )
                {
                  let tempItem = {
                    "name": item.name,
                    "realname": item.realname
                  }
    
                  items.push(tempItem);
                }


            }



            //items.push(item);

          });

          console.log(items);

          //response object

          const responseObject = {

            "msg": "Got a GET request at /getall",

            "result": items

          }

          res.send(responseObject);

        }
        catch (err) {
          console.log(`error in try connect`);
          console.log(err);
        }

      } //end of run

      run().catch(console.dir);
    }
    );

      //delete endpoint for mongo db

      this.server.post('/deletespecificherowithid', (req, res) => {

        //first step is get the id from the body

        console.log(req.body);

        let tempId = req.body.id;

        //get object id

        let tempId2 = new ObjectId(tempId);

        console.log(tempId2);

        async function run() {

          console.log(`async deletespecificherowithid has started`);

          let cl = new MongoClient(connectionstring);

          try {

            console.log(`about to try connect`);

            await cl.connect();

            //we need to get the database

            let db = cl.db("superheroes");

            //we need to get the collection or table

            let collection = db.collection("heroes");

            let resultOfDelete = await collection.deleteOne(
              { 
                "_id": tempId2 
              });

            console.log(resultOfDelete);

            //response object

            const responseObject = {

              "msg": "Got a POST request at /deletespecificherowithid",

              "result": resultOfDelete

            }

            //res.status(500).json(resultOBject)
            res.send(responseObject);
          }//end of try
          catch (err) {
            console.log(`error in try connect`);
            console.log(err);
          } //end of catch

        } //end of run

        run().catch(console.dir);

      }//end of delete endpoint
      );


    //get endpoint for batman

    this.server.get('/batman', (req, res) => {
      const batman = {
        "name": "Batman",
        "realname": "Bruce Wayne"
      }
      res.send(batman)
      // next()
    })



    this.server.put('/user', (req, res) => {
      res.send('Got a PUT request at /user')
      // next()
    })

    this.server.delete('/user', (req, res) => {
      res.send('Got a DELETE request at /user')
      // next()
    })

    this.server.post('/', (req, res, next) => {
      console.log(req);
      // next()
    });

    //post endpoint for batman

    this.server.post('/postexample', (req, res) => {
      //console.log(req);
      console.log(req.body);

      const responseObject = {
        "msg": "Got a POST request at /postexample",
        "body": req.body
      }

      res.send(responseObject);
    });

    //post to add two numbers

    this.server.post('/add', (req, res) => {
      //console.log(req);
      console.log(req.body);

      const responseObject = {

        "msg": "Got a POST request at /add",
        "body": req.body,
        "result": req.body.num1 + req.body.num2
      }

      res.send(responseObject);
    });

    this.server.get('/', (req, res) => {
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