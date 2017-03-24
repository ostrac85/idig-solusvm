/**
 * Created by Adrian 02/15/2017
 * For Virtual Machine calls
 * 
 * Module Contents
 *  - Virtual server List
 *  - Virtual server information
 *  - Virtual server status
 *  - Create Virtual server
 *  - Boot  Virtual server
 *  - Boot order Virtual server
 *  - Virtual server ownership
 *  - Virtual server Serial Console
 *  - Terminate Virtual server/Client
 *  - Virtual server Change Plan 
 *  - Change Root password
 *  - Suspend VS 
 *  - Unsuspend VS 
 *  - Terminate VS 
 */
var http = require('http'),
    url = require('url'),
    request = require('request'),
    solus = require('../solus'),    
    solusAction =  require('../config/actionlist');  


/*
* Author: Adrian [2017-02-15]
* Description:  Virtual server List per node
* Parameter:  {config:{key: "key00000000000000000000000", id:"id01010101010101", host: "localhost", port: 5353}, parameter:{nodeId:2}}
* return : _object {"status":"success","statusmsg":"","virtualservers":[{"vserverid":"171","ctid-xid":"vm108","clientid":"1","ipaddress":"95.45.23.7","hostname":"test574.soluslabs.net",
        "template":"centos-5-x86_64",   "hdd":"10737418240",   "memory":"2147483648",   swap-burst":"1073741824",   "type":"xen",   "mac":"00:16:3e:73:15:b8"}]}*/    
solus.listVirtualServers = function (params, callback) 
{
    var _obj = {action: solusAction.vServerList, rdtype: 'json', nodeid: params.parameter.nodeId}       
    var config = params.config;
    solus.Query(_obj, config, function(response){                   
        if(callback){ return callback(response); } else {return;};
    });
};

/*
* Author: Adrian [2017-02-15]
* Description:  Virtual server information
* Parameter:  {config:{key: "key00000000000000000000000", id:"id01010101010101", host: "localhost", port: 5353}, parameter:{vserverid:62}}
* return : _object  {"status":"success","statusmsg":"","vserverid":"[vserverid]","ctid-xid":"[ctid or xen id]","clientid":"[clientid]","ipaddress":"[main ipaddress]",
                    "hostname":"[hostname]","template":"[template]","hdd":"[diskspace]","memory":"[memory]","swap-burst":"[swp or burst memory]","type":"[openvz/xen/xenhvm]","cpus":"[1]","mac":"[mac address]"
}*/ 

solus.vServerInfoAll = function (params, callback) 
{
    var _obj = params.parameter;
    _obj.action = solusAction.vServerInfoAll;
    _obj.rdtype = 'json';
    
    var config = params.config;
    solus.Query(_obj, config, function(response){                   
        if(callback){ return callback(response); } else {return;};
    });
};

/*
* Author: Adrian [2017-02-15]
* Description:  Virtual server status
* Parameter:  {config:{key: "key00000000000000000000000", id:"id01010101010101", host: "localhost", port: 5353}, parameter:{vserverid:62}}
* return : _object   {"status":"success","statusmsg":"disabled|online|offline"}
} **/ 

solus.vServerStatus = function (params, callback) 
{          
    var _obj = {action: solusAction.vServerStatus, rdtype: 'json', vserverid: params.parameter.vserverid}        
    var config = params.config;

    solus.Query(_obj, config, function(response){                   
        if(callback){ return callback(response); } else {return;};
    });

};


/**
 * Author: Adrian [2017-02-22]
 * Description:  Create Virtual server
 * Parameter: see https://documentation.solusvm.com/display/DOCS/Create+Virtual+Server
 * returns: see https://documentation.solusvm.com/display/DOCS/Create+Virtual+Server
 * */
solus.vVserverCreate = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverCreate;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};


/**
 * Author: Adrian [2017-02-22]
 * Description:  Boot  Virtual server
 * Parameter:{"vserverid": 107}
 * returns: {"status":"success","statusmsg":"Virtual server booted"}
 * */
solus.vVserverBoot = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverBoot;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-02-22]
 * Description:  reboot  Virtual server
 * Parameter:{"vserverid": 107}
 * returns: {"status":"success","statusmsg":"Virtual server rebooted"}
 * */
