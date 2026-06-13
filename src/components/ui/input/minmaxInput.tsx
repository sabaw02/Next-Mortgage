import React, { FC, ReactNode } from "react";

interface MinMaxInputProps {
  label: string;
  minOnChange: (minValue: string) => void;
  maxOnChange: (maxValue: string) => void;
  minValue: string;
  maxValue: string;
  minPlaceholder: string;
  maxPlaceholder: string;
  icon: ReactNode;
}

const MinMaxInput: FC<MinMaxInputProps> = ({
  label,
  minValue,
  maxValue,
  minOnChange,
  maxOnChange,
  minPlaceholder,
  maxPlaceholder,
  icon,
}) => {
  return (
    <div className="flex flex-col space-x-2 text-primary-500 space-y-4">
      <div className="flex items-center space-x-2">
        {icon}
        <span>{label}</span>
      </div>
      <div className="flex justify-between gap-2">
        <input
          type="number"
          placeholder={minPlaceholder}
          className="w-32 xl:w-41.25 h-9.5 border border-primary-300 rounded-2xl outline-none px-3 text-sm"
          value={minValue}
          onChange={(e) => minOnChange(e.target.value)}
        />
        <input
          type="number"
          placeholder={maxPlaceholder}
          className="w-32 xl:w-41.25 h-9.5 border border-primary-300 rounded-2xl outline-none px-3 text-sm"
          value={maxValue}
          onChange={(e) => maxOnChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MinMaxInput;
