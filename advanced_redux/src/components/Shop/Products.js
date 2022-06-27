import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DYMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'my first book', description: 'first book I ever wrote'},
  { id: '2', price: 18, title: 'my second book', description: 'second and best to that date book I ever wrote'},
  { id: 'p3', price: 4.87, title: 'Gumball', description: 'ball of chewed gum, lovingly chewed by human jaws'},
  { id: 'p4', price: 12001.06, title: 'Car', description: 'A brand new car!'}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {
        DYMMY_PRODUCTS.map( product => (
            <ProductItem
              key={product.id}
              id={product.id}
              title= {product.title}
              price={product.price}
              description={product.description}
            />
            )
        )
      }
      </ul>
    </section>
  );
};

export default Products;
