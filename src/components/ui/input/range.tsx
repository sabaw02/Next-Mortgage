"use client";
import React from "react";
import { Label, Slider } from "@heroui/react";

const Range = () => {
  return (
    <div>
      <Slider
        className="w-full max-w-xs"
        defaultValue={[100, 500]}
        formatOptions={{ currency: "USD", style: "currency" }}
        maxValue={1000}
        minValue={0}
        step={50}
      >
        {/* <Slider.Output className="w-85.5 " /> */}
        <Slider.Track className="h-2 w-68 xl:w-85.5">
          {({ state }) => (
            <>
              <Slider.Fill className="bg-primary-700" />
              {state.values.map((_, i) => (
                <Slider.Thumb
                  key={i}
                  index={i}
                  className="w-3 h-3 rounded-full"
                />
              ))}
            </>
          )}
        </Slider.Track>
      </Slider>
    </div>
  );
};

export default Range;
