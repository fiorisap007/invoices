sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
/**
 * @param {typeof sap.ui.base.ManagedObject} ManagedObject
 * @param {typeof sap.ui.core.Fragment} Fragment
 */
function (ManagedObject,Fragment){
    "use strict";

    return ManagedObject.extend("nsdprb.SAPUI5.controller.HelloDialog", {
        constructor: function (oView){
            this._oView = oView;
        },
        exit:function (){
            delete this._oView;
        },
        open:function(){
            const oView = this._oView;

            //create dialog lazily
            if(!oView.byId("helloDialog")){
              
                let oFragmentController = {
                    onCloseDialog:function(){
                        oView.byId("helloDialog").close();
                    }                    
                };
                //load asyncro XML Fragment
                Fragment.load({
                    id: oView.getId(),
                    name:"nsdprb.SAPUI5.view.HelloDialog",
                    controller:oFragmentController
                }).then(function (oDialog){
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            }else{
                oView.byId("helloDialog").open();
            }            
        }
    });    
});