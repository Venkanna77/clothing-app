import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as ClothLogo} from '../../assets/crown.svg'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../components/usercontext/cart.context";
import { UserContext } from "../../components/usercontext/user.context";
import { signOutuser } from "../../utils/firebase/firebase.utils";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <ClothLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to="/shop">SHOP</NavLinks>
          {currentUser ? (
            <NavLinks as='span' onClick={signOutuser}>SIGN OUT</NavLinks>
          ) : (
            <NavLinks to="/auth">SIGN-IN</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
