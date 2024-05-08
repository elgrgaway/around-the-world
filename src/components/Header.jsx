import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
function Header() {
  return (
    <>
      <header className=" mb-6 bg-white shadow dark:bg-slate-800 md:mb-3">
        <div className="container mx-auto  px-5 md:px-0 ">
          <div className="flex h-20 justify-between items-center">
            <Logo />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
