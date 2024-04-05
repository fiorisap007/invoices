sap.ui.define([
    "../localService/mockServer",
    "sap/m/MessageBox"
],
/**
 * 
 * @param {typeof sap.m.MessageBox} MessageBox 
 * @returns 
 */
function (mockServer,MessageBox) {
    "use strict";

    let aMockServers = [];

    aMockServers.push(mockServer.init());

    Promise.all(aMockServers).catch( function (oError){
        MessageBox.error(oError.message);
    }).finally( function (){
        sap.ui.requiere(["module:sap/ui/core/ComponentSupport"]);
    })
}
);