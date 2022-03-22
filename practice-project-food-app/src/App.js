import Header from "./Components/Layout/Header";
import React, {useState} from 'react';
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log('show cart!')
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    console.log('hide cart!')
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;