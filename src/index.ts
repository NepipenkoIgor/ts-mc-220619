import { generateMenu } from './menu';
import { menuList } from './menu/data';
import './menu/style.css';

const el: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;

el.innerHTML = generateMenu(menuList);
el.addEventListener('click', (e: MouseEvent) => {
    const aEl: HTMLAnchorElement = e.target as HTMLAnchorElement;
    const {classList: cl} = aEl;
    if (!cl.contains('title')) {
        return;
    }
    const parentLi: HTMLLIElement = aEl.parentNode as HTMLLIElement;
    parentLi.classList.toggle('menu-open');
});
