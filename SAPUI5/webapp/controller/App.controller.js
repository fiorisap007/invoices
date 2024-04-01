sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "nsdprb/SAPUI5/model/Models"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * @returns 
     */
    function(Controller, MessageToast, Models) {
      "use strict";
  
      return Controller.extend("nsdprb.SAPUI5.controller.App", {
        onInit: function() {
          this.getView().setModel(Models.createRecipient());
        },
        onShowHello:function(){
          MessageToast.show("Hola Mundo");
        }
      });
    }
  );
  