'use strict';

var request = require('request');
var conf = require('../config/config');  
// Stolen from https://github.com/kkamkou/node-akamai-http-api
var solus = Object.create(null, {
        config: conf.config,
    });

// Stolen from http://stackoverflow.com/a/4673436
solus.strFormat = function (format) {
    var args = Array.prototype.slice.call(arguments, 1);    
    return format.replace(/\{(\d+)\}/g, function (match, number) {
        return args[number] === undefined ? match : args[number];
    });
};

// Stolen from http://stackoverflow.com/a/1714899
solus.serializeParams = function (obj, prefix) {
    var prop, k, v, str = [];
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            k = prefix ? prefix + "[" + prop + "]" : prop;
            v = obj[prop];

            if (typeof v === 'object') {
                str.push(solus.serializeParams(v, k));
            } else {
                str.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
    } 
    str.push(encodeURIComponent("id") + "=" + encodeURIComponent(solus.config.id)); 
    str.push(encodeURIComponent("key") + "=" + encodeURIComponent(solus.config.key)); 
    return str.join("&");
};

solus.generateHostUrl = function (params) {
    if (solus.config.host === null) {
        // Stolen from http://stackoverflow.com/a/1137209
        throw {
            name:     "ConfigError",
            level:    "FATAL",
            message:  "No 'host' value provided.",
            toString: function () {return this.name + ": " + this.message; }
        };
    } 

    var schema = solus.config.ssl ? 'https' : 'http',
        suffix = 'api/admin/command.php',
        host = solus.config.host,
        port = solus.config.port;    

    var str = solus.strFormat('{0}://{1}:{2}/{3}?{4}',
                           schema, host, port, suffix,
                           solus.serializeParams(params));
                           
      return str;                     
}; 

solus.setConfigValues =function(config){ 
    solus.config.id = config.id;
    solus.config.key = config.key;
    solus.config.port  = config.port;    
    solus.config.host  = config.host;    

};

solus.sQuery = function (obj, config, callback) { 
    solus.setConfigValues(config);
    request.post(solus.generateHostUrl(obj), function(error,response, body){        
       
      if(callback) {          
           return  callback(response.body); 
        } else { 
            return;
        }
    });   
};
module.exports = solus.sQuery;