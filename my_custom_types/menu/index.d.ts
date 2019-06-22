interface IListItem {
    title: string;
    items?: IListItem[];
}
declare function $(selector: string): any;
