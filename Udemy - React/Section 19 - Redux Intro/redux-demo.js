const redux = require("redux");

function counterReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case "Increment":
      return { counter: state.counter + 1 };
    case "Decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
const store = redux.createStore(counterReducer);

function counterSubsrciber() {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubsrciber);  
store.dispatch({ type: 'Decrement' });
store.dispatch({ type: 'Decrement' });
store.dispatch({ type: 'Decrement' });
store.dispatch({ type: 'Decrement' });