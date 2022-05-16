const typeorm = require('typeorm');
const utils = require('../database/util/utils');

class Typeorm {

    constructor() {

        console.log('constructor');
        this.connection = undefined;
        const c = {
            ...utils.getConfigParameter('typeorm'),
            ...{ entities : [
                require('./entity/bookEntity')
            ]}
        };
        this.initialazed = new Promise ((resolve, reject) => {
            typeorm.createConnection(c).then((connection) => {
                this.connection = connection;
                resolve();
            })
            .catch (function(err) {
                console.log('Error: ', err);
                reject();
            });
        });
    };
}

module.exports = new Typeorm();