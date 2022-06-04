import './product-card.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react';
import { CartContext } from '../usercontext/cart.context';

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)
    return (
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
          ADD TO CART
        </Button>
      </div>
    );
}

export default ProductCard;