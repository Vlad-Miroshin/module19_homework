export {Lamp, Laptop, Washer, Boiler, DeviceSet}

const STATE_ON = true;
const STATE_OFF = false;

class Device {
    _power = 0; // мощность, Ватт
    _model = ''; // модель (производитель, тип и т.п.)
    _state = STATE_OFF; // состояние вкл/выкл

    constructor(power, model = '') {
        this.setPower(power);        
        this.setModel(model);        
    }

    setPower(value) {
        if (typeof value !== 'number') 
            throw new Error("Value type must be 'number'");

        if (value < 0) 
            throw new Error("Value must be positive");

        this._power = value;
    }
    
    getPower() {
        return this._power;
    }    

    getModel() {
        return this._model;
    }

    setModel(value) {
        return this._model = value;
    }

    switchOn() {
        this._state = STATE_ON;
    }

    switchOff() {
        this._state = STATE_OFF;
    }

    isOn() {
        return this._state === STATE_ON;
    }

    getInputPower() {
        return this.isOn() ? this.getPower() : 0;
    }

    getClassName() {
        return this.constructor.name;
    }

    toString() {
        if (this.getModel()) {
            return `${this.getClassName()}('${this.getModel()}', ${this.getPower()}wt)`
        } else {
            return `${this.getClassName()}(${this.getPower()}wt)`
        }
    }
}

class Lamp extends Device {
    constructor(power = 10, model = 'LED') {
        super(power, model);        
    }
}

class Laptop extends Device {
    constructor(power = 200, model = 'Noname') {
        super(power, model);        
    }
}

class Washer extends Device {
    constructor(power = 2000) {
        super(power);
    }
}

class Boiler extends Device {
    _volume = 100;

    constructor(power = 2500) {
        super(power);
    }

    getVolume() {
        return this._volume;
    }

    setVolume(value) {
        return this._volume = value;
    }
}

class DeviceSet {
    _items = [];

    add(device) {
        this._items.push(device);
    }

    get count() {
        return this._items.length;
    }

    isEmpty() {
        return this.count === 0;
    }

    switchOn() {
        this._items.forEach(element => {
            element.switchOn()
        });
    }

    switchOff() {
        this._items.forEach(element => {
            element.switchOff()
        });
    }

    getInputPower() {
        return this._items.reduce(
            (sum, item) => sum + item.getInputPower()
            , 0
        );
    }

    getItemsByClassName(name) {
        const set = new DeviceSet();

        this._items.forEach(element => {
            if (element.getClassName() === name) {
                set.add(element);
            }
        });

        return set;
    }

    toString() {
        const captions = this._items.map(item => item.toString());
        return captions.join(', ');
    }
}

