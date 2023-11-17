import "./Style.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import MenuBurger from "./NavBurger/NavBurger";
import DesktopNav from "./NavDesktop/NavDesktop";
import SearchStyle from "../SearchBar/SearchStyle";
import { useLocationEffect, useWindowWidth } from "../utils";

function Navbar() {
  const { currentPath, isHome } = useLocationEffect("", false);
  const isFixed = SearchStyle(isHome);
  const windowWidth = useWindowWidth();
  const navBarStyle =
    windowWidth >= 600 && isFixed ? "NavBarOFixe" : "NavbarOpen";
  return (
    <nav className={navBarStyle}>
      <Link to="/">
        <img src={logo} className="Logo" alt={currentPath} />
      </Link>
      <MenuBurger />
      <DesktopNav />
    </nav>
  );
}
export default Navbar;
