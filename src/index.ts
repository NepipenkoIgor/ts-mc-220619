/*function average(a: number, b: number, c: number): string {
    const avg: number = (a + b + c) / 3;
    return `AVERAGE IS ${avg}`;
}

average(1, 2);
average(1, '2', 1);
let num: number = average(1, 2, 1);*/

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `AVERAGE IS ${avg}`;
// }
//
// average(1, 2);
// average(1, '2', 1);
// let num: number = average(1, 2, 1);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `AVERAGE IS ${avg}`;
// }
//
// average(1, 2);
// average(1, '2', 1);
// let num: number = average(1, 2, 1);


// function isString(item: string | number): item is string {
//     return typeof item === 'string';
// }
//
//
// function average(...args: (string | number)[]): string {
//     let total: number = 0;
//     for (const item of args) {
//         if (isString(item)) {
//             total += Number(item);
//             continue;
//         }
//         total += item;
//     }
//     const avg: number = total / args.length;
//     return `AVERAGE IS ${avg}`;
// }
//
// average(1, 2);
// average(1, 1, 1, 2, 3, 4, 5);
// let num: number = average(1, 2, 1);


function isString(item: string | number): item is string {
    return typeof item === 'string';
}

type sn = string | number;

export function average(a: number, b: string): string;  // 1
export function average(a: string, b: number, c: string): string; // 2
export function average(a: string): string; // 2
export function average(...args: sn[]): string {
    let total: number = 0;
    for (const item of args) {
        if (isString(item)) {
            total += Number(item);
            continue;
        }
        total += item;
    }
    const avg: number = total / args.length;
    return `AVERAGE IS ${avg}`;
}
//
// average(1, 2);
// average(1, '2', 1);
// average(1, 1, 1, 2, 3, 4, 5);
// average(1, 1, 1, 2, 3, 4, 5);
//
// average(1, '1');
// average('2', 1, '2');
//
// let num: number = average(1, 2, 1);


// type CB = (this: void, e: Event) => void;
//
// class UIElement {
//     public addClickListener(_onclick: CB): void {
//
//     }
// }
//
// class Handler {
//     public info!: string;
//     public onClickBad(this: Handler, _e: Event): void {
//         this.info = 'e.message';
//     }
// }
//
// let h: Handler = new Handler();
// let uiElement: UIElement = new UIElement();
//
// uiElement.addClickListener(h.onClickBad);
