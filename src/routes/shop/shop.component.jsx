import { useContext, Fragment } from 'react';

// SCSS
import './shop.styles.scss';

// Contexts
import { CategoriesContext } from '../../contexts/categories.context.jsx';

// Components
import ProductCard from '../../components/product-card/product-card.component.jsx';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
