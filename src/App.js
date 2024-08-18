import './App.css';
import Todo from './componants/Todo';
import AddCard from './componants/AddCard';
import Counter from './componants/Counter';
import Home from './componants/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/addcard" element={<AddCard />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
