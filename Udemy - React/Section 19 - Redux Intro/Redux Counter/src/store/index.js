// import {createStore} from "redux"
import { configureStore } from "@reduxjs/toolkit";


import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";



// const counterReducer = (state=initialState,action)=>{ 
//   if(action.type === "increment"){
//     //state.counter++ will work but that should not be done
//     //You should never mutate the existing state: article for ref
//     //https://academind.com/tutorials/reference-vs-primitive-values/ 
//     return {...state,counter : state.counter+1};
//   }
//   if(action.type === "decrement"){
//     return {...state, counter : state.counter-1};
//   }
//   if(action.type === "increaseBy10"){
//     return {...state, counter : state.counter+10};
//   }

//   if(action.type === "toggleCounter"){
//     return {...state,showCounter : !state.showCounter};
//   }
//   else{
//     return state;
//   }
// }
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: {counter :counterSlice.reducer,auth:authSlice.reducer},
  // reducer :counterSlice.reducer,

});

  
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
