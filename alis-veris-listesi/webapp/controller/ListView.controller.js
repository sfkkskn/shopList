sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/m/MessageBox", "sap/m/MessageToast"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("ZUXAV01.alisverislistesi.controller.ListView", {
            onInit: function () {
                MessageToast.show(this._getText("app", []), {
                    duration: 5000,
                    width: "25em",
                    at: "BeginCenter"
                })

                var oViewModel = new JSONModel({
                    busy: false,
                    materials: {
                        id: "",
                        malzemeler: ""
                    }
                });

                this.getView().setModel(oViewModel, "listViewModel");
            },

            onAddPress: function(){
                var oViewModel = this.getView().getModel("listViewModel");
                var aMalzemeler = oViewModel.getProperty("/materials/malzemeler");


                if (aMalzemeler.trim() === "" || !aMalzemeler) {
                    MessageBox.error(this._getMessage("materialRequired"));
                    this.getView().byId("malzemeler").setValueState("Error");
                    this.getView().byId("malzemeler")
                        .setValueState(this._getMessage("materialRequired"));
                    return;
                }
                

                oViewModel.setProperty("/busy", true);

                setTimeout(function () {
                    oViewModel.setProperty("/busy", false);
                    MessageToast.show("Eklendi!");
                }, 2000);
            },

            _getText: function(textId, []) {
                return this.getOwnerComponent()
                    .getModel("i18n")
                    .getResourceBundle()
                    .getText(textId, ["Bayram abi"])
            },
            

            _getMessage: function(textId) {
                return this.getOwnerComponent()
                    .getModel("i18n")
                    .getResourceBundle()
                    .getText(textId, ["Malzeme girilmesi gereklidir!"])
            }
        });
    });