solus.vVserverReboot = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverReboot;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-02-22]
 * Description:  Boot order Virtual server
 * Parameter:{"vserverid": 107, bootorder:dc} [cd(Hard Disk CDROM)|dc{CDROM Hard Disk)|c(Hard Disk)|d{CDROM)]
 * returns: {"status":"success","statusmsg":"Virtual server boot order"}
 * */
solus.vVserverBootOrder = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverBootOrder;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};


/**
 * Author: Adrian [2017-02-23]
 * Description:  VM Change ownership
 * Parameter:{"vserverid": 107, clientid:62}  vserverid  [id of virtual server] clientid   [new clients id]
 * returns: {"status":"success","statusmsg":"Successfully changed owner"}
 * * */
solus.vVserverChangeOwner  = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverChangeOwner;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-02-23]
 * Description:  VM Serial Console
 * Parameter:{"vserverid": 107, access:"enable", time:1}  access:[enable|disable],  time : [1|2|3|4|5|6|7|8] optional with the access variable
 * returns:  
 *     if access: "enabled" => {"status":"success","statusmsg":"","created":"success","type>openvz|xen","consoleip":"ip of host","consoleport":"port of host",
 *            "consolepassword":"console password","consoleusername":"console username","cancelled":"success","sessionactive":"1","sessionexpire":3600}
 *     if access: "disabled" => {"cancelled":"success","sessionactive":"0","status":"success","statusmsg":"","type":"kvm","consoleip":"23.111.69.4",
 *            "consoleport":"22","consolepassword":"62O8eCGJ6s","consoleusername":"console-GksmeX"}
 * * */
solus.vVserverConsole  = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverConsole;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};


/**
 * Author: Adrian [2017-02-22]
 * Description:  Terminate Virtual server/Client
 * Parameter:{"vserverid": 104, deleteclient : false}//true = deletes client, default=>false    
 * returns: {"status":"success","statusmsg":"Virtual server terminated"}
 * */
solus.vVserverTerminate = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverTerminate;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-02-22]
 * Description:  Shutdown Virtual server/Client
 * Parameter:{"vserverid": 104)
 * returns: {"status":"success","statusmsg":"Virtual server Shutdown"}
 * */
solus.vVserverShutdown = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverShutdown;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-02-22]
 * Description:  Shutdown Virtual server/Client
 * Parameter:{"vserverid": 104, "pae": "on") //pae => on|off
 * returns: {"status":"success","statusmsg":"Enabled|Disabled"}
 * */
solus.vVserverPAE = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverPAE;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-16]
 * Description:  disable tun Tap
 * Parameter:{"vserverid": 104}    
 * returns: {"status":"success","statusmsg":"Disable TUN/TAP"}
 * */
solus.vVserverTunDisable = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverTunDisable;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-16]
 * Description:  enable tun Tap
 * Parameter:{"vserverid": 107}    
 * returns: {"status":"success","statusmsg":"Disable TUN/TAP"}
 * */
solus.vVserverTunEnable = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;            
            _obj.action = solusAction.vVserverTunEnable;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};


/**
 * Author: Adrian [2017-02-23]
 * Description:  Change Plan Virtual server
 * Parameter:{"vserverid": 104, plan : "Reseller25", changehdd: false}  //changehdd: true|false, false default
 * returns: {"status":"success","statusmsg":"Virtual server updated"}
 * */
solus.vVserverChangePlan = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverChangePlan;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-02-23]
 * Description:  Enable Network
 * Parameter:{"vserverid": 104} 
 * returns: {"status":"success","statusmsg":"Virtual server network enabled"}
 * */
solus.vVserverNetworkEnable = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverNetworkEnable;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
}; 
/**
 * Author: Adrian [2017-03-16]
 * Description:  disable Network
 * Parameter:{"vserverid": 104} 
 * returns: {"status":"success","statusmsg":"Virtual server network disabled"}
 * */
