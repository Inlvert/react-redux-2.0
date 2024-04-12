import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const newState = {
        ...state,
        count: state.count + 1
      }
      return newState;
    }
    case "decrement": {
      const newState = {
        ...state,
        count: state.count - 1
      }
      return newState;
    }
    default: return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const hendlerIncrement = () => {
    const action = {
      type: "increment"
    }
    dispatch(action);
  }

  const hendlerDecrement = () => {
    const action = {
      type: "decrement"
    }
    dispatch(action);
  }
  return (
    <div className="App-header ">
      <p>Count is: ${state.count}</p>
      <button onClick={hendlerDecrement}>Decriment</button>
      <button onClick={hendlerIncrement}>Increment</button>
    </div>
  );
}

export default App;
