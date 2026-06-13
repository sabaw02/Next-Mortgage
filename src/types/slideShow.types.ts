import { ReactNode } from "react";
import { HousesProps } from "./houses.types";

export interface SlideShowProps {
  children?: ReactNode;
  loading?: boolean;
  houses: HousesProps["houses"];
}
