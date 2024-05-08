// import { useContext } from "react";
import ShowMessage from "../components/ShowMessaga";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchData } from "../useFetchData";
function Country() {
  //   const [countryDetail, setCountryDetail] = useState();
  //   const data1 = useContext(data);
  const { country } = useParams();
  const { result, isLoading, isErorr } = useFetchData(country);
  //   const link = country.toLowerCase();

  //   console.log(contryDetail);
  return (
    <>
      {isErorr && <ShowMessage message="something went wrong" />}
      {isLoading && <ShowMessage message="Loading..." />}
      {!isLoading && !isErorr && (
        <div>
          <Link to="..">
            <i className=" fa-solid fa-arrow-left rounded bg-gray-800 px-[10px] py-1.5 text-xl text-gray-100 dark:bg-gray-100 dark:text-gray-800"></i>
          </Link>
          <div className="mt-10 flex flex-wrap  items-start gap-10">
            <img
              className=" m-auto h-auto max-w-96"
              src={result.flags?.svg}
              alt={result.flags?.alt}
            />
            <div>
              <h2 className=" mb-20 text-3xl font-bold ">{country}</h2>
              <div className="flex  gap-32">
                <div>
                  <p className=" mb-10">
                    <span className=" font-bold">Population: </span>
                    <span className=" font-light">
                      {parseInt(result.population).toLocaleString()}
                    </span>
                  </p>
                  <p className=" mb-10">
                    <span className=" font-bold">Region: </span>
                    <span className=" font-light">{result.region}</span>
                  </p>
                  <p className=" mb-10">
                    <span className=" font-bold">Sub Region: </span>
                    <span className=" font-light">{result.subregion}</span>
                  </p>
                  <p className=" mb-10">
                    <span className=" font-bold">Capital: </span>
                    <span className=" font-light">{result.capital}</span>
                  </p>
                </div>
                <div>
                  <p className=" mb-10">
                    <span className=" font-bold">Top Level Domain: </span>
                    <span className=" font-light">
                      {result.tld?.join(" , ")}
                    </span>
                  </p>
                  <p className=" mb-10">
                    <span className=" font-bold">Currencies: </span>
                    <span className=" font-light">
                      {result?.currencies &&
                        Object.keys(result.currencies)
                          .map(
                            (Currency) =>
                              `${result?.currencies[Currency].name}`,
                          )
                          .join(" , ")}
                    </span>
                  </p>
                  <p className=" mb-10">
                    <span className=" font-bold">Languages: </span>
                    <span className=" font-light">
                      {result?.languages &&
                        Object.values(result.languages)
                          .map((lang) => `${lang}`)
                          .join(" , ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Country;
