import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import{
  increment,
  decrement,
  incrementByAmount,
  selectCount
} from "./redux/counterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      <h1>
      {count}

      </h1>
      <input
      value={counter}
      aria-label="Set increment amount"
      onChange={e => setcounter(Number(e.target.value)) }
    />
    <button onClick={() => dispatch(incrementByAmount(counter))}>IncrementByAmount</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
