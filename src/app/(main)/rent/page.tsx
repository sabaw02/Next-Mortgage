import RentWrapper from "@/components/rent/rentWrapper/rentWrapper";
import { getHouses } from "@/utils/api/reserve/housesApi";

const RentPage = async ({ searchParams }: { [key: string]: any }) => {
  const {
    search,
    page,
    limit,
    order,
    sort,
    location,
    minPrice,
    maxPrice,
    minRent,
    maxRent,
    minMortgage,
    maxMortgage,
    minArea,
    maxArea,
  } = await searchParams;

  const houses = await getHouses(
    search,
    page,
    limit,
    order,
    sort,
    location,
    minPrice,
    maxPrice,
    minRent,
    maxRent,
    minMortgage,
    maxMortgage,
    minArea,
    maxArea,
  );
  const pages = Number(page) || 1;
  const limits = Number(limit) || 7;

  const minPrices = Number(minPrice);
  const maxPrices = Number(maxPrice);

  const minRents = Number(minRent);
  const maxRents = Number(maxRent);

  const minMortgages = Number(minMortgage);
  const maxMortgages = Number(maxMortgage);

  const minAreas = Number(minArea);
  const maxAreas = Number(maxArea);

  return (
    <RentWrapper
      houses={houses}
      page={pages}
      limit={limits}
      search={search}
      order={order}
      sort={sort}
      location={location}
      minPrice={minPrices}
      maxPrice={maxPrices}
      minRent={minRents}
      maxRent={maxRents}
      minMortgage={minMortgages}
      maxMortgage={maxMortgages}
      minArea={minAreas}
      maxArea={maxAreas}
    />
  );
};

export default RentPage;
