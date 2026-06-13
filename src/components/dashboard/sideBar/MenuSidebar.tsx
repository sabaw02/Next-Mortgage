'use client'
import { Bell, CalendarCheck, CreditCard, Crown, Heart, Home, User} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const MenuSidebar = () => {
  const pathname = usePathname();
  const menuSidebar = [
    { href: "/", title: "داشبورد", icon: Home },
    { href: "/user", title: "اطلاعات کاربری", icon: User },
    { href: "/reservations", title: "مدیریت رزروها", icon: CalendarCheck },
    { href: "/favorites", title: "علاقه‌مندی‌ها", icon: Heart },
    { href: "/payments", title: "پرداخت‌ها", icon: CreditCard },
    { href: "/notifications", title: "اعلان‌ها", icon: Bell },
  ];

  return (
    <div className="mt-10 flex flex-col gap-3">
      {menuSidebar.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-4 p-2 rounded-lg transition
               ${isActive ? "bg-gray-300" : "hover:bg-gray-100"}
            `}>
            <Icon size={24} color="black" />
            <p className="font-medium text-[18px] text-[#000000]">
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuSidebar;
