sap.ui.define([
    "sap/ui/core/UIComponent",
    "nsdprb/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
/**
 * 
 * @param {typeof sap.ui.core.UIComponent} UIComponent 
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 * @returns 
 */
function (UIComponent,Models,ResourceModel) {
    "use strict";

    return UIComponent.extend("nsdprb.SAPUI5.Component", {

        metadata:{ 
            manifest:"json"
        },

        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            //Set data model on  the view
            this.setModel(Models.createRecipient());

            //Set I18N model on the view
            const i18nModel = new ResourceModel({bundleName:"nsdprb.SAPUI5.i18n.i18n"});
            this.setModel(i18nModel,"i18n");

        }
    });
}
);