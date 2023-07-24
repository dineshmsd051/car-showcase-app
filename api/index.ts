import axios from "axios";

const fetchCars = async () => {

const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  params: { model: "corolla" },
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

export default fetchCars;