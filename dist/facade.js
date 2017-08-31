"use strict";
/*
    The Facade design pattern is often used when a system is very complex or difficult
    to understand because the system has a large number of interdependent classes or its source code
    is unavailable. This pattern hides the complexities of the larger system and provides
    a simpler interface to the client.
    It typically involves a single wrapper class that contains a set of members required by client.
    These members access the system on behalf of the facade client and hide the implementation details.
*/
var BlurayPlayer = (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log("Bluray player turning on...");
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log("Bluray turning off..");
    };
    BlurayPlayer.prototype.play = function () {
        console.log("Playing bluray disc...");
    };
    return BlurayPlayer;
}());
var Amplifier = (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log("Amp is turning on..");
    };
    Amplifier.prototype.turnOff = function () {
        console.log("Amplifier turning off..");
    };
    Amplifier.prototype.setSource = function (source) {
        console.log("Setting source to " + source);
    };
    Amplifier.prototype.setVolume = function (volumeLevel) {
        console.log("Setting volume to " + volumeLevel);
    };
    return Amplifier;
}());
var Lights = (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log("Lights are dimming..");
    };
    return Lights;
}());
var TV = (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("TV turning on..");
    };
    TV.prototype.turnOff = function () {
        console.log("TV turning off..");
    };
    return TV;
}());
var PopcornMaker = (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log("Popcorn maker turning on..");
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log("Popcorn maker turning off..");
    };
    PopcornMaker.prototype.pop = function () {
        console.log("Popping corn!");
    };
    return PopcornMaker;
}());
// ----
var HomeTheaterFacade = (function () {
    function HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker) {
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource("bluray");
        this.amp.setVolume(10);
        this.bluray.on();
        this.bluray.play();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff();
    };
    return HomeTheaterFacade;
}());
// ----
var bluray = new BlurayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new TV();
var popcornMaker = new PopcornMaker();
var hometheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
hometheater.watchMovie();
console.log("------- 2 HOURS LATER -------");
hometheater.endMovie();
