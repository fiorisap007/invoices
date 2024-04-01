sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel 
     * @returns 
     */
    function(Controller, MessageToast, JSONModel) {
      "use strict";
  
      return Controller.extend("nsdprb.SAPUI5.controller.App", {
        onInit: function() {
          const oData = { recipient : { name:"World"} };
          const oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
        },
        onShowHello:function(){
          MessageToast.show("Hola Mundo");
        }
      });
    }
  );
  