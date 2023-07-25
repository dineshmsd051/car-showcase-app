"use client";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "../constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredManufacturesList =
    searchQuery === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Search a car"
            displayValue={(manufacturer: string) => {
              return manufacturer;
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car-logo"
            />
          </Combobox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearchQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturesList?.map((manufacturer) => (
                <Combobox.Option
                  key={manufacturer}
                  className={({ active }) => `
                    relative search-manufacturer__option
                    ${active ? "bg-primary-blue text-white" : "text-grey-900"}
                  `}
                  value={manufacturer}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {manufacturer}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        >
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
