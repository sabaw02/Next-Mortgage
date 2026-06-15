import BookingsTable from "@/components/dashboard/buyer/bookingsTable";
import MainDashboard from "@/components/dashboard/common/mainDashboard/MainDashboard";

const BuyerDashboardPage = () => {
  return (
    <div>
      <MainDashboard />
      <BookingsTable />
    </div>
  );
};

export default BuyerDashboardPage;
