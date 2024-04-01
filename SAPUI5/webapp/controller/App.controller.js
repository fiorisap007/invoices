sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "nsdprb/SAPUI5/model/Models",
        "sap/ui/model/resource/ResourceModel"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @returns 
     */
    function(Controller, MessageToast, Models,ResourceModel) {
      "use strict";
  
      return Controller.extend("nsdprb.SAPUI5.controller.App", {
        onInit: function() {
          //Set data model on  the view
          this.getView().setModel(Models.createRecipient());

          //Set I18N model on the view
          const i18nModel = new ResourceModel({bundleName:"nsdprb.SAPUI5.i18n.i18n"});
          this.getView().setModel(i18nModel,"i18n");
        },
        onShowHello:function(){
          //Read text frp, i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg",[sRecipient]);
          MessageToast.show(sMsg);
        }
      });
    }
  );
  