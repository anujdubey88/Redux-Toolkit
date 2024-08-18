import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCard, removeCard } from '../Feature/AddCard/AddCardSlice'
import { useState } from 'react';

export default function AddCard() {

    const cards = useSelector(state => state.card.cards);
    const [bill, setBill] = useState(0);
    const dispatch = useDispatch();
  
    const addCardItem = (title, price) => {
      dispatch(addCard({ title, price }));
      setBill(prevBill => prevBill + price); // Use functional form of setState
    }
  
    const handleRemoveCard = (title, price, count) => {
      dispatch(removeCard({ title })); // Pass an object with the title key
      setBill(prevBill => prevBill - price * count); // Use functional form of setState
    }

  return (
    <div>
      <div className='Card'>
        <h1>Card</h1>
        <div className='card'>
          <div>
            <h3>LAPTOP</h3>
            <h5>Price: 100000₹</h5>
            <button onClick={() => addCardItem("LAPTOP", 100000)} className='button'>ADD TO CARD</button>
          </div>
          <div>
            <h3>MOBILE</h3>
            <h5>Price: 50000₹</h5>
            <button onClick={() => addCardItem("MOBILE", 50000)} className='button'>ADD TO CARD</button>
          </div>
          <div>
            <h3>TABLE</h3>
            <h5>Price: 5000₹</h5>
            <button onClick={() => addCardItem("TABLE", 5000)} className='button'>ADD TO CARD</button>
          </div>
          <div>
            <h3>CHAIR</h3>
            <h5>Price: 500₹</h5>
            <button onClick={() => addCardItem("CHAIR", 500)} className='button'>ADD TO CARD</button>
          </div>
        </div>
        <h3>Total Price: {bill}₹</h3>
        <div className='cardsare'>
          {cards.length === 0 && <h4>Add Items to Cart</h4>}
          {cards.map((card) => (
            card.count > 0 && (
              <div className='cardlist' key={card.id}>
                <h3>{card.title}</h3>
                <h5>Price: {card.price}₹</h5>
                <h5>Count: {card.count}</h5>
                <button className='button' onClick={() => handleRemoveCard(card.title, card.price, card.count)}>Remove</button>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}
