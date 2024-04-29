import { useSelector, useDispatch } from "react-redux";
import "../../App.css";
import * as CounterActionCreators from "../../redux/actions/counterActionCreators";

function Counter(props) {
  // const { count, step, dodatu, decrement, reset, chengeStep } = props;

  // const hendlerIncrement = () => {
  //   const action = CounterActionCreators.increment();
  //   dispatch(action);
  // };

  // const hendlerDecrement = () => {
  //   const action = CounterActionCreators.decrement();
  //   dispatch(action);
  // };

  // const hendlerReset = () => {
  //   dispatch(CounterActionCreators.reset());
  // };

  // const hendelChengeStep = (e) => {
  //   const {
  //     target: { value },
  //   } = e;
  //   // dispatch(CounterActionCreators.step(+value));

  // const hendelChengeStep = (e) => {
  //   const {
  //     target: { value },
  //   } = e;
  // chengeStep(value)
  // };

  const { count, step } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const chengeStep = ({ target: { value } }) => {
    dispatch(CounterActionCreators.step(+value));
  };

  const dodatu = () => {
    dispatch(CounterActionCreators.increment());
  };

  const decrement = () => {
    dispatch(CounterActionCreators.decrement());
  };

  const reset = () => {
    dispatch(CounterActionCreators.reset());
  };

  return (
    <div className="App-header">
      <p>Count is ${count}</p>
      <p>
        Step is: <input value={step} onChange={chengeStep} />
      </p>

      <button onClick={dodatu}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     count: state.counter.count,
//     step: state.counter.step,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     dodatu: () => dispatch(CounterActionCreators.increment()),
//     decrement: () => dispatch(CounterActionCreators.decrement()),
//     reset: () => dispatch(CounterActionCreators.reset()),
//     // chengeStep: (newStep) => dispatch(CounterActionCreators.step(+newStep))
//     chengeStep: ({ target: { value } }) =>
//       dispatch(CounterActionCreators.step(+value)),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
