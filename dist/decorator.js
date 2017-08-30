"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var CarOptions = (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
// ------------------------------ Cars ------------------------------
var ModelS = (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 70000;
    };
    return ModelS;
}(Car));
var ModelX = (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 80000;
    };
    return ModelX;
}(Car));
// ----------------------------- Options ----------------------------
var EnhancedAutoPilot = (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Enhanced Auto Pilot";
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
var SmartAirSuspension = (function (_super) {
    __extends(SmartAirSuspension, _super);
    function SmartAirSuspension(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    SmartAirSuspension.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Smart Air Suspension";
    };
    SmartAirSuspension.prototype.cost = function () {
        return this.decoratedCar.cost() + 2500;
    };
    return SmartAirSuspension;
}(CarOptions));
var RearFacingSeats = (function (_super) {
    __extends(RearFacingSeats, _super);
    function RearFacingSeats(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    RearFacingSeats.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Rear Facing Seats";
    };
    RearFacingSeats.prototype.cost = function () {
        return this.decoratedCar.cost() + 3500;
    };
    return RearFacingSeats;
}(CarOptions));
// ------------------------------ Main ------------------------------
/* let myTesla: ModelS = new ModelS();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla); */
var myTesla = new ModelX();
myTesla = new EnhancedAutoPilot(myTesla);
console.log("Total cost = " + myTesla.cost());
console.log("Car description = " + myTesla.getDescription());
