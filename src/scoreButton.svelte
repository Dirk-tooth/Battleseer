<script>
  // index represents either turn or which secondary you are scoring
  export let index, currentValue, thisValue, scoreCallback;
</script>

<style>
  .scoreButtons {
    width: 50px;
    height: 50px;
  }
  .selected {
    background-color: blueviolet;
  }
</style>

<button
  class={currentValue === thisValue ? 'selected scoreButtons' : 'unselected scoreButtons'}
  on:click={() => scoreCallback(index, thisValue)}>
  {thisValue}
</button>
