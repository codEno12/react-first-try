import './App.css';

// Use state in react - called react hook
import { useState, useEffect } from 'react'
/**
 * REACT State
 *
 * State in react is a plain javascript object used by 
 * react to reperesent a piece of information about the 
 * components current situation
 *
 * const [nameOfState, setterFunction] = userState(initialValue)
 *
 * Events 
 * An event is an action that can be 
 * triggered as a result of the user action or 
 * some kind of a system generated event 
 *
 * onClick = event listener 
 * setCounter gets an access to the previous value 
 * through the parameter prevCount 
 *
 * All changes happens without a website reload
 *
 * Use Effect 
 * allows us to do something on some kind of an effect
 * or some kind of an event 
 *
 * Most Important Rule of React 
 * Never modify state manually / never mutate the state 
 *
 * Counter 
 * Counter is not a just a variable, it part 
 * of the react state and react state can only be 
 * changed using its own setter function 
 * 
 * useEffect(()  => {
 *  setCounter(100)
 * }, []) 
 * call some code whenever something happens in your react 
 * 
 */


const App = () => {
  const [counter, setCounter] = useState(0);
  // run as soon as the page load
  useEffect(() => {
    alert("You've changes the counter to " + counter) 
  }, [counter])
  
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1 )}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1 )}>+</button>
  </div>
  );
}

export default App;


/** 
 * Components 
 * 
 * Create components and import them 
 * Components are like functions 
 *
 * Every component has a built in PROP OBJECT
 * casing matters for the props
 *
 * Cutom Component example
 *
 * const Person = (props) => {
 *  return (
 *    <>
 *      <h1>Name: {props.name}</h1>
 *      <h2>Last Name:{props.lastName}</h2>
 *      <h2>Age: {props.age}</h2>
 *   </>
 *  )
 *}
 *
 *Props
 *
 * Allow us to pass dynamic data to components 
 * They act like arguments we pass onto a funciton
 *
 * In cases where you do not need to pass on a dynamic dynamic expression you can omit the {} but must have it for dynamic expressions
 * e.g name = 'Jane' age ={2+2}
 * 
 * Custom component with props example 
 * 
 * const App = () =>  {
 *  return (
 *    <div className="App">
 *      <Person name={'John'} lastName={'Doe'} age={25}/>
 *      <Person name={'Mary'} lastName={'Doe'} age={24} />
 *    </div>
 *  );
 * }
 */

