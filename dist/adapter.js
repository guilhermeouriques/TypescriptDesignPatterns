"use strict";
/*
    The adapter pattern is a software design pattern (also known as Wrapper, an alternative
    naming shared with the Decorator pattern) that allows the interface of an existing class
    to be used as another interface. It is often used to make existing classes work with others
    without modifying their source code.
*/
var Iphone7 = (function () {
    function Iphone7() {
    }
    Iphone7.prototype.useLightning = function () {
        console.log("Using lightning port...");
    };
    return Iphone7;
}());
var GooglePixel = (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log("Using micro USB...");
    };
    return GooglePixel;
}());
// -----
var LightningToMicroUSBAdapter = (function () {
    function LightningToMicroUSBAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log("Want to use micro USB, converting...");
        this.iphoneDevice.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
var iphone = new Iphone7();
var chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
chargeAdaptor.useMicroUSB();
