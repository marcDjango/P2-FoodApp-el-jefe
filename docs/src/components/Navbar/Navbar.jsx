import "./Style.scss";
import { Link } from "react-router-dom";
import { useLocationEffect, useWindowWidth } from "../utils";
import logo from "../../assets/images/Logo3.svg";
import logoName from "../../assets/images/ELJEFE.png";
import MenuBurger from "./NavBurger/NavBurger";
import DesktopNav from "./NavDesktop/NavDesktop";
import SearchStyle from "../SearchBar/SearchStyle";
import SearchBar from "../SearchBar/SearchBar";

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
      {windowWidth <= 600 ? <SearchBar locationHome={isHome} /> : ""}
      <MenuBurger />
      <DesktopNav />
    </nav>
  );
}
export default Navbar;
