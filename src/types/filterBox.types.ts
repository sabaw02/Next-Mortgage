import { HousesProps } from "./houses.types";

 export interface FilterBoxProps {
  isRes: boolean;
  location?: string;
  minPrice: number;
  maxPrice: number;
  houses: HousesProps;
  minRent?: number;
  maxRent?: number;
  minMortgage?: number;
  maxMortgage?: number;
  minArea?: number;
  maxArea?: number;
  // setHousesList?: (data: HousesProps) => void;
  // currentFilters?: {
  //   propertyType?: string;
  //   location?: string;
  //   minPrice?: number;
  //   maxPrice?: number;
  //   minRent?: number;
  //   maxRent?: number;

  // };
}
