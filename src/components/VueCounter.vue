<template>
  <div>
    <h1>Vue</h1>
    <div class="counter">
        <pre>{{ bears }}</pre>
        <pre>{{ bears2 }}</pre>
        <button @click="increasePopulation">one up</button>
        <button @click="removeAllBears">Remove all</button>
    </div>
  </div>
</template>

<script>
  import store from "./vanillaStore.js";

  // This approach is not working, the value is not being updated on the UI
  const { getState, setState, subscribe } = store;
  const { bears, increasePopulation, removeAllBears } = getState();

  let bears2 = 0;
  
  export default {
    data() {
      subscribe((state) => {
        bears2 = state.bears
        console.log(bears2)
        return state.bears;
      })
      return {
        bears,
        bears2
      }
    },
    setup() {
      return {
        setState,
        increasePopulation,
        removeAllBears
      }
    }
  }
</script>