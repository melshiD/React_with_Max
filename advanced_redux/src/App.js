import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import uiSlice from './store/ui-slice';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cartState = useSelector(state => state.cart);
  useEffect(() => {
    fetch('https://react-http-b3bb7-default-rtdb.firebaseio.com/cart.json', 
            {method: 'PUT', 
            body: JSON.stringify(cartState)});
  }, [cartState]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
