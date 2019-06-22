// const user = {
//     firstName: 'Igor',
//     age: 33
// } as const;
// // //
// user.age = 25;
// user.firstName = 'Vlad';


// let keys: keyof typeof user = 'firstName';

// let myName: (typeof user)['firstName'] = 'Eugene';

// let booleanMap: {[key: string]: typeof user} = {
//     '1' : {
//         firstName: 'Igor',
//         age: 33
//     },
//     '2': {
//         firstName: 'Vlad',
//         age: 33
//     },
//     '3': {
//         firstName: 'Igor 1',
//         age: 33
//     },
//     '4': {
//         firstName: 'Igor 3',
//         age: 33
//     },
// };

// let arr = [1, 2, 4] as const;
//
// arr[100] = 3;
// arr.push(1);
// arr.length = 0;
//
// let arr1: readonly [string, number] = ['Igor', 4];
//
// arr1[100] = 3;
// arr1.push(1);
// arr1.length = 0;
// type ArrType = string | typeof user;
// let arr2: ArrType[] =  ['sdsd', user ];

// interface IFact {
//     factId: number;
//     role: string;
// }
//
// type Data = { action: string, data: IFact };
//
// const dataList: Data[] = [];
//
// const uniqueValue = (): keyof IFact => {
//     return 'factId';
// };
//
// dataList.map((item: Data) => {
//     if (item.data[uniqueValue()] === 2) {
//         //....
//     }
//     return item;
// });
