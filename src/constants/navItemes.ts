export interface navItemes{
    id:number;
    name: string;
    href:string;
}

export const headerNavItemes: navItemes[] = [
    { id: 1, name: "خانه", href: "/" },
    { id: 2, name: "رزرو سریع", href: "/reserve" },
    { id: 3, name: "رهن و اجاره", href: "/rent" },
     { id: 5, name: "مقالات ما ", href: "/blogs" },
    { id: 6, name: "ارتباط با ما", href: "/ContactUs" },
    {id: 7, name:'  ورود' , href:''},
    {id: 8, name:' ثبت نام' , href:''},

];
