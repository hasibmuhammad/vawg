import Logo from "../Header/Logo/Logo";
import Search from "../Header/Search/Search";
import Favorite from "../Header/Favorite/Favorite";

const Header = ({ favorites, handleSearch }) => {
  return (
    <div className="flex justify-center items-center gap-4 py-2 mx-4 sticky -top-2 z-10">
      <Logo />
      <Search handleSearch={handleSearch} />
      <div className="flex justify-center items-center gap-4">
        <Favorite favorites={favorites} />
      </div>
    </div>
  );
};

export default Header;
