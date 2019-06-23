// class Point {
//     public constructor(
//         public readonly x: number,
//         protected y: number,
//         private z: number,
//     ) {
//     }
//
//     public onInit(): void {
//         this.x = 1;
//     }
// }
//
// let p: Point = new Point(1, 2, 1);
//
// class MyPoint extends Point {
//     public constructor(x: number, y: number, z: number) {
//         super(x, y, z);
//     }
//
//     public onInit(): void {
//         console.log('TypeScript');
//         super.onInit();
//     }
// }

// class Singleton {
//     private static _instance: Singleton;
//
//     private constructor() {
//     }
//
//     public static getInstance(): Singleton {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
//
// }
//
// let ins1: Singleton = Singleton.getInstance();
// let ins2: Singleton = Singleton.getInstance();
// let ins3: Singleton = Singleton.getInstance();


// TODO return value in mixins
// type Constructable = new (...args: any[]) => {};
//
//
// export function Timestamped<BC extends Constructable>(Base: BC) {
//     return class extends Base {
//         public timestamped: Date = new Date();
//     };
// }
//
// export function Tagged<BC extends Constructable>(Base: BC) {
//     return class extends Base {
//         public tagged: string = 'typescript';
//     };
// }
//
// class BasePoint {
//     public constructor(
//         public readonly x: number,
//         protected y: number,
//     ) {
//     }
//
//     public onInit(): void {
//
//     }
// }
//
// class Point extends Tagged(Timestamped(BasePoint)) {
//     public z: number;
//
//     public constructor(x: number, y: number, z: number) {
//         super(x, y);
//         this.z = z;
//     }
// }
//
// let p: Point = new Point(1, 2, 2);
// console.log(p.tagged);
// console.log(p.timestamped);

// abstract class AbstractInput {
//     public abstract value: any;
//
//     public onFocus(): void {
//
//     }
//
//     public onBlur(): void {
//
//     }
//
//     public abstract getValue(): any ;
// }
//
// class MdInput extends AbstractInput {
//     public value: string = '';
//
//     public getValue(): string {
//         return this.value.toLowerCase();
//     }
//
// }
//
// let input: MdInput = new MdInput();

interface A {
    a: number;
}

interface B {
    b: string;
}

//
// class A {
//     public a!: number;
// }
// class B {
//     public a!: number;
// }

function fn(x: A | B): string | number {
    if ('a' in x) {
        return x.a;
    }
    return x.b;
}

let aArg: A = {a: 1};
let bArg: B = {b: '1'};
fn(aArg);
