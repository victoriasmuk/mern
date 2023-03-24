const express = require('express');

const {
    handleCreateAuthor,
    handleCreateManyAuthors,
    handleGetAllAuthors,
    handleGetAuthorById,
    handleDeleteAuthorById,
    handleUpdateAuthorById,
} = require('../controllers/author.controller');

const router = express.Router();

router.post('/', handleCreateAuthor);
router.get('/', handleGetAllAuthors);
router.get('/:id', handleGetAuthorById);
router.put('/:id', handleUpdateAuthorById);
router.delete('/:id', handleDeleteAuthorById);
router.post('/many', handleCreateManyAuthors);

console.log('Author routes created.');

module.exports = {
    authorRouter: router,
};