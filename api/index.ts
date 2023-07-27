import { CarProps, FilterProps } from "@/types";
import axios from "axios";

 
export const fetchCars = async ( filters: FilterProps) => {

   const { manufacturer, year, fuel,limit, model } = filters;

  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: {
      manufacturer: manufacturer || "",
      year: year || "",
      fuel: fuel || "",
      limit: limit || "",
      model: model || "",
    },
    headers: {
      "X-RapidAPI-Key": "82a43e6bcdmshafe029c73090d30p1ca608jsn172dc9c14c93",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const result = response.data
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const getCarImages = (car: CarProps, angle?: number) => {

  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  // API Key of the car Image api 
  url.searchParams.append(
    "customer",
    "hrjavascript-mastery"
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
}

