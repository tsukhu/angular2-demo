export class Phone {
    name: string;
    images: string[];
    description: string;
    id: string;
    additionalFeatures: string;
    andriod = new Andriod();
    availability: string[];
    camera = new Camera();
    connectivity = new Connectivity();
    display = new Display();
    hardware = new Hardware();
    sizeAndWeight = new SizeAndWeight();
    storage = new Storage();
}

export class Andriod {
    os: string;
    ui: string;
}

export class Battery {
    standbyTime: string;
    talkTime: string;
    type: string;
}

export class Camera {
    features: string[];
    primary: string;
}

export class Connectivity {
    bluetooth: string;
    cell: string;
    gps: string;
    infrared: boolean;
    wifi: string;
}

export class Display {
    screenResolution: string;
    screenSize: string;
    touchScreen: boolean;
}

export class Hardware {
    accelerometer: boolean;
    audioJack: string;
    cpu: string;
    fmRadio: string;
    physicalKeyboard: boolean;
    usb: string;
}

export class SizeAndWeight {
    dimensions: string[];
    weight: string;
}

export class Storage {
    flash: string;
    ram: string;
}