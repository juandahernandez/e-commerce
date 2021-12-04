import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { sumTotal } from "../../../Helpers/Funtions";
import { StoreContext } from "../../../Store/StoreProvider";
import "./Navbar.styles.css";
const NavBar = ({ children }) => {
  const [store] = useContext(StoreContext);

  const totalProducts = sumTotal(store, "quantity");
  return (
    <>
      <nav className="items navbar navbar-ligth bg-light mb-4">
        <div className="container">
          <span className="navbar-brand">
            <img
              className="logo"
              src="https://cryinggrumpies.files.wordpress.com/2015/07/crying-grumpies-netrunner-camaleon-baraja-the-grumpy-shop.jpg?w=584"
              alt="camaleon"
              width="70px"
              height="70px"
            />
            <h1 className="title-navbar">Pinturas JD</h1>
          </span>
          <NavLink to="/" className="link" activeClassName="selected">
            Home
          </NavLink>
          <NavLink
            to="/Products"
            className={(isActive) =>
              "nav-link selected" + (!isActive && " link")
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/Shop"
            className={(isActive) =>
              "nav-link selected" + (!isActive && " link")
            }
          >
            <i className="fas fa-shopping-cart"> ({totalProducts})</i>
          </NavLink>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default NavBar;
