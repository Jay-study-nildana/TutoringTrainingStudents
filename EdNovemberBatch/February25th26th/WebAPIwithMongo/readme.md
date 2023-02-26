# web api with mongo db

simple web api with mongo db

# reference

1. https://github.com/Jay-study-nildana/NodeJSForStudents/tree/main/MongoDB_API_CRUD_HelloWorld

# Mongo DB API CRUD Hello World

Mongo DB API CRUD Hello World

Note : if a package is missing, just install the missing package. 

For example.

```
    npm install ejs
```

Note : remember to have Postman installed. I have included a Postman collection in the repo. 

# things to do before running this

1. get the .env file ready.
1. get your mongo db, preferably, the cloud db, ready.
1. connect with mongo db compass and confirm credentials.
1. in the project, update connection string, "let connectionstring = 'mongodb://localhost:27017';"
1. npm install

if all goes as planned, try this endpoint.

http://localhost:8081/mongodb/addhero

```
    {
        "resultOfDb": {
            "acknowledged": true,
            "insertedId": "63fa168e00821f279bd65d32"
        }
    }
```

# .env file

You must create a .env file which looks like this. 

```
    LOCAL_HOST = "localhost"
    DEFAULT_PORT = "8080"
    DEFAULT_PORT2 = "8081"
    DEFAULT_PORT3 = "8082"
    DEFAULT_PORT4 = "8083"
```

# endpoints

1. http://localhost:8081/mongodb/addhero
1. http://localhost:8081/mongodb/addherogreenlantern

# Output - mongo db API

1. http://localhost:8081/mongodb/helloworld - get all the list of super heroes.
1. http://localhost:8081/mongodb/addhero - add a default hero.
1. http://localhost:8081/mongodb/updatehero - update a hero 
1. http://localhost:8081/mongodb/addherogreenlantern - for a quick add/delete combo. 
1. check even more endpoints in the included Postman collection. 

# Output - even more stuff

1. http://localhost:8081/ - a simple form without bootstrap. 
1. http://localhost:8081/about - simple about page
1. http://localhost:8081/SampleFormWithBS - simple form with bootstrap.
1. http://localhost:8081/dummycar - a simple json object without any lodash
1. http://localhost:8081/dummycarwithlodash - json with lodash.

# Output - basics

```
    npm run dev
```

note : you can modify the .env file to change port number. but please dont. keep it default and simple.

1. http://localhost:8081/ - a simple form without bootstrap. 
1. http://localhost:8081/about - simple about page
1. http://localhost:8081/SampleFormWithBS - simple form with bootstrap.
1. http://localhost:8081/dummycar - a simple json object without any lodash
1. http://localhost:8081/dummycarwithlodash - json with lodash.

# References

1. https://medium.com/projectwt/setup-a-simple-nodejs-server-with-api-endpoints-and-static-bootstrap-site-a809ebcb8e74
1. https://hevodata.com/learn/node-js-with-mongodb-crud/
1. https://www.mongodb.com/docs/compass/current/embedded-shell/
1. https://www.postman.com/downloads/

# Hire Me

I work as a full time freelance coding tutor. Hire me at [UpWork](https://www.upwork.com/fl/vijayasimhabr) or [Fiverr](https://www.fiverr.com/jay_codeguy). 

# Hobbies

I try to maintain a few hobbies.

1. Podcasting. You can listen to my [podcast here](https://stories.thechalakas.com/listen-to-podcast/).
1. Photography. You can see my photography on [Unsplash here](https://unsplash.com/@jay_neeruhaaku).
1. Digital Photorealism 3D Art and Arch Viz. You can see my work on this on [Adobe Behance](https://www.behance.net/vijayasimhabr).
1. Writing and Blogging. You can read my blogs. I have many medium Publications. [Read them here](https://medium.com/@vijayasimhabr).

# important note 

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

I can be reached through my website - [Jay's Developer Profile](https://jay-study-nildana.github.io/developerprofile)