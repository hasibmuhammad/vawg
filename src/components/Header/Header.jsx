import Logo from "../Header/Logo/Logo";
import Search from "../Header/Search/Search";
import Favorite from "../Header/Favorite/Favorite";
import WishList from "../Header/Wishlist/Wishlist";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4 mx-4">
      <Logo />
      <Search />
      <div className="flex justify-center items-center gap-4">
        <Favorite />
        <WishList />
      </div>
    </div>
  );
};

export default Header;
