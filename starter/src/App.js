import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";


function App() {

  const [quantity, setQuantity] = useState(1)

  //Cart state
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  // Modal state
  const { isOpen } = useSelector((state) => state.modal);

  // Loading state
  useEffect(()=>{
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }


  return(
    <main>
    {isOpen && <Modal /> }  
    <Navbar />
    <CartContainer quantity={quantity} setQuantity={setQuantity} />

    </main>
  )
  
  
}
export default App;
