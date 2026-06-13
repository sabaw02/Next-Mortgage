"use client";
import React, { FC } from "react";
import { Breadcrumbs } from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface BreadcrumbsProps {
  title?: string;
  id?: number;
}

const BreadcrumbsComponent: FC<BreadcrumbsProps> = ({ title, id }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const categoryMap: Record<string, string> = {
    reserve: "رزرو هتل",
    rent: "رهن و اجاره",
    ContactUs: "ارتباط با ما",
    blogs: "مقالات ما",
  };

  const category = categoryMap[segments[0]] || segments[0];
  const isDetailPage = segments[1] === String(id);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Breadcrumbs>
        <Breadcrumbs.Item>
          <Link href="/" className="text-primary-100 text-[20px] font-normal">
            خانه
          </Link>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <span className="text-primary-500 text-[18px] font-normal">
            {category}
          </span>
        </Breadcrumbs.Item>

        {isDetailPage && (
          <Breadcrumbs.Item>
            <span className="text-primary-500 text-[18px] font-normal">
              {title}
            </span>
          </Breadcrumbs.Item>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;
