"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import MainLayout from "@/components/layout/mainLayout";
import BlogsCard from "@/components/ui/cards/blogsCard/BlogsCard";
import Link from "next/link";
import { BlogsCardProps } from "@/types";
import Loading from "./loading";
import InputSelect from "@/components/ui/input/inputSelect";
import PaginationComponent from "@/components/ui/pagination/paginationComponent";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const CATEGORY_OPTIONS = [
  { label: "ویلایی", value: "1" },
  { label: "آپارتمان", value: "2" },
  { label: "پنت هاوس", value: "3" },
  { label: "دفتر اداری", value: "4" },
  { label: "مغازه", value: "5" },
  { label: "زمین", value: "6" },
  { label: "باغ", value: "7" },
];

const BlogsPage = () => {
  const searchParams = useSearchParams();
  const [allBlogs, setAllBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "newest" | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = Number(searchParams.get("limit")) || 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/blogs`);
        if (!res.ok) {
          throw new Error("خطا");
        }
        const result = await res.json();
        const blogs = Array.isArray(result?.data) ? result.data : [];
        setAllBlogs(blogs);

        const uniqueCategories = [
          ...new Set(
            blogs
              .map((blog: BlogsCardProps) => blog.category_id)
              .filter(Boolean),
          ),
        ];
        setCategories(uniqueCategories as string[]);
      } catch (error) {
        console.error("خطا:", error);
        setAllBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    let result = [...allBlogs];

    if (search.trim()) {
      result = result.filter(
        (blog: BlogsCardProps) =>
          blog.title?.toLowerCase().includes(search.toLowerCase()) ||
          blog.caption?.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category) {
      result = result.filter(
        (blog: any) => String(blog.category_id) === category,
      );
    }

    if (sortBy === "latest") {
      result.sort(
        (a: BlogsCardProps, b: BlogsCardProps) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
    } else if (sortBy === "newest") {
      result.sort(
        (a: BlogsCardProps, b: BlogsCardProps) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      );
    }

    return result;
  }, [search, category, sortBy, allBlogs]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    if (currentPage !== 1) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      window.history.pushState({}, "", `${window.location.pathname}?${params}`);
    }
  }, [search, category, sortBy]);

  if (loading) return <Loading />;

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="mx-auto mt-5 w-full h-auto px-4 sm:px-6 lg:px-8">
      <MainLayout title="مقالات ما">
        <div className="mb-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-end justify-between">
          <div className="w-full md:w-auto space-y-1 flex-1">
            <p className="text-xl sm:text-[22px] dark:text-gray-50 text-[#1E2022]">
              جستجو
            </p>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو در مقالات..."
              className="w-full md:w-75 h-12 rounded-3xl text-[#8B8D98] dark:text-[#334155] bg-[#F0F0F3] dark:bg-[#cbd5e1] pr-5 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div className="w-full md:w-auto space-y-1">
            <p className="text-xl sm:text-[22px] dark:text-gray-50 text-[#1E2022]">
              دسته بندی
            </p>
            <InputSelect
              placeholder="همه دسته‌ها"
              options={CATEGORY_OPTIONS}
              value={category}
              onChange={handleCategoryChange}
            />
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 mt-2 md:mt-0">
            <button
              onClick={() => setSortBy(sortBy === "latest" ? null : "latest")}
              className={`w-full sm:w-35.75 h-12 font-semibold text-base rounded-3xl cursor-pointer transition-all
                ${
                  sortBy === "latest"
                    ? "bg-primary-400 text-white"
                    : "text-primary-400 border border-primary-400"
                }`}
            >
              آخرین بروزرسانی
            </button>
            <button
              onClick={() => setSortBy(sortBy === "newest" ? null : "newest")}
              className={`w-full sm:w-25 h-12 font-semibold text-base rounded-3xl cursor-pointer transition-all
                ${
                  sortBy === "newest"
                    ? "bg-primary-400 text-white"
                    : "border border-primary-400 text-primary-400"
                }`}
            >
              جدیدترین
            </button>
          </div>
        </div>

        {paginatedBlogs.length === 0 ? (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            مقاله‌ای یافت نشد
          </div>
        ) : (
          <>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
              {paginatedBlogs.map((item: any) => (
                <BlogsCard key={item.id} {...item} />
              ))}
            </div>
            <div className="my-7">
              {totalPages > 1 && (
                <PaginationComponent
                  currentPage={currentPage}
                  totalPages={totalPages}
                  limit={itemsPerPage}
                  search={search}
                />
              )}
            </div>
          </>
        )}
      </MainLayout>
    </div>
  );
};

export default BlogsPage;
