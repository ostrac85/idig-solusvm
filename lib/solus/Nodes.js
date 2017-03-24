/**
 * Created by Adrian 02/23/2017
 * For Node Functions
 */
var http = require('http'),
    url = require('url'),
    request = require('request'),
    solus = require('../solus'),    
    solusAction =  require('../config/actionlist');  


/**
* Author: Adrian [2017-02-15]
* Description:  List Templates
* Parameter:   {type: "kvm", listpipefriendly:true} 
* return : _object  {"status":"success","statusmsg":"","templates":"template1,template2,template3","templateshvm":"template1,template2,template3","templateskvm":"template1,template2,template3"}
*/

solus.vListTemplates = function (_params, callback) 
{
    var _obj = {action: solusAction.vListTemplates, rdtype: 'json'};
    var config = _params.config;

    var config = _params.config; 
    var _obj = {};
        _obj = _params.parameter;            
        _obj.action = solusAction.vListTemplates;
        _obj.rdtype = 'json';    

    solus.Query(_obj, config, function(response){                   
        if(callback){ return callback(response); } else {return;};
    });
};


/**
 * Author: Adrian [2017-03-06]
 * Description:  List ISO
 * Parameter:{"type": "kvm"}
 * returns: see https://documentation.solusvm.com/display/DOCS/List+ISO+Images
 * */
solus.vListISO  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vListISO;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};



/**
 * Author: Adrian [2017-03-06]
 * Description:  List Node Groups
 * Parameter: n/a
 * returns: see https://documentation.solusvm.com/display/DOCS/List+Node+Groups
 * */
solus.vListNodeGroups  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vListNodeGroups;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};


/**
 * Author: Adrian [2017-03-03]
 * Description:  Mount ISO
 * Parameter:{"vserverid": 104, iso: "sample_iso"}
 * returns: {"status":"success","statusmsg":"ISO mounted"}
 * */
solus.vVserverMountISO  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverMountISO;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-03]
 * Description:  Unmount ISO
 * Parameter:{"vserverid": 104, iso: "sample_iso"}
 * returns: {"status":"success","statusmsg":"ISO unmounted"}
 * */
solus.vVserverUnMountISO  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverUnMountISO;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};


/**
 * Author: Adrian [2017-03-06]
 * Description:  List nodes by name
 * Parameter:{}
 * returns: {"status":"success","statusmsg":"", "nodes":"ssdtor5"}
 * */
solus.vListNodesByName  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vListNodesByName;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-06]
 * Description:  List nodes by ID
 * Parameter:{}
 * returns: {"status":"success","statusmsg":"", "nodes":"2"}
 * */
solus.vListNodesByID  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vListNodesByID;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-06]
 * Description:  List nodes
 * Parameter:  params = {"nodeid": "2"}  
 * returns:{"status":"success","statusmsg":"","freememory":"674528","freehdd":"43821636"}
 * */
solus.vListNodeXenResources  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vListNodeXenResources;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-06]
 * Description:  List nodes
 * Parameter:  params = {"nodeid": "2"}  
 * returns:{"status":"success","statusmsg":"Available ip addresses","ipcount":"3","ips":"123.123.123.123"}
 * */
solus.vNodeIpList  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vNodeIpList;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};


/**
 * Author: Adrian [2017-03-06]
 * Description:  List Plans
 * Parameter:  params = {type: "kvm"}  
 * returns: {"status":"success","statusmsg":"","plans":"ssdcacloud1,ssdcacloud2,ssdcacloud3,ssdcacloud4,ssdcacloud5,ssdcacloud6,ssdcacloud7,ssdcacloud8,ssdcacloud9,Reseller25,Reseller50"}
 * */
solus.vListPlans  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vListPlans;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-06]
 * Description:  Node Statistics
 * Parameter:  params = {nodeid: "1"}  
 * returns: see: https://documentation.solusvm.com/display/DOCS/Node+Statistics
 * */
solus.vNodeStatistics  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vNodeStatistics;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-06]
 * Description:  Node Statistics
 * Parameter:  params = {"type": "kvm"}  
 * returns: see: https://documentation.solusvm.com/display/DOCS/List+Plans+Per+VT
 * */
solus.vListPlansVt = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vListPlansVt;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};
module.exports = solus;