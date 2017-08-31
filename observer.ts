/*
    The Observer is a design pattern in which an object, called the subject, maintains a list
    of its dependents, called observers, and notifies them automatically of any state changes,
    usually by calling one of their methods.
    It is mainly used to implement distributed event handling systems, in "event driven" software.
*/

interface ISubject {
    registerObserver(ob: IObserver): void;
    removeObserver(ob: IObserver): void;
    notifyObservers(): void;
}

interface IObserver {
    update(temperature: number): void;
}

// ----------------------------- Subject ----------------------------
class WeatherStation implements ISubject {
    private temperature: number;
    private observers: IObserver[] = [];

    public setTemperature(temp: number): void {
        console.log("Weather Station: new temperature measurement = " + temp);
        this.temperature = temp;
        this.notifyObservers();
    }

    registerObserver(ob: IObserver): void {
        this.observers.push(ob);
    }
    removeObserver(ob: IObserver): void {
        let index: number = this.observers.indexOf(ob);
        this.observers.splice(index, 1);
    }
    notifyObservers(): void {
        for(let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

// ---------------------------- Observers ---------------------------
class TemperatureDisplay implements IObserver {
    private subject: ISubject;

    constructor(weatherStation: ISubject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number): void {
        console.log("TemperatureDisplay: new temperature registered");
    }
}

class Fan implements IObserver {
    private subject: ISubject;

    constructor(weatherStation: ISubject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number): void {
        if(temperature > 25) {
            console.log("Fan: turning ON!");
        } else {
            console.log("Fan: turning OFF!");
        }
    }
}

// ------------------------------- Main -----------------------------
let weatherStation: WeatherStation = new WeatherStation();
let tempDisplay: TemperatureDisplay = new TemperatureDisplay(weatherStation);
let fan: Fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);