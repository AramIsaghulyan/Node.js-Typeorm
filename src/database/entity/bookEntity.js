const bookSchema = require('typeorm').EntitySchema;

const bookModel = require('../model/bookModel');

module.exports = new bookSchema({
    tableName: 'book',
    target: bookModel,
    columns: {
        id: {
            primary: true,
            name: 'id',
            type: 'int',
            generated: true,
            unique: true
        },
        name: {
            name: 'name',
            type: 'varchar',
            unique: true
        },
        author: {
            name: 'author',
            type: 'varchar'
        },
        pages: {
            name: 'pages',
            type: 'int'
        },
        categories: {
            name: 'categories',
            type: 'varchar'
        }
    }
})