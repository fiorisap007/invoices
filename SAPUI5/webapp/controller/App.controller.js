sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @returns 
     */
    function(Controller) {
      "use strict";
  
      return Controller.extend("nsdprb.SAPUI5.controller.App", {
        onInit: function() {

        },
        onOpenDialogHeader: function (){
          this.getOwnerComponent().openHelloDialog();
        }
      });
    }
  );
  