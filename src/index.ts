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
