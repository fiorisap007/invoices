sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @returns 
     */
    function(Controller, MessageToast) {
      "use strict";
  
      return Controller.extend("nsdprb.SAPUI5.controller.App", {
        onInit: function() {
        },
        onShowHello:function(){
          MessageToast.show("Hola Mundo");
        }
      });
    }
  );
  