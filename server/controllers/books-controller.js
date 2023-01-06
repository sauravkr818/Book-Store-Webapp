const Book = require('../models/Book');



//const mongodb = require("mongodb").MongoClient;
const csvtojson = require('csvtojson');
const mongodb = require('mongodb');
// let url = 'mongodb://localhost:27017/test1';
//let url = "mongodb://username:password@localhost:27017/";
let url = "mongodb+srv://sauravkr818:LL21Yw7VmWdOPkbZ@cluster0.pydunh9.mongodb.net/?retryWrites=true&w=majority";


// const fs = require("fs");
// const fastcsv = require("fast-csv");
// let stream = fs.createReadStream("./controllers/data2.csv");
// let csvData = [];
// let csvStream = fastcsv
//   .parse()
//   .on("data", function(data) {
//     csvData.push({
//       name: data[1],
//       author: data[2],
//       price: data[5] ? data[5] : '',
//       description: data[7] ? data[7] : '',
//       publisher: data[8] ? data[8] : '',
//       page_count: data[9] ? data[9] : '',
//       genres: data[10] ? data[10] : '',
//       language: data[12],
//       published_date: data[13],
//       image: 'https://images.unsplash.com/photo-1542966336-22953b5f7404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//       views: '999k',
//       loves: '111k',
//       available: true,

//     });
//   })
//   .on("end", function() {
//     // remove the first line: header
//     csvData.shift();
//     // save to the MongoDB database collection
//   });
// stream.pipe(csvStream);


// mongodb.connect(
//   url,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//     if (err) throw err;
//     client
//       .db("test")
//       .collection("books")
//       .insertMany(csvData, (err, res) => {
//         if (err) throw err;
//         console.log(`Inserted: ${res.insertedCount} rows`);
//         client.close();
//       });
//   }
// );

// -------------------------------------------------------

// var dbConn;
// mongodb.MongoClient.connect(url, {
//     useUnifiedTopology: true,
// }).then((client) => {
//     console.log('DB Connected!');
//     dbConn = client.db();
// }).catch(err => {
//     console.log(`DB Connection Error: ${err.message}`);
// });

// ---------------------------------------------------------


// CSV file name
// const fs = require("fs");
// //const fastcsv = require("fast-csv");
// let stream = fs.createReadStream("./controllers/data2.csv");

// -----------------------------------------------------------------------------------------------------
// const fileName = './controllers/data2.csv';
// var arrayToInsert = [];
// csvtojson().fromFile(fileName).then(source => {
//     // Fetching the all data from each row
//     console.log(source.length);
//     for (var i = 0; i < source.length; i++) {
//          var oneRow = {
//                 name: source[i]['title'],
//                 author: source[i]['author'],
//                 price: source[i]['price'] ? source[i]['price'] : '',
//                 description: source[i]['description'] ? source[i]['description'] : '',
//                 publisher: source[i]['publisher'] ? source[i]['publisher'] : '',
//                 page_count: source[i]['page_count'] ? source[i]['page_count'] : '',
//                 genres: source[i]['generes'] ? source[i]['generes'] : '',
//                 language: source[i]['language'] ? source[i]['language'] : '',
//                 published_date: source[i]['published_date'] ? source[i]['published_date'] : '',
//                 image: source[i]['image_url'] ? source[i]['image_url'] : 'https://images.unsplash.com/photo-1542966336-22953b5f7404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//                 views: '999k',
//                 loves: '111k',
//                 available: true,
//          };
//          arrayToInsert.push(oneRow);
//      }
//      // inserting into the table “employees”
//          mongodb.MongoClient.connect(
//           url,
//           { useNewUrlParser: true, useUnifiedTopology: true },
//           (err, client) => {
//             if (err) throw err;
//             client
//               .db("test")
//               .collection("books")
//               .insertMany(arrayToInsert, (err, res) => {
//                 if (err) throw err;
//                 console.log(`Inserted: ${res.insertedCount} rows`);
//                 client.close();
//               });
//           }
//         );
//  });


const getAllBooks = async (req, res, next) => {
    let books;
    try{
        books = await Book.find();
    }
    catch (err){ 
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"No books found"});
    }
    return res.status(200).json({books});
}


const addBook = async (req, res, next) => {
    const { name, author, description, price, available, image, views, loves, genres } = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image,
            views,
            loves,
            genres

        })
        await book.save();
    }
    catch (err) {
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:"Unable to add book"});
    }
    return res.status(201).json({book});
}


const getById = async (req, res, next) => {
    const id = req.params.id; // here in params.id id is bookId. 
    let book;
    try{
        book = await Book.findById(id);
    }
    catch(err) {
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message: 'Book not found'});
    }
    return res.status(200).json({book});

}

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image, views, loves, genres } = req.body;
    let book;
    try{

        book = await Book.findByIdAndUpdate(id,{
            name, 
            author, 
            description, 
            price, 
            available,
            image,
            views,
            loves,
            genres
            });
            book = await book.save();
    }
    catch(err) {
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "Unable to update by this ID"});
    }
    return res.status(200).json({book});
}

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    }
    catch(err) {
        console.log(err);
    }
    
    if(!book){
        return res.status(404).json({message: "Not able to delete this book"});
    }
    return res.status(200).json({message: "Book deleted successfully"});
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;