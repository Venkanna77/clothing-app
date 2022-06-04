import { useContext } from "react"
import './shop.styles.scss'
import ProductCard from "../../components/product-card/product-card.components";
import { ProductContext } from "../../components/usercontext/products.component"

const Shop = () => {
    const {products} = useContext(ProductContext)
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop