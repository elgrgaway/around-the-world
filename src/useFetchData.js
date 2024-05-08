import { useEffect, useState } from "react";
export function useFetchData(country) {
  const [result, setResult] = useState([]);
  const [filterdCountries, setFilterdCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErorr, setIsErorr] = useState(false);
  useEffect(() => {
    if (country) {
      fetchDataFromApi();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);
  const fetchDataFromApi = () => {
    let url = "https://restcountries.com/v3.1/all";

    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country.toLowerCase()}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          //countrypage
          setResult(data[0]);
        } else {
          //homepage
          setResult(data);
          setFilterdCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })

      .catch(() => {
        setIsErorr(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilterdCountries(data);
    } else {
      fetchDataFromApi();
    }
  };
  return {
    result,
    filterdCountries,
    isLoading,
    isErorr,
    setFilterdCountries,
  };
}
