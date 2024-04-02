sap.ui.define(
  [
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageToast",
      "sap/ui/core/Fragment"
  ],
  /**
   * 
   * @param {typeof sap.ui.core.mvc.Controller} Controller 
   * @param {typeof sap.m.MessageToast} MessageToast
   * @param {typeof sap.ui.core.Fragment} Fragment
   * @returns 
   */
  function(Controller, MessageToast, Fragment ) {
    "use strict";

    return Controller.extend("nsdprb.SAPUI5.controller.HelloPanel", {
      onInit: function() {

      },
      onShowHello:function(){
        //Read text frp, i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView().getModel().getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg",[sRecipient]);
        MessageToast.show(sMsg);
      },
      onOpenDialog:function(){

      }
    });
  }
);
