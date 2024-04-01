sap.ui.define([
    "sap/m/Text"
],
    /**
     * 
     * @param {typeof sap.m.Text} Text 
     */
    function (Text) {
        "use strict";
        new Text({ text: "Hola Mundo" }).placeAt("content");
    }
);