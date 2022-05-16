// Standard requires
const _ = require('lodash');
const config = require('../../../config.json');

class Utils {

    constructor() {
    }

    static loadConfig() {

        const defaultConfig = config.development;
        const enviroment = process.env.NODE_ENV || 'development';
        const enviromentConfig  = config[enviroment];
        this._config = _.merge(defaultConfig, enviromentConfig);
    }

    static getConfig() {

        if (this._config == undefined) {
            this.loadConfig();
        }
        return this._config;
    }

    static getConfigSubParameter(param, key, value) {
        return this.getConfigParameter(param).find(elem => elem[key] == value);
    }

    static getConfigParameter(param) {
        
        if (this._config == undefined) {
            this.loadConfig();
        }
        return this._config[param];
    }
}

module.exports = Utils;