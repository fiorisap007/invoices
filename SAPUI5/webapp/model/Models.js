sap.ui.define([
    "sap/ui/model/json/JSONModel"
], 
    /**
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * 
     */
    function (JSONModel) {
        "use strict";

        return {

            createRecipient: function () {
                const oData = { recipient : { name:"World"} };
                const oModel = new JSONModel(oData);
                return oModel;
            }
    };
});