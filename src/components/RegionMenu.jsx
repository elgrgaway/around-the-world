import Select from "react-select";
const options = [
  { value: "All regions", label: "All regions" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];
function RegionMenu({ countriesList, setCountriesList }) {
  const changeHadler = (e) => {
    const region = e.value;

    const filterdCountry =
      region === options[0].value
        ? countriesList
        : countriesList.filter((country) => country.region === region);
    setCountriesList(filterdCountry);
  };

  return (
    <Select
      defaultValue={options[0]}
      className=" "
      classNames={{
        placeholder: () => "dark:text-gray-100",
        input: () => "dark: text-gray-100",
        singleValue: () => " dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between rounded-md gap-12 shadow pl-4 pr-2 dark:bg-gray-800",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:text-gray-100 dark:bg-gray-800",
      }}
      options={options}
      onChange={changeHadler}
    />
  );
}
export default RegionMenu;
