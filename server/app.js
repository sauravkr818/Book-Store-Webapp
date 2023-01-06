const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');



const app = express();

// middlewares

// allow cors

app.use(cors({
    origin: '*'
}));

// all type of data should be json
app.use(express.json());
app.use('/books', router);

// mongodb+srv://sauravkr818:IPnPxaMJQ3L7dePG@cluster0.hliokzj.mongodb.net/?retryWrites=true&w=majority
// mongodb://localhost:27017/test
// mongodb+srv://saurav:weA5Q8aGXUlTml8E@cluster0.hliokzj.mongodb.net/?retryWrites=true&w=majority
// new database - business.sauravkr818@gmail.com
// iOPWf74xEgeNzCcN

// mongodb+srv://sauravkr818:<password>@cluster0.pydunh9.mongodb.net/?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://sauravkr818:LL21Yw7VmWdOPkbZ@cluster0.pydunh9.mongodb.net/?retryWrites=true&w=majority").then( () => console.log("Connected to database"))
.then(() => {
    app.listen(5000)
}).catch((err)=> console.log(err));

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sauravkr818:LL21Yw7VmWdOPkbZ@cluster0.pydunh9.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("books");
//   console.log("Connected to database");
//   // perform actions on the collection object
//   client.close();
// });


console.log("hello world");

