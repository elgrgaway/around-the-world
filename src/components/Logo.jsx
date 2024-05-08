import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className=" flex cursor-pointer items-center gap-3">
      <img className=" w-8" src="earth.png" alt="earth pic" />
      <h1 className=" text-xl font-semibold">Around the World</h1>
    </Link>
  );
}
export default Logo;
