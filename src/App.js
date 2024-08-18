import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Feature/Counter/CounterSlice';
import { addTodo, removeTodo } from './Feature/Todo/TodoSlice';
import { addCard, removeCard } from './Feature/AddCard/AddCardSlice';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const todos = useSelector(state => state.todo.todos);
  const cards = useSelector(state => state.card.cards);
  const [input, setInput] = useState("");
  const [bill, setBill] = useState(0);

  const addItem = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  }

  const addCardItem = (title, price) => {
    dispatch(addCard({ title, price }));
    setBill(prevBill => prevBill + price); // Use functional form of setState
  }

  const handleRemoveCard = (title, price, count) => {
    dispatch(removeCard({ title })); // Pass an object with the title key
    setBill(prevBill => prevBill - price * count); // Use functional form of setState
  }

  // useEffect(() => {
  //   console.log(cards); // Good for debugging
  // }, [cards]);

  return (
    <div className="App">
      <div className="Counter">
        <h1>Counter: {counter}</h1>
        <div className="buttoninc">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>

      <div className='Todo'>
        <h1>Todo</h1>
        <div className='input'>
          <input
            type="text"
            placeholder='Enter Todo'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='addbutton' onClick={addItem}>ADD</button>
        </div>
        <h3>Todo List</h3>
        <div className='todolist'>
          {todos.length === 0 && <h3>Insert Your Todos</h3>}
          {todos.map((todo) => (
            <div className='todos' key={todo.id}>
              <p>{todo.title}</p>
              <button className='button' onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </div>
          ))}
        </div>
      </div>

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
  );
}

export default App;
