export function generateMenu(list: IListItem[]): string {
    let output: string = `<ul>`;
    for (const item of list) {
        output += `<li><a class=${item.items ? 'title' : ''}>${item.title}</a>`;
        if (item.items) {
            output += generateMenu(item.items);
        }
        output += `</li>`;
    }
    output += `</ul>`;
    return output;
}
