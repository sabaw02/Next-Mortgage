import FilterBox from "@/components/reserve/filterBox/filterBox";
import { FilterBoxProps } from "@/types";
import { Button, Drawer } from "@heroui/react";
import React, { FC } from "react";
import { VscFilter } from "react-icons/vsc";

const FilterBoxDrawer: FC<FilterBoxProps> = ({
  isRes,
  location,
  maxPrice,
  minPrice,
  houses,
  minRent,
  maxRent,
  minMortgage,
  maxMortgage,
  minArea,
  maxArea,
}) => {
  return (
    <div dir="ltr" className="lg:hidden">
      <Drawer>
        <Button size="lg" variant="secondary" className="bg-primary-500 h-9.5">
          <VscFilter className="text-white" />
          <span className="text-white"> فیلتر</span>
        </Button>
        <Drawer.Backdrop dir="ltr">
          <Drawer.Content placement="right">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              {/* {placement === "bottom" && <Drawer.Handle />} */}
              <Drawer.Header>
                <Drawer.Heading>
                  {/* {placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer */}
                </Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <div dir="rtl" className="mt-8">
                  <FilterBox
                    houses={houses}
                    isRes={isRes}
                    location={location}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    minRent={minRent}
                    maxRent={maxRent}
                    minMortgage={minMortgage}
                    maxMortgage={maxMortgage}
                    minArea={minArea}
                    maxArea={maxArea}
                  />
                </div>
              </Drawer.Body>
              <Drawer.Footer>
                <Button
                  slot="close"
                  variant="secondary"
                  className="bg-primary-500 text-white w-24"
                >
                  لغو
                </Button>
                <Button slot="close" className="bg-primary-500 text-white w-24">
                  تایید
                </Button>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default FilterBoxDrawer;
