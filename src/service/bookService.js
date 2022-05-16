const bookModel = require('../database/model/bookModel');
const typeorm = require('../database/typeorm');

class bookService {

    static bookCreate = async (code) => {

        const result = await typeorm.connection
        .createQueryBuilder()
        .insert()
        .into(bookModel)
        .values(code)
        .execute();

        if (!result) {

            throw new Error('Error: The operation was not performed');
        }

        return 'Book has been succsessfully added';
    };

    static bookGet = async (code) => {

        const result = await typeorm.connection
        .getRepository(bookModel)
        .find();
        
        if (!result) {

            throw new Error('Error: The operation was not performed');
        }

        return result;
    }

    static bookGetById = async (code) => {

        const result = await typeorm.connection
        .getRepository(bookModel)
        .createQueryBuilder('book')
        .where('book.id = :id', { id: code })
        .getOne();

        if (!result) {

            throw new Error('Error: The operation was not performed');
        }

        return result;
    };

    static bookUpdate = async (code, id) => {
        console.log(code)
        console.log(id)

        const result = await typeorm.connection
        .createQueryBuilder()
        .update(bookModel)
        .set(code)
        .where('book.id = :id', { id : id })
        .execute();

        if (!result) {

            throw new Error('Error: The operation was not performed');
        }

        return 'Book is update';
    };

    static bookDelete = async (code) => {

        const result = await typeorm.connection
        .createQueryBuilder()
        .delete()
        .from(bookModel)
        .where('book.id = :id', { id: code })
        .execute();

        if (!result) {

            throw new Error('Error: The operation was not performed');
        }

        return 'Book is delete';
    };
};

module.exports = bookService;