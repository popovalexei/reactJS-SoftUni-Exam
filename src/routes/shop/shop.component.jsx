import { useContext } from 'react';
//SCSS
import './shop.styles.scss';
//Contexts
import { ProductsContext } from '../../contexts/products.context.jsx';
//Components
import ProductCard from '../../components/product-card/product-card.component.jsx';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
