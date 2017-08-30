"use strict";
// ----------------------------- Subject ----------------------------
var WeatherStation = (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log("Weather Station: new temperature measurement = " + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    WeatherStation.prototype.registerObserver = function (ob) {
        this.observers.push(ob);
    };
    WeatherStation.prototype.removeObserver = function (ob) {
        var index = this.observers.indexOf(ob);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    return WeatherStation;
}());
// ---------------------------- Observers ---------------------------
var TemperatureDisplay = (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log("TemperatureDisplay: new temperature registered");
    };
    return TemperatureDisplay;
}());
var Fan = (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log("Fan: turning ON!");
        }
        else {
            console.log("Fan: turning OFF!");
        }
    };
    return Fan;
}());
// ------------------------------- Main -----------------------------
var weatherStation = new WeatherStation();
var tempDisplay = new TemperatureDisplay(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
