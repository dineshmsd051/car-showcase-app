"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from "./";

const ShowMore = ( { pageNumber, isNextPage }: ShowMoreProps) => {
  
  const router = useRouter();

  const handleNavigation = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const newLimit = (pageNumber + 1) * 10;

    if (newLimit) {
      searchParams.set("limit", newLimit);
    } else {
      searchParams.delete("limit");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNextPage && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore