import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./action";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>login/logout</button>
      <div>{!isLogged ? "user is not logged" : "user is logged"}</div>
    </div>
  );
}

export default App;
