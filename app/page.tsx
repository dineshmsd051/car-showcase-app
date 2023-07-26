import { CarCard, CustomFilter, Hero, SearchBar } from './components'
import { fetchCars } from '@/api';


export default async function Home() {

  const allCars = await fetchCars();
  
  const isDataEmpty = !allCars || !Array.isArray(allCars) || allCars.length < 1


  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>

        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="fuel" />
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no cars found!</h2>
          </div>
        ) : (
          <div>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
