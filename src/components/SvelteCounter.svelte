<script>
	import store from "./vanillaStore.js";

	const { getState, subscribe } = store;
  const { increasePopulation, removeAllBears } = getState();
   
	$: bears = 0;

	subscribe(state => {
		bears = state.bears
	});

</script>

<div>
	<h1>Svelte</h1>
	<pre>
		{bears}
	</pre>
	<button on:click={increasePopulation}>one up</button>
	<button on:click={removeAllBears}>Remove all</button>
	<br />
</div>