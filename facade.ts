/*
    The Facade design pattern is often used when a system is very complex or difficult
    to understand because the system has a large number of interdependent classes or its source code
    is unavailable. This pattern hides the complexities of the larger system and provides
    a simpler interface to the client.
    It typically involves a single wrapper class that contains a set of members required by client.
    These members access the system on behalf of the facade client and hide the implementation details.
*/

class BlurayPlayer {
    public on(): void {
        console.log("Bluray player turning on...");
    }

    public turnOff(): void {
        console.log("Bluray turning off..");
    }

    public play(): void {
        console.log("Playing bluray disc...");
    }
}

class Amplifier {
    public on(): void {
        console.log("Amp is turning on..");
    }

    public turnOff(): void {
        console.log("Amplifier turning off..");
    }

    public setSource(source: string): void {
        console.log("Setting source to " + source);
    }

    public setVolume(volumeLevel: number): void {
        console.log("Setting volume to " + volumeLevel);
    }
}

class Lights {
    public dim(): void {
        console.log("Lights are dimming..");
    }
}

class TV {
    public turnOn(): void {
        console.log("TV turning on..");
    }

    public turnOff(): void {
        console.log("TV turning off..");
    }
}

class PopcornMaker {
    public turnOn(): void {
        console.log("Popcorn maker turning on..");
    }

    public turnOff(): void {
        console.log("Popcorn maker turning off..");
    }

    public pop(): void {
        console.log("Popping corn!");
    }
}

// ----
class HomeTheaterFacade {
    private bluray: BlurayPlayer;
    private amp: Amplifier;
    private lights : Lights;
    private tv : TV;
    private popcornMaker: PopcornMaker;

    constructor(amp: Amplifier, bluray: BlurayPlayer, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }

    public watchMovie(): void {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();

        this.lights.dim();

        this.tv.turnOn();

        this.amp.on();
        this.amp.setSource("bluray");
        this.amp.setVolume(10);

        this.bluray.on();
        this.bluray.play();
    }

    public endMovie(): void {
        this.popcornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff();
    }
}

// ----
let bluray: BlurayPlayer = new BlurayPlayer();
let amp: Amplifier = new Amplifier();
let lights: Lights = new Lights();
let tv: TV = new TV();
let popcornMaker: PopcornMaker = new PopcornMaker();

let hometheater: HomeTheaterFacade = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
hometheater.watchMovie();
console.log("------- 2 HOURS LATER -------");
hometheater.endMovie();