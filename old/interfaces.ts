// type IAge = {
//     age: number;
// };
// type IName = {
//     firstName: string;
// };
// type IAccount = {
//     firstName: string;
//     age: number;
// };

// interface IName {
//     firstName: string;
// }
// interface IAge {
//     age: number;
// }
//
// interface IAccount extends IName, IAge {
//
// }

// let user1: TypeAccount = {
//     firstName: 'Igor',
//     age: 33
// };

// let user2: IAccount = {
//     firstName: 'Igor',
//     age: 33
// };

// TODO why  i can implement Type in class ???!!!!
// class User implements IAccount {
//     public firstName!: string;
//     public age!: number;
// }

// interface IMover {
//     mover(): void;
//
//     getStatus(): { speed: number };
// }
//
// interface IShaker {
//     shake(): void;
//
//     getStatus(): { frequency: number };
// }
//
// interface IMoveShake extends IMover, IShaker {
//     getStatus(): { speed: number, frequency: number };
// }


// interface IBase {
//     id: number;
// }
//
// let user: IBase = {id: 1, name: 'Igor'};
//
//
// interface IBase {
//     name: string;
// }
//
// app.use(CustomRouter)
//
// interface IRouter {
//     route(): void;
// }
//
// class CustomRouter implements IRouter {
//
// }

// interface IImmutablePoint {
//     readonly x?: number;
//     readonly y: number;
// }
// //
// // let immutablePoint: IImmutablePoint = {x: 1, y: 1};
// // immutablePoint.x = 3;
//
// type FromArray<T> = T extends (infer U)[] ? U : T;
//
// let a: Readonly = 1;

// type A = { new(a: number): void };
//
// let a: A = function v(_a: number) {
// }


