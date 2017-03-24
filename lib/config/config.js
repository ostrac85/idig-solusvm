/**
 *  Default config values, will be replaced once the api call is called.
 *  By: Adrian
 * */
var svm_config =  {        
        config: {
            writable: true,
            value: {
                id: "",
                key: "",
                host: "",
                port: 80,
                ssl: false,
                verbose: false
            }
        }
    }

module.exports = svm_config;