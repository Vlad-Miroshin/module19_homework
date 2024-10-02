const STATE_ON = true;
const STATE_OFF = false;

class Device {
    _power = 0; // мощность, Ватт
    _state = STATE_OFF; // состояние вкл/выкл

    constructor(power) {
        this.setPower(power);        
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
        if (this.isOn()) {
            return this.getPower();
        } else {
            return 0;
        }
      }
}

class Lamp extends Device {
    constructor(power = 10) {
        super(power);
    }
}

class DesktopPC extends Device {
    constructor(power = 200) {
        super(power);
    }
}

class Washer extends Device {
    constructor(power = 2000) {
        super(power);
    }
}

class Boiler extends Device {
    constructor(power = 2500) {
        super(power);
    }
}

class DeviceSet {
    _items = [];

    add(device) {
        this._items.push(device);
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
        let totalPower = 0;

        for (i = 0; i < this._items.length; i++) {
            totalPower += this._items[i].getInputPower();
        }

        return totalPower;
    }
}


const devices = new DeviceSet();
devices.add(new Lamp());
devices.add(new Lamp(20));
devices.add(new Lamp(100));
devices.add(new DesktopPC());
devices.add(new Washer());
devices.add(new Boiler());

devices.switchOn();

console.log(`Total input power is ${devices.getInputPower()} Wt`);


