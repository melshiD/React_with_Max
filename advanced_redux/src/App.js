import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import uiSlice from './store/ui-slice';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cartState = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending request',
        message: 'sending cart data'
      }));

      //WHEN YOU SIT BACK DOWN, LEARN ABOUT ACTION CREATOR THUNKS

      const response = await fetch('https://react-http-b3bb7-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartState)
        });

      if (!response.ok) {
        throw new Error('sending cart data failed')
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'sent cart data successfully'
      })
      );
    }

    if(isInitial){
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'sending cart data failed'
      }));
    });

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
