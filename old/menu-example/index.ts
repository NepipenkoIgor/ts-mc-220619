import { generateMenu } from './menu';
import { menuList } from './menu/data';
import './menu/style.css';

// declare function $(selector: string): any;

const el: JQuery = $('.menu');
el.html(generateMenu(menuList)).on('click', (e: JQuery.Event) => {
    const aEl: HTMLAnchorElement = (e as any).target as HTMLAnchorElement;
    const {classList: cl} = aEl;
    if (!cl.contains('title')) {
        return;
    }
    const parentLi: HTMLLIElement = aEl.parentNode as HTMLLIElement;
    parentLi.classList.toggle('menu-open');
});

type Point = { x: number };

// type MyPoint = Point & { y: number };

interface IA {
    z: number;
}

type MyPoint = Point & IA;
const a: MyPoint = {x: 1, z: 1};
// type A = number | string;
// class B implements IA {
//     x: number;
//     y: number;
//     z: number;
// }
//
// new B();
