import HeaderDashboard from "@/components/dashboard/header/HeaderDashboard";
import SideBar from "@/components/dashboard/sideBar/SideBar";
import { getServerUser } from "@/lib/auth/getServerUser";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getServerUser();

  if (!user) redirect("/login");

  return (
    <>
      <div className="bg-[#ECECEC] w-full h-full flex p-8 gap-3 ">
        <div>
          <SideBar role={user.role} />
        </div>
        <div className="w-full">
          <HeaderDashboard />
          {children}
        </div>
      </div>
    </>
  );
}
