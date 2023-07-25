
export const calculateCarRent = (city_mpg, year) => {
  // Base rent per day (adjust this value as needed)
  const baseRentPerDay = 50;

  // Mileage rate per mile (adjust this value as needed)
  const mileageRate = 0.2;

  // Age-based discount rate (adjust this value as needed)
  const ageDiscountRate = 0.02;

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Calculate the age of the car
  const ageOfCar = currentYear - year;

  // Calculate the base rent for the car
  let rent = baseRentPerDay;

  // Adjust rent based on mileage
  rent += city_mpg * mileageRate;

  // Adjust rent based on car age (applying discount)
  rent -= rent * (ageDiscountRate * ageOfCar);

  // Round the rent to two decimal places
  rent = Math.round(rent * 100) / 100;

  return rent;
};
