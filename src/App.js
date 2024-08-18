import './App.css';
import Todo from './componants/Todo';
import AddCard from './componants/AddCard';
import Counter from './componants/Counter';

function App() {
 

  // useEffect(() => {
  //   console.log(cards); // Good for debugging
  // }, [cards]);

  return (
    <div className="App">
      <Counter/>
      <Todo/>
      <AddCard/>

    </div>
  );
}

export default App;
