export {logOwnProps, hasOwnProp, hasProp, createEmptyObject}

// Задание 1
function logOwnProps(obj) {
    const keys = Object.getOwnPropertyNames(obj);

    keys.forEach(
        (key) => console.log(`${key} : ${obj[key]}`)
    );
}

// Задание 2
function hasOwnProp(propName,  obj) {
    return Object.hasOwn(obj, propName);
}

function hasProp(propName,  obj) {
    return propName in obj;
}

// Задание 3
function createEmptyObject() {
    return Object.create(null);
}
