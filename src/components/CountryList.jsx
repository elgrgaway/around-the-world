// import { defaultProps } from "react-select/base";
import CountryCard from "./CountryCard";
import PropTypes from "prop-types";
import EmptySearch from "./EmptySearch";

function CountryList({ data }) {
  return (
    <>
      {data && data.length === 0 ? (
        <EmptySearch />
      ) : (
        <div className="container mx-auto my-10  px-5 md:px-0 ">
          <div className="  mt-8 grid justify-between gap-x-[7px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,_auto)]">
            {data &&
              data.map((country) => (
                <CountryCard
                  alt={country.flags.alt}
                  img={country.flags.svg}
                  name={country.name.common}
                  key={country.name.official}
                  population={country.population}
                  capital={country.capital}
                  region={country.region}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

// CountryList.propTypes = {
//   data: PropTypes.array.isRequired,
// };
export default CountryList;
