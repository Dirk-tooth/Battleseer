<script>
  // index represents either turn or which secondary is being scoring
  export let index, currentValue, thisValue, scoreCallback;
</script>

<style>
  .scoreButtons {
    width: 4rem;
    height: 100%;
    border: none;
    border-left: 1px black solid;
    font-size: 1rem;
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
