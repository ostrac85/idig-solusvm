// Description: Created actionlist config for flexibility of the code to handle actions based on the action lists below
var actionlist = {
    vClientCreate: "client-create",  //Create client user
    vClientEdit: "client-edit",      //Edit client user
    vClientList: "client-list",      //List Clients
    vClientAuthenticate : "client-authenticate", //Client authenticate
    vClientkeylogin : "client-key-login",      //Client login
    vClientCheckExists : "client-checkexists", //validate user if exists
    vClientDelete: "client-delete",         //delete client
    vClientChangeUserName: "client-change-username", //change username client    
    vResellerCreate : "reseller-create",        //Reseller List
    vResellerList : "reseller-list",        //Reseller List
    vResellerInfo : "reseller-info",    //reseller information
    vResellerDelete : "reseller-delete",    //reseller delete
    vResellerModifyResources : "reseller-modifyresources",    //reseller information
    vServerStatus: "vserver-status",        //server status
    vServerList : "node-virtualservers",    //list server from the node
    vServerInfoAll: "vserver-infoall",      //get server information
    vClientUpdatePassword :"client-updatepassword",  //client change password
    vVserverCreate :"vserver-create",  //Virtual Server create
    vVserverAddIp: "vserver-addip", //Add Ip Address 
    vVserverDelIp: "vserver-delip", //Delete Ip Address
    vVserverHostname : "vserver-hostname", //Change Hostname 
    vVserverTerminate : "vserver-terminate",  //Virtual Server Terminate
    vVserverShutdown : "vserver-shutdown",  //Virtual Server Shutdown
    vVserverTunDisable: "vserver-tun-disable", //disable tun/tap
    vVserverTunEnable: "vserver-tun-enable", //enable TUN/TAP
    vVserverNetworkEnable: "vserver-network-enable", //enable TUN/TAP
    vVserverNetworkDisable: "vserver-network-disable", //disable network
    vVserverBandwidth: "vserver-bandwidth", //Set network bandwidth
    vVserverChangeMemory: "vserver-change-memory", //Set change memory
    vVserverChangeHdd: "vserver-change-hdd", //change hard disk size
    vVserverChangeCpu: "vserver-change-cpu", //change cpu
    vVserverPAE: "vserver-pae", //on|off PAE    
    vVserverBoot : "vserver-boot", //Boot virtual server
    vVserverReboot : "vserver-reboot", // Reboot VS
    vVserverRebuild : "vserver-rebuild", // rebuild  VS    
    vVserverVnc : "vserver-vnc", // VNC info
    vVserverVncpass : "vserver-vncpass", // change VNC  password
    vVserverBootOrder: "vserver-bootorder", //Server boot order
    vVserverChangePlan:"vserver-change",  // Change Plan
    vVserverChangeOwner: "vserver-changeowner", //Server change owner
    vVserverConsole: "vserver-console", //Server console
    vListTemplates : "listtemplates", //Template list
    vVserverRootPassword : "vserver-rootpassword", //change root password
    vVserverSuspend : "vserver-suspend", //suspend VS
    vVserverUnsuspend : "vserver-unsuspend", //unsuspend VS
    vVserverMountISO : "vserver-mountiso", //Mount iso  
    vVserverUnMountISO : "vserver-unmountiso", //unMount isso 
    vListISO : "listiso", //List  iso 
    vListNodeGroups : "listnodegroups", //List node groups
    vListNodesByName: "listnodes", //List Nodes by name
    vListNodesByID: "node-idlist", //List Nodes by ID
    vListNodeXenResources: "node-xenresources", //List Nodes by ID
    vNodeIpList : "node-iplist", //list ip for a node
    vListPlans : "listplans", //list ip for a node
    vListPlansVt : "list-plans",
    vNodeStatistics : "node-statistics" //node statistics 
} 
module.exports = actionlist;