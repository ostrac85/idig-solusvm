var http = require('http'),
    url = require('url'),
    request = require('request'),
    solus = require('../solus'),    
    solusAction =  require('../config/actionlist');      
var validator = require("email-validator");

/*
* Author: Adrian [2017-02-15]
* Description: Create client users for solus
* return : _object {"status":"success","statusmsg":"Successfully added client","username":"devtestuser","password":"Mano7510","email":"adrian.castro@ex.idig.net","firstname":"adrian","lastname":"castro","company":"idig"}
*/
solus.vClientCreate = function (_params, callback) 
{
    var _error = {};    
    var _err_string = "";
    if(_params && typeof _params.parameter === "object") 
    { 
        
        ['username', 'password', 'email', 'firstname', 'lastname'].forEach(function (key) {

            if (typeof _params.parameter[key]  !== "string" ){ _err_string += 'options.' + key + ' is a required argument. \n ';}
            if(key === "email")
            {
               _err_string += (!validator.validate(_params.parameter[key]))?"Invalid email format":"";
            }
        });
        
        if(_err_string != "") {
            _error = {"status":"error","statusmsg":_err_string};    

            if(callback) { return callback(_error); }

        } else {            
            var _obj = _params.parameter;
                _obj.action = solusAction.vClientCreate;
                _obj.rdtype = 'json';                     
            
            var config = _params.config;
            
            solus.Query(_obj, config, function(response) 
            {                    
                if(callback){ return callback(response); } else {return;};
            });
        }

    } else {
             _error = {"status":"error","statusmsg":"Config/parameter is undefined or not an object"};    
            if(callback) { return callback(_error); }
    }
};

/*
* Author: Adrian [2017-02-15]
* Description: Create client users for solus
* return : _object {"status":"success","statusmsg":"Successfully added client","username":"devtestuser", "email":"adrian.castro@ex.idig.net","firstname":"adrian","lastname":"castro","company":"idig"}
*/
solus.vClientEdit = function (_params, callback) 
{
    if(_params) 
    {         
        var _obj = _params.parameter;
            _obj.action = solusAction.vClientEdit;
            _obj.rdtype = 'json';
        
        var config = _params.config;

            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;}
        }
};

/*
* Author: Adrian [2017-02-16]
* Description: Change password client 
* return :  {"status":"success","statusmsg":"Successfully changed client password","username":"devtestuser","password":"1q2w3e4r"}
*/

solus.vClientUpdatePassword = function (_params, callback) 
{
    if(_params &&  _params.parameter) 
    {         
        var _obj = _params.parameter;
            _obj.action = solusAction.vClientUpdatePassword;
            _obj.rdtype = 'json';
        
        var config = _params.config;

            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/*
* Author: Adrian [2017-02-17]
* Description: List Clients 
* params: n/a
* return :  {"status":"success","statusmsg":"Successfully changed client password","username":"devtestuser","password":"1q2w3e4r"}
*/

solus.vClientList = function (_params, callback) 
{
    if(_params) 
    {         
        var _obj = {};
            _obj.action = solusAction.vClientList;
            _obj.rdtype = 'json';

        var config = _params.config;

            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/*
* Author: Adrian [2017-02-17]
* Description: Client authenticate 
* params = {username : "devtestuser",  "password": "1q2w3e4r"}
* return : {"status":"success","statusmsg":"validated"}
*/
solus.vClientAuthenticate = function (_params, callback) 
{
    if(_params &&  _params.parameter) 
    {         
        var _obj = _params.parameter;
            _obj.action = solusAction.vClientAuthenticate;
            _obj.rdtype = 'json';
        
        var config = _params.config;

            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/*
* Author: Adrian [2017-02-17]
* Description: Client authenticate 
* params = {vserverid : "01",  "username": "devtestuser", returnurl: "", forward:""} //returnurl|optional [url], forward|optional [0|1]
* return : {"status":"success","statusmsg":"validated"}
*/
solus.vClientkeylogin = function (_params, callback) 
{
    if(_params &&  _params.parameter) 
    {         
        var _obj = _params.parameter;
            _obj.action = solusAction.vClientkeylogin;
            _obj.rdtype = 'json';
        
        var config = _params.config;

            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/*
* Author: Adrian [2017-02-17]
* Description: Validate Client username if exists
* params = { "username": "devtestuser"} 
* return : {"status":"success","statusmsg":"Client exists"}
*/
solus.vClientCheckExists = function (_params, callback) 
{
    if(_params &&  _params.parameter) 
    {         
        var _obj = _params.parameter;
            _obj.action = solusAction.vClientCheckExists;
            _obj.rdtype = 'json';
        
        var config = _params.config;

            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/*
* Author: Adrian [2017-02-17]
* Description: Delete Client
* params = { "username": "devtestuser"} 
* return : {"status":"success","statusmsg":"Client deleted"}
*/
solus.vClientDelete = function (_params, callback) 
{
    if(_params &&  _params.parameter) 
    {         
        var _obj = _params.parameter;
            _obj.action = solusAction.vClientDelete;
            _obj.rdtype = 'json';
        
        var config = _params.config;

            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/*
* Author: Adrian [2017-02-17]
* Description: Change username Client
* params = { "username": "devtestuser", newusername: "new_devtestuser"} 
* return : {"status":"success","statusmsg":"Client"}
*/
solus.vClientChangeUserName = function (_params, callback) 
{
    if(_params &&  _params.parameter) 
    {         
        var _obj = _params.parameter;
            _obj.action = solusAction.vClientChangeUserName;
            _obj.rdtype = 'json';
        
        var config = _params.config;

            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};
module.exports = solus;