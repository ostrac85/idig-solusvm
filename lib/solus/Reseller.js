var http = require('http'),
    url = require('url'),
    request = require('request'),
    solus = require('../solus'),    
    solusAction =  require('../config/actionlist');  


/*
* Author: Adrian [2017-02-17]
* Description: List Resellers
* params: n/a
* return :  {"status":"success","statusmsg":"Successfully changed client password","usernames":"username1,username2,username3"}
*/
solus.vResellerList = function (_params, callback) 
{
    if(_params) 
    {
        var _config = _params.config;
        var _obj = {};
            _obj.action = solusAction.vResellerList;
            _obj.rdtype = 'json';        

            solus.Query(_obj, _config, function(a){                   
                if(callback) { return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/*
* Author: Adrian [2017-02-17]
* Description: Create Reseller
* Parameter: https://documentation.solusvm.com/display/DOCS/Create+Reseller
* return :  https://documentation.solusvm.com/display/DOCS/Create+Reseller
*/
solus.vResellerCreate = function (_params, callback) 
{
    if(_params) 
    {          
        var _obj = _params.parameter;
            _obj.action = solusAction.vResellerCreate;
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
* Description: Create Reseller
* Parameter: https://documentation.solusvm.com/display/DOCS/Reseller+Information
* return : _object  {username : "idigDevTestResseller"}
*/
 solus.vResellerInfo = function(_params, callback)
 {  
    if(_params) 
    {           
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vResellerInfo;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }

 };

/*
* Author: Adrian [2017-02-21]
* Description: Modify Reseller Resources
* Parameter: {username : "idigDevTestResseller", maxvps: 2, maxusers:2 , maxmem: 10737418240, maxburst: 10737418240, maxdisk:10737418240, maxbw:10737418240, maxipv4: 2, maxipv6:3, nodegroup:0, mediagroups:0  
* return : see documentation;
*/
solus.vResellerModifyResources = function(_params, callback)
 {  
    if(_params) 
    {           
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vResellerModifyResources;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }

 };

/*
* Author: Adrian [2017-02-21]
* Description: delete Reseller
* Parameter: {username : "idigDevTestResseller"}
* return : _object {"status":"success","statusmsg":"Reseller deleted"}
*/
 solus.vResellerDelete = function(_params, callback)
 {  
    if(_params) 
    {           
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vResellerDelete;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });

        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }

 };


module.exports = solus;