// interface IAccount {
//     firstName: string;
//     age: number;
// }
//
// let person  = IAccount;

// let account = {
//     firstName: 'Igor',
//     age: 33
// };
// //
// let person: (typeof account);

// let num: number;

let num: number;
num = 6;
num = 0xF00d;
num = 0b1010;
num = 0o1010;
num = NaN;

let isDone: boolean = false;

let str = 'ts';

let nill: null = null;
let und: undefined = undefined;

let bigInt: bigint = 4n;


const key1: unique symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3: symbol = Symbol('key3');

let strictObject = {
    [key1]: 100,
    [key2]: 'ts',
};

let a1 = strictObject[key1];

function onlyKey1(_value: typeof key1): void {

}
onlyKey1(key2);
