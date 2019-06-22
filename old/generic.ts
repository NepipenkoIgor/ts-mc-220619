// Interface / Type / Class / function

// type AdminAccount = {
//     id: string,
//     info: {
//         permissions: string[]
//     }
// };

// type UserAccount = {
//     id: number,
//     info: {
//         name: string,
//         age: number
//     }
// };

// interface IName {
//     name: string;
// }
//
// interface IAge {
//     age: number;
// }
//
// interface IUser extends IName, IAge {
//
// }
//
// let user1 = {
//     name: 'Igor'
// }
//
// type TypeAccount<Info extends typeof user1, Id = number> = {
//     id: Id;
//     info: Info
// };
//
//
// let admin: TypeAccount<{ permissions: string[], name: string }, string>;
// let user: TypeAccount<{name: string, age: number}>;

// interface IPerson {
//     firstName: string;
//     age: number;
//     location: string;
// }
//
// type ReadOnly<T> = {
//     readonly [P in (keyof T)]?: T[P]
// };
//
// let user: ReadOnly<IPerson> = {
//     firstName: 'Igor',
// };

// type CB = (...args: any) => any;
//
// type IReturnType<T> = T extends (a: infer R) => string ? R : T;
//
// type cb = (a: string) => number;
//
// let cbValue: ReturnType<cb> = 's';

// let a: Exclude<string | number | boolean, string> = 's';
