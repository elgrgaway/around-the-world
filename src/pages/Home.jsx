// import CountryList from "./components/CountryList";
import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessaga";

import { useFetchData } from "../useFetchData";
function Home() {
  //   const data = createContext(countriesList);
  const { result, filterdCountries, isLoading, isErorr, setFilterdCountries } =
    useFetchData();
  return (
    <>
      {isErorr && <ShowMessage message="something went wrong" />}
      {isLoading && <ShowMessage message="Loading..." />}
      {!isLoading && !isErorr && (
        <>
          <div className="flex items-center justify-between gap-10 max-[600px]:flex-col">
            <SearchInput
              countriesList={result}
              setCountriesList={setFilterdCountries}
            />
            <RegionMenu
              countriesList={result}
              setCountriesList={setFilterdCountries}
            />
          </div>
          <CountryList data={filterdCountries} />
        </>
      )}
    </>
  );
}
export default Home;
