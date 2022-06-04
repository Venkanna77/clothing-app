import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as ClothLogo} from '../../assets/crown.svg'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../components/usercontext/cart.context";
import { UserContext } from "../../components/usercontext/user.context";
import { signOutuser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss'

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <ClothLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (<span className="nav-link" onClick={signOutuser}>SIGN OUT</span>):(
              <Link className="nav-link" to="/auth">
            SIGN-IN
          </Link>
            )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
