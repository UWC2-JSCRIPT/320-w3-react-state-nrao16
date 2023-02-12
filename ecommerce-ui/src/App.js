import { useState } from 'react';
import bnbs from './bnbs.json';
import './App.css';
import ECommPage from './ECommPage/ECommPage';

function App() {
  const [vacationRentals, setVacationRentals] = useState(bnbs);
  const [cartRentals, setCartRentals] = useState([]);

  const addToCart = (rental) => {
    let newCartList = [...cartRentals];
    newCartList.push(rental);
    setCartRentals(newCartList);

  }

  const removeFromCart = (rental) => {
    let newCartList = cartRentals.filter(currentRental =>
      currentRental.title !== rental.title
    )
    setCartRentals(newCartList);

  }
  return (
    <div className="App">
      <ECommPage
        vacationRentals={vacationRentals}
        cartRentals={cartRentals}
        addToCart={addToCart}
        removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
