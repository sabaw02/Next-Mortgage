"use client";
import CardsReserveLayout from "@/components/layout/CardsReserveLayout";
import BreadcrumbsComponent from "@/components/ui/breadcrumbs/breadcrumbs";
import SlideShowBlogs from "@/components/ui/slideShow/slideShowBlogs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import defaultImg from "./../../../../assets/images/defImg.jpg";
import { BlogsCardProps } from "@/types";

const DetailsBlogPage = () => {
  const params = useParams();
  const id = params?.id;

  const [data, setData] = useState<BlogsCardProps>();
  const [loading, setLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState<BlogsCardProps[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchAllData = async () => {
      setLoading(true);
      try {
        const [currentRes, allRes] = await Promise.all([
          fetch(`http://next.genzuni.website/api/blogs/${id}`),
          fetch("http://next.genzuni.website/api/blogs"),
        ]);

        if (!currentRes.ok || !allRes.ok) {
          throw new Error("خطا در دریافت داده");
        }

        const currentData = await currentRes.json();
        const allData = await allRes.json();

        setData(currentData);

        const blogsArray = Array.isArray(allData)
          ? allData
          : allData?.data || [];
        setAllBlogs(blogsArray);
      } catch (error) {
        console.error("خطا:", error);
        setData(null);
        setAllBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, [id]);

  const otherBlogs = Array.isArray(allBlogs)
    ? allBlogs.filter((blog: BlogsCardProps) => blog.id !== Number(id))
    : [];

  const defImg = data?.photos || defaultImg;

  if (loading)
    return (
      <div className="text-black text-center mt-20">در حال بارگذاری...</div>
    );
  if (!data)
    return (
      <div className="text-blue-600 text-center mt-20">بلاگی یافت نشد</div>
    );

  const persianDate = new Date(data?.created_at).toLocaleDateString("fa-IR");
  const persianReadingTime = data?.estimated_reading_time?.replace(
    /\d/g,
    (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)],
  );

  return (
    <div className=" w-[70%] h-auto">
      <div className="my-10">
        <BreadcrumbsComponent />
      </div>
      <div className="h-auto w-full space-y-3">
        <div className="w-full mx-auto">
          <div className="my-3 flex justify-between">
            <h4 className="text-[24px] text-[#000000] dark:text-[#FFFFFA] font-bold">
              {data?.title}
            </h4>
            <span className="content-center text-center w-25 h-8 bg-primary-400 rounded-[24px] text-[14px] font-semibold text-[#FFFFFA] ">
              {persianReadingTime || data?.estimated_reading_time}
            </span>
          </div>
          <div className="flex gap-1">
            <FaRegCalendarAlt className="text-[#80838D] dark:text-[#cbd5e1]" />
            <span className="text-[14px] text-[#80838D] font-semibold dark:text-[#cbd5e1]">
              {persianDate}
            </span>
          </div>
        </div>
        <div className="w-full h-117 rounded-[24px] relative">
          <Image
            src={defImg}
            alt="not-found"
            fill
            className="object-cover rounded-[24px]"
          />
        </div>
        <h4 className="text-[22px] text-[#80838D] dark:text-[#FFFFFA]  font-semibold">
          {data?.title}
        </h4>
        <p className="my-2 text-[16px] text-[#80838D] dark:text-[#cbd5e1]  font-medium">
          {data?.caption}
        </p>
      </div>
      <CardsReserveLayout title="آگهی های مشابه">
        <div className="w-full flex mx-auto justify-center">
          <div className="h-auto w-full mt-4">
            <SlideShowBlogs blogs={otherBlogs} />
          </div>
        </div>
      </CardsReserveLayout>
    </div>
  );
};
export default DetailsBlogPage;
