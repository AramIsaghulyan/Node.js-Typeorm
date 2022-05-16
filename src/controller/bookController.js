// Standard requires
const express = require('express');
const router = express.Router();
const bookService = require('../service/bookService');

router.post('/api1/book_create', async (req, res) => {

    try {
        const result = await bookService.bookCreate(req.body);
        res.status(200).send(result);
    }

    catch (err) {
        return res.status(400).json( {error: err.message} );
    }
});

router.get('/api1/book_get', async (req, res) => {

    try {
        const books = await bookService.bookGet(req.body);
        res.status(200).send(books);
    }

    catch (err) {
        res.status(400).json( {error: err.message} );
    }
});

router.get('/api1/book_get_by_id/:id', async (req, res) => {

    try {
        const bookId = await bookService.bookGetById(req.params.id);
        res.status(200).json(bookId);
    }

    catch(err) {
        res.status(400).json( {error: err.message} );
    }
});

router.put('/api1/book_update/:id', async (req, res) => {

    try {
        const result = await bookService.bookUpdate(req.body, req.params.id);
        res.status(200).json(result);
    }

    catch (err) {
        res.status(400).json( {error: err.message} );
    }
});

router.delete('/api1/book_delete/:id', async (req, res) => {

    try {
        const bookId = await bookService.bookDelete(req.params.id);
        res.status(200).json(bookId);
    }
    
    catch (err) {
        res.status(400).json ( {error: err.message} );
    }
});

module.exports = router;