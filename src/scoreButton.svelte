<script>
  // index represents either turn or which secondary you are scoring
  export let index, currentValue, thisValue, scoreCallback;
</script>

<style>
  .selected {
    background-color: blueviolet;
  }
</style>

<button
  class={currentValue === thisValue ? 'selected' : 'unselected'}
  on:click={() => scoreCallback(index, thisValue)}>
  {thisValue}
</button>
