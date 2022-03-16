import Header from "./Components/Layout/Header";
import React, {Fragment, useState} from 'react';
import Meals from "./Components/Meals/Meals";
import Cart
 from "./Components/Cart/Cart";
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
    <Fragment>
      {cartIsShown && <Cart hideCart={hideCartHandler}/>}
      <Header showCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
WHEN YOU SIT BACK DOWN FIGURE OUT WHY THE SHOW CART FEATURE DOESNT WORK 
BUT THE HIDE CART FEATURE WORKS