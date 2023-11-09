import "./Style.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import MenuBurger from "./NavBurger/NavBurger";
import DesktopNav from "./NavDesktop/NavDesktop";

function Navbar() {
  return (
    <nav className="NavbarM">
      <Link to="/">
        <img src={logo} className="Logo" alt="Logo" />
      </Link>
      <MenuBurger />
      <DesktopNav />
    </nav>
  );
}
export default Navbar;
