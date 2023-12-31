"use client";;
import { useState, Fragment } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';


const CustomFilter = ( { title, options} : CustomFilterProps  ) => {

  const [selected, setSelected] = useState([options[0]]);
  const router = useRouter();

  const updateSearchParams = (e: {title: string, value: string}) => {
    const searchParams = new URLSearchParams(window.location.search);
    const { title, value } = e;

    if (value) {
      searchParams.set("value", value);
    } else {
      searchParams.delete("value");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;


    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          updateSearchParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter