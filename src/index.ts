/// <reference lib="esnext" />

// /**let/const*/
// let period: number = 60;
// const baseUrl: string = 'http://localhost';
//
// /**object*/
//
// let firstName: string = 'Igor';
//
// let account = {
//     firstName,
//     getName(): string {
//         return this.firstName;
//     }
// }
// //
// // /*spred */
// let person = {...account};
// let dates = [...[1, 2, 3]]; // [1,2,3]
//
// /*destructoring*/
// let {firstName: myName} = account;
// // myName => 'Igor'
// let [firstEl] = dates;
// // firstEl => 1;
//
//
// /**for of*/
// for (const date of dates) {
//     console.log(date);
// }

// /**arrow function*/
//
// let sum = (a: number, b: number) => a + b;

// /*class*/
// class Point {
//     public x!: number;
//     public y!: number;
//
//     public constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }

// function userMessage([start, end]: TemplateStringsArray, {firstName: myName}: typeof person): string {
//     return `${start}${myName}${end}`;
// }
// console.log(userMessage`Good day, ${person} !!`);

// function sleep(ms: number): Promise<void> {
//     return new Promise<void>(resolve => {
//         setTimeout(resolve, ms);
//     });
// }
//
//
// async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
//     for (const item of items) {
//         await sleep(1000);
//         yield item;
//     }
// }
//
// async function spleakLikeSloth(items: string[]) {
//     for await (const item of getItemsReallySlowly(items)) {
//         console.log(item);
//     }
// }
//
// speakLikeSloth(['Hi', 'all', 'TypeScript', 'is', 'awesome']);

// enum Size {
//     S = 42,
//     M = 46,
//     XL = 52
// }
//
// let size1 = Size.M;
// let size2 = Size[52];
// console.log(size1);
// console.log(size2);

enum Actions {
    AddUser = 'Add User',
    DeleteUser = 'Delete User',
    EditUser = 'Edit User',

    RemoveUser = DeleteUser
}

function reducer(_state: number, actions: { type: Actions }): number {
    switch (actions.type) {
        case Actions.AddUser: {
            return 1;
        }
        case Actions.DeleteUser: {
            return 2;
        }
        default: {
            return 4;
        }
    }
}
