import React from "react";
import create from "zustand";
import store from "./vanillaStore.js";

const useStore = create(store);

const ReactCounter = () => {
  const increasePopulation = useStore(state => state.increasePopulation);
  const removeAllBears = useStore(state => state.removeAllBears);
  const bears = useStore(state => state.bears);
  
  return <div>
    <h1>React</h1>
    <pre>{bears}</pre>
    <button onClick={increasePopulation}>one up</button>
    <button onClick={removeAllBears}>Remove all</button>
    <br />
  </div>
}

export default ReactCounter;