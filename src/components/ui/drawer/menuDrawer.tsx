"use client";
import React from "react";
import { Button, Drawer } from "@heroui/react";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { BiHomeAlt, BiHotel } from "react-icons/bi";
import { text } from "stream/consumers";
import { HiOutlineHome } from "react-icons/hi";
import { LiaHotelSolid } from "react-icons/lia";
import { RiContactsLine } from "react-icons/ri";
import ThemeToggle from "@/components/common/ThemeToggle";
import Link from "next/link";
import { GrArticle } from "react-icons/gr";

const MenuDrawer = () => {
  const linksArr = [
    {
      icon: <HiOutlineHome className="size-5 text-primary-500 w-6 h-6" />,
      text: "خانه",
      href: "/",
    },
    {
      icon: <BiHotel className="size-5 text-primary-500 w-6 h-6" />,
      text: "رزرو",
      href: "/reserve",
    },
    {
      icon: <LiaHotelSolid className="size-5 text-primary-500 w-6 h-6" />,
      text: "رهن و اجاره",
      href: "/rent",
    },
    {
      icon: <GrArticle className="size-5 text-primary-500 w-6 h-6" />,
      text: "مقالات",
      href: "/blogs",
    },
    {
      icon: <RiContactsLine className="size-5 text-primary-500 w-6 h-6" />,
      text: "ارتباط با ما",
      href: "/ContactUs",
    },
  ];

  return (
    <div className="lg:hidden">
      <Drawer>
        <Button
          variant="secondary"
          className="bg-white/10 text-primary-500 dark:text-primary-500 dark:bg-[#1e293b]/5 w-10 h-10"
        >
          <FaBars className="w-6 h-6 cursor-pointer bg-none " />
        </Button>
        <Drawer.Backdrop dir="ltr">
          <Drawer.Content placement="left">
            <Drawer.Dialog className="w-64">
              <Drawer.CloseTrigger />
              <Drawer.Header>
                {/* <Drawer.Heading>Navigation</Drawer.Heading> */}
              </Drawer.Header>
              <Drawer.Body>
                {linksArr.map((item) => (
                  <Link href={item.href} className="flex flex-col gap-1">
                    <button
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                      type="button"
                    >
                      {item.icon}
                      <span className="text-primary-800 dark:text-primary-100">
                        {item.text}
                      </span>
                    </button>
                  </Link>
                ))}
                <div className=" flex justify-around mt-6">
                  <Link href={""} className="">
                    <button
                      className="min-[550px]:hidden w-24 h-10 duration-500 border-2 border-[#1C5387]
                      text-[#1C5387] font-semibold text-[16px] hover:scale-105 rounded-2xl"
                    >
                      ورود
                    </button>
                  </Link>
                  <Link href={""}>
                    <button
                      className="min-[550px]:hidden w-24 h-10 duration-500 bg-[#1C5387] text-[#FFFFFF]
                      font-semibold text-[16px] hover:scale-105 rounded-2xl "
                    >
                      ثبت نام
                    </button>
                  </Link>
                </div>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
