export interface IListItem {
    title: string;
    items?: IListItem[];
}


export const menuList: IListItem[] = [
    {
        title: 'Животный',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Коты'}
                ]
            }
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    {title: 'Скалярии'},
                    {title: 'Петушки'},
                ]
            },
            {
                title: 'Форель',
                items: [
                    {title: 'Морская Форель'},
                ]
            }
        ]
    }
];
