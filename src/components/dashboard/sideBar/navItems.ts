import { IconType } from "react-icons";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineHeart,
  HiOutlineBuildingOffice,
  HiOutlineWallet,
  HiOutlineUsers,
  HiOutlineCreditCard,
} from "react-icons/hi2";

export interface NavItem {
  label: string;
  href: string;
  icon: IconType;
}

export const navItemsByRole: Record<"buyer" | "seller" | "admin", NavItem[]> = {
  buyer: [
    { label: "خانه", href: "/dashboard", icon: HiOutlineHome },
    {
      label: "رزروهای من",
      href: "/dashboard/reservations",
      icon: HiOutlineCalendar,
    },
    {
      label: "علاقه‌مندی‌ها",
      href: "/dashboard/favorites",
      icon: HiOutlineHeart,
    },
  ],
  seller: [
    { label: "خانه", href: "/dashboard", icon: HiOutlineHome },
    {
      label: "ملک‌های من",
      href: "/dashboard/properties",
      icon: HiOutlineBuildingOffice,
    },
    {
      label: "رزروهای دریافتی",
      href: "/dashboard/incoming-reservations",
      icon: HiOutlineCalendar,
    },
    { label: "درآمد", href: "/dashboard/earnings", icon: HiOutlineWallet },
  ],
  admin: [
    { label: "خانه", href: "/dashboard", icon: HiOutlineHome },
    { label: "کاربران", href: "/dashboard/users", icon: HiOutlineUsers },
    {
      label: "ملک‌ها",
      href: "/dashboard/properties",
      icon: HiOutlineBuildingOffice,
    },
    {
      label: "تراکنش‌ها",
      href: "/dashboard/transactions",
      icon: HiOutlineCreditCard,
    },
  ],
};
