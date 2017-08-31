/*
    The Decorator pattern (also known as Wrapper, an alternative naming shared with the Adapter pattern)
    is a design pattern that allows behavior to be added to an individual object, either statically
    or dynamically, without affecting the behavior of other objects from the same class.
    The decorator pattern is often useful for adhering to the Single Responsibility Principle,
    as it allows functionality to be divided between classes with unique areas of concern.
*/

abstract class Car {
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

abstract class CarOptions extends Car {
    protected decoratedCar: Car;
    public abstract getDescription(): string;
}

// ------------------------------ Cars ------------------------------
class ModelS extends Car {
    public description = "Model S";

    public cost(): number {
        return 70000;
    }
}

class ModelX extends Car {
    public description = "Model X";

    public cost(): number {
        return 80000;
    }
}

// ----------------------------- Options ----------------------------
class EnhancedAutoPilot extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ", Enhanced Auto Pilot";
    }

    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

class SmartAirSuspension extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ", Smart Air Suspension";
    }

    public cost(): number {
        return this.decoratedCar.cost() + 2500;
    }
}

class RearFacingSeats extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ", Rear Facing Seats";
    }

    public cost(): number {
        return this.decoratedCar.cost() + 3500;
    }
}

// ------------------------------ Main ------------------------------
/* let myTesla: ModelS = new ModelS();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla); */

let myTesla: ModelX = new ModelX();
myTesla = new EnhancedAutoPilot(myTesla);

console.log("Total cost = " + myTesla.cost());
console.log("Car description = " + myTesla.getDescription());