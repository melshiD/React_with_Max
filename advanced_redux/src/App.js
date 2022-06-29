import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import uiSlice from './store/ui-slice';
import {sendCartData, fetchCartData} from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cartState = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch((fetchCartData()));
  }, [dispatch]);

  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }
    
    if(cartState.changed){
      dispatch(sendCartData(cartState));
    };
  }, [cartState, dispatch]);

  return (
    <Fragment>
      {notification && 
        (<Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
