import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';
const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state=> state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    // dispatch({type:"toggleCounter"});
    dispatch(counterActions.toggleCounter());
    
  };
  const incrementHandler = ()=>{
    // dispatch({type:"increment"});
    dispatch(counterActions.increment());
  }
  const decrementHandler = ()=>{
    // dispatch({type:"decrement"});
    
    dispatch(counterActions.decrement());
  }
  const increaseHandler = ()=>{
    // dispatch({type:"increaseBy10"});
    dispatch(counterActions.increase(10));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter &&
        <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>

       </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
