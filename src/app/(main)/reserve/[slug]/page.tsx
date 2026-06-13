import ReserveSinglePage from "@/components/reserve/reserveSinglePage/reserveSinglePage";
import { getHouseById } from "@/utils/api/reserve/housesApi";
import { HouseDetailProps } from "@/types";

const PropertyReservePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const houseDetail: HouseDetailProps = await getHouseById(slug);

  return <ReserveSinglePage houseDetail={houseDetail} />;
};

export default PropertyReservePage;
