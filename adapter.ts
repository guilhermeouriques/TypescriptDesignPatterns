/*
    The adapter pattern is a software design pattern (also known as Wrapper, an alternative
    naming shared with the Decorator pattern) that allows the interface of an existing class
    to be used as another interface. It is often used to make existing classes work with others
    without modifying their source code.
*/

interface IPhone {
    useLightning(): void;
}

interface IAndroid {
    useMicroUSB(): void;
}

class Iphone7 implements IPhone {
    useLightning(): void {
        console.log("Using lightning port...");
    }
}

class GooglePixel implements IAndroid {
    useMicroUSB(): void {
        console.log("Using micro USB...");
    }
}

// -----
class LightningToMicroUSBAdapter implements IAndroid {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    public useMicroUSB(): void {
        console.log("Want to use micro USB, converting...");
        this.iphoneDevice.useLightning();
    }
}

let iphone: Iphone7 = new Iphone7();
let chargeAdaptor: LightningToMicroUSBAdapter = new LightningToMicroUSBAdapter(iphone);

chargeAdaptor.useMicroUSB();