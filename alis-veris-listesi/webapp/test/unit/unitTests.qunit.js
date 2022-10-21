/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZUX_AV_01/alis-veris-listesi/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
