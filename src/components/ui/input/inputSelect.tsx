"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface InputSelectProps {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  label?: string;
  error?: string;
  searchable?: boolean;
}

const InputSelect: FC<InputSelectProps> = ({
  placeholder,
  options,
  value,
  onChange,
  disabled,
  label,
  error,
  searchable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "";

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClear = () => {
    onChange("");
    setSearchTerm("");
  };

  return (
    <div className="relative w-68 xl:w-85.5" ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full bg-primary-50 border rounded-2xl px-4 py-3 
          text-xs text-neutral-500 cursor-pointer
          flex items-center justify-between
          transition-all duration-200
          ${isOpen ? "border-primary-500 ring-2 ring-primary-500/20" : "border-primary-300"}
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-primary-400"}
          ${error ? "border-red-500" : ""}
        `}
      >
        <span
          className={`${!selectedLabel ? "text-neutral-400" : "text-neutral-700"}`}
        >
          {selectedLabel || placeholder}
        </span>
        <div className="flex items-center gap-2">
          {value && !disabled && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="hover:bg-gray-200 rounded-full p-0.5 transition-colors"
            >
              <IoClose className="w-3.5 h-3.5 text-neutral-500" />
            </button>
          )}
          <MdKeyboardArrowDown
            className={`w-4 h-4 text-neutral-500 transition-transform duration-200 
              ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {searchable && (
            <div className="p-2 border-b border-gray-100">
              <input
                type="text"
                placeholder="جستجو..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                dir="rtl"
              />
            </div>
          )}

          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`
                    w-full px-4 py-2.5 text-right text-sm
                    flex items-center justify-between
                    transition-colors duration-150
                    hover:bg-primary-50
                    ${value === option.value ? "bg-primary-100 text-primary-700 font-medium" : "text-gray-700"}
                  `}
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <svg
                      className="w-4 h-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-center text-sm text-gray-500">
                گزینه‌ای یافت نشد
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputSelect;
