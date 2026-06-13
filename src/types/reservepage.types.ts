export interface ReservePageProps {
  searchParams: Promise<{
    page?: string;
    sort?: string;
    order?: string;
    propertyType?: string;
    location?: string;
    minPrice?: string;
    maxPrice?: string;
    minRent?: string;
    maxRent?: string;
    minMortgage?: string;
    maxMortgage?: string;
    minArea?: string;
    maxArea?: string;
  }>;
}
