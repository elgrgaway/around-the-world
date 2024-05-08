function SearchInput({ countriesList, setCountriesList }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    const filtered = countriesList.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase()),
    );

    setCountriesList(filtered);
  };
  return (
    <form onSubmit={submitHandler} className=" relative">
      <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-base text-gray-500 dark:text-gray-100"></i>
      <input
        type="text"
        placeholder="Search..."
        className=" bg-gray-10 rounded-full p-3 pl-16 shadow placeholder:text-gray-800 dark:bg-gray-800 dark:placeholder:text-gray-100"
      />
    </form>
  );
}
export default SearchInput;
