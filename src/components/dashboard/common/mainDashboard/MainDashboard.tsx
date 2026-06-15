"use client";
import { StatCards } from "../statscard/StatCards";
import IncomeCard from "../incomecard/income-card";
import ProfileCard from "../profilecard/profile-card";

const MainDashboard = () => {
  return (
    <main className="flex min-w-0 flex-1 flex-col gap-4">
      <StatCards />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <IncomeCard />
        <ProfileCard />
      </div>
    </main>
  );
};

export default MainDashboard;
