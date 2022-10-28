import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';


import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";

function App() {

  //Cart state
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  // Modal state
  const { isOpen } = useSelector((state) => state.modal);

  return(
    <main>
    {isOpen && <Modal /> }  
    <Navbar />
    <CartContainer />

    </main>
  )
  
  
}
export default App;