solus.vVserverNetworkDisable = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverNetworkDisable;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-20]
 * Description:  Network bandwidth settings
 * Parameter:{"vserverid": 107, limit: 100, overlimit: 150 } limit [amount in GB] overlimit  [amount in GB] 
 * returns: {"status":"success","statusmsg":"Virtual server bandwidth settings changed}
 * */
solus.vVserverBandwidth = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverBandwidth;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-20]
 * Description:  Network Change Memory
 * Parameter:{"vserverid": 107, memory: 1024 } limit [amount in GB] overlimit  [amount in GB] 
 * returns: {"status":"success","statusmsg":"Virtual server bandwidth settings changed}
 * */
solus.vVserverChangeMemory = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverChangeMemory;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};
/**
 * Author: Adrian [2017-03-20]
 * Description:  Change hdd
 * Parameter:{"vserverid": 107, hdd: 60 } cpu [amount in GB]
 * returns: {"status":"success","statusmsg":"Virtual server  hdd changed""}
 * */
solus.vVserverChangeHdd = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverChangeHdd;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });
    } else {
        if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
    }
};

/**
 * Author: Adrian [2017-03-20]
 * Description:  Change CPU
 * Parameter:{"vserverid": 107, cpu: 60 } cpu [amount 1 <> 128]
 * returns: {"status":"success","statusmsg":"Virtual server updated"}
 * */
solus.vVserverChangeCpu = function (_params, callback) {
    if(_params) 
    {         
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverChangeCpu;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
                if(callback){ return callback(a); } else {return;};
            });
    } else {
        if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
    }
};

/**
 * Author: Adrian [2017-03-02]
 * Description:  Change Root password
 * Parameter:{"vserverid": 104, rootpassword : "Reseller25"}  
 * returns: {"status":"success","statusmsg":"Virtual server root password changed"}
 * */
solus.vVserverChangeRootPassword = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverRootPassword;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-02]
 * Description:  Suspend VM
 * Parameter:{"vserverid": 104}
 * returns: {"status":"success","statusmsg":"Virtual server suspended"}
 * */
solus.vVserverSuspend  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverSuspend;
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
 * Description:  UnSuspend VM
 * Parameter:{"vserverid": 104}
 * returns: {"status":"success","statusmsg":"Virtual server unsuspended"}
 * */
solus.vVserverUnsuspend  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config; 
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverUnsuspend;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-13]
 * Description:  Add IP Address
 * Parameter:{"vserverid": 104}
 * returns:  {"status":"success","statusmsg":"Ip address added","ipaddress":"123.123.123.123"}
 * */
solus.vVserverAddIp  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config;
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverAddIp;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-13]
 * Description:  Delete IP Address
 * Parameter: {"vserverid": "107", "ipaddr": "123.123.123.0"}  
 * returns:  {"status":"success","statusmsg":"Ip address removed"}
 * */
solus.vVserverDelIp  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config;
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverDelIp;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-13]
 * Description: Change Hostname
 * Parameter: {"vserverid": "107", "hostname": "devtestlang.testing"}  
 * returns:  {"status":"success", "statusmsg":"Virtual server hostname changed","hostname":"hostname"}
 * */
solus.vVserverHostname  = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config;
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverHostname;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-13]
 * Description: Change Hostname
 * Parameter: {"vserverid": "107", "template": "ubuntu-16.04-server-amd64"}
 * returns:  {"status":"success","statusmsg":"Virtual server is being rebuilt","rootpassword":"password","information":""}
 * */
solus.vVserverRebuild = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config;
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverRebuild;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};

/**
 * Author: Adrian [2017-03-13]
 * Description: VNC Info
 * Parameter: {"vserverid": "107"}
 * returns: see https://documentation.solusvm.com/display/DOCS/VNC+Info
 * */
solus.vVserverVnc = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config;
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverVnc;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};


/**
 * Author: Adrian [2017-03-13]
 * Description: VNC change password
 * Parameter: {"vserverid": "107", vncpassword: "testing"}
 * returns: see https://documentation.solusvm.com/display/DOCS/Change+VNC+Password
 * */
solus.vVserverVncpass = function (_params, callback) {
    if(_params) 
    {
        var config = _params.config;
        var _obj = {};
            _obj = _params.parameter;
            _obj.action = solusAction.vVserverVncpass;
            _obj.rdtype = 'json';    
            solus.Query(_obj, config, function(a){                   
               if(callback){ return callback(a); } else {return;};
            });
        } else {
                if(callback){ return callback({"status":"error","statusmsg":"Parameter _object not found"}); } else {return;};
        }
};
module.exports = solus;