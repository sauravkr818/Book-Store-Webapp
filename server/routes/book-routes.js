const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const booksController = require('../controllers/books-controller');


// get
router.get('/', booksController.getAllBooks);

// post
router.post('/', booksController.addBook);

// getById
router.get('/:id', booksController.getById);

// updateBookById
router.put('/:id', booksController.updateBook);

// deleteBookById
router.delete('/:id', booksController.deleteBook);

module.exports = router;