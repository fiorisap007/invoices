//@ts-check
sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/ui/model/json/JSONModel",
    "sap/base/util/UriParameters",
    "sap/base/Log"
],
    /**
     * 
     * @param { typeof sap.ui.core.util.MockServer } MockServer 
     * @param { typeof sap.ui.model.json.JSONModel }  JSONModel
     * @param { typeof sap.base.util.UriParameters } UriParameters
     * @param { typeof sap.base.Log } Log
     * @returns 
     */
    function (MockServer, JSONModel, UriParameters, Log) {
        "use strict";

        let oMockServer;
        const _sAppPath = "nsdprb/SAPUI5/",
            _sJsonFilesPath = _sAppPath + "localService/mockdata";

        const oMockServerInterface = {
            /**
             * Initializes the mock server asynchronously
             * @protected
             * @param {object} oOptionsParameter
             * @returns{Promise} a promise that is resolved when the mock server has been started
             */
            init: function (oOptionsParameter) {

                const oOptions = oOptionsParameter || {};

                return new Promise(function (fnResolve, fnReject) {

                    const sManifestUrl = sap.ui.require.toUrl(_sAppPath + "manifest.json"),
                        oManifestModel = new JSONModel(sManifestUrl);

                    oManifestModel.attachRequestCompleted(function () {
                        const oUriParameters = new UriParameters(window.location.href);

                        //parse manifest for local metada URI
                        const sJsonFilesUrl = sap.ui.require.toUrl(_sJsonFilesPath);
                        const oMainDataSource = oManifestModel.getProperty("/sap.app/dataSources/mainService");
                        const sMetadataUrl = sap.ui.require.toUrl(_sAppPath + oMainDataSource.settings.localUri);

                        //ensure there is a trailing slash
                        const sMockServerUrl = oMainDataSource.uri && new URI(oMainDataSource.uri).absoluteTo(sap.ui.require.toUrl(_sAppPath)).toString();

                        //Create a mock server instance 
                        if (!oMockServer) {
                            oMockServer = new MockServer({
                                rootUri: sMockServerUrl
                            });
                        } else {
                            oMockServer.stop();
                        }

                        //configure
                        MockServer.config({
                            autoRespond: true,
                            autoRespondAfter: (oOptions || oUriParameters.get("serverDelay") || 500)
                        });

                        //simulate all requests
                        oMockServer.simulate(sMetadataUrl, {
                            sMocodataBaseUrk: sJsonFilesUrl,
                            bGenerateMissingMockData: true
                        });

                        const aRequests = oMockServer.getRequests();

                        //compose an error
                        const fnResponse = function (iErrCode, sMessage, aRequest) {
                            aRequest.response = function (oXhr) {
                                oXhr.respond(iErrCode, { "Content-Type": "text/plain;charset=utf-8" }, sMessage);
                            };
                        };

                        //simulate metadata error
                        if (oOptions.metadataError || oUriParameters.get("metadataError")) {
                            aRequests.forEach(function (aEntry) {
                                if (aEntry.path.toString().indexof("$metadata") > -1) {
                                    fnResponse(500, "metadata Error", aEntry);
                                }
                            });
                        };

                        //simulate request error
                        const sErrorParam = oOptions.errorType || oUriParameters.get("errorType");
                        const iErrorCode = sErrorParam === "badRequest" ? 400 : 500;

                        if (sErrorParam) {
                            aRequests.forEach(function (aEntry) {
                                fnResponse(iErrorCode, sErrorParam, aEntry);
                            });
                        };

                        //set request and start the server
                        oMockServer.setRequests(aRequests);
                        oMockServer.start();

                        Log.info("Running the app");
                        fnResolve();

                    });

                    oManifestModel.attachRequestFailed(function () {
                        const sError = "Failed to load";

                        Log.error(sError);
                        fnReject(new Error(sError));
                    });

                });

            }
        };
        return oMockServerInterface;

    }
);