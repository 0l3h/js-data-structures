`use strict`;

// ******************************** Map *******************************
console.group("Map");
const array1 = ['Ivan', 'Product Manager'];
const array2 = ['Elena', 'UI/UX Designer'];
const map1 = new Map();
map1.set(...array1);
map1.set(...array2);
console.log(map1.keys());  
console.log(map1.values());
console.log("Количество элементов:", map1.size);
map1.set('Andrey', 'QA Engineer');
map1.delete('Andrey');
console.log(map1.get("Elena"));
console.groupEnd();

// ******************************** Set *******************************
console.group("Set");
const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
console.log(set1.has(3));
console.log(set1.has(4));
set1.add(4);
set1.add(5);

for (const value of set1) {
    console.log(value);
}

let sumOfSetNumbers = 0;
for (const value of set1) {
    sumOfSetNumbers += value;
}
console.log(sumOfSetNumbers);

set1.delete(2);
set1.clear();
console.groupEnd();

// ****************************** MyArray() *************************
console.group("Итерируемый MyArray()");
class MyArray {
    constructor(...args) {
        for (let i = 0; i < args.length; i++) {
            this[i] = args[i];
        }
        this.length = args.length;
    }

    [Symbol.iterator]() {
        let currentValue = 0;
        return {
            next: () => {
                if(currentValue > this.length - 1){
                    return {value: undefined, done: true,}
                }
                return {value: this[currentValue++], done: false,}
            },
        }
    }
}

const myArray = new MyArray(1, 5, 6, 7, 8, 9);

for(const value of myArray) {
    console.log(value);
}
console.groupEnd();