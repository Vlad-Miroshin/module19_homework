import {Lamp, Laptop, Washer, Boiler, DeviceSet} from './classes.js';

const devices = new DeviceSet();
devices.add(new Lamp());
devices.add(new Lamp(20));
devices.add(new Lamp(100, 'Inc'));
devices.add(new Laptop(200, 'Lenovo'));
devices.add(new Laptop(150, 'Apple'));
devices.add(new Washer());
devices.add(new Boiler());

function logTotalInputPower(devices) {
    console.log(`Total input power is ${devices.getInputPower()} wt`);
}

function logCommand(command) {
    console.log(`Command: ${command}`);
}

// список всех устройств
console.log(`Devices [${devices.count}]: ${devices.toString()}`);

// включить все
logCommand('SwitchOn');
devices.switchOn();

logTotalInputPower(devices);

// выключить все
logCommand('SwitchOff');
devices.switchOff();

logTotalInputPower(devices);

// включить только лампочки
logCommand('SwitchOn(Lamps)');
const lamps = devices.getItemsByClassName('Lamp');
lamps.switchOn();

logTotalInputPower(devices);

logCommand('SwitchOff');
devices.switchOff();

// включить бойлер
logCommand('SwitchOn(Boiler)');
const boiler = devices.getItemsByClassName('Boiler');
boiler.switchOn();

logTotalInputPower(devices);

// уходя - гасите свет!
logCommand('SwitchOff');
devices.switchOff();

logTotalInputPower(devices);



