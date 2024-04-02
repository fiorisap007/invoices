sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "../model/InvoicesFormater"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel  
     * @returns 
     */
    function(Controller,JSONModel,InvoicesFormater) {
      "use strict";
      return Controller.extend("nsdprb.SAPUI5.controller.InvoicesList", {

        formatter: InvoicesFormater,
        
        onInit: function() {
            const oViewModel = new JSONModel({
                usd:"USD",
                eur:"EUR"
            });
            this.getView().setModel(oViewModel,"currency");
        }
      });

    }
);      