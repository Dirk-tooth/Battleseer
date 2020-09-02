<script>
  // index represents either turn or which secondary is being scoring
  export let index, currentValue, thisValue, scoreCallback;
</script>

<style>
  .scoreButtons {
    width: 20%;
    height: 2rem;
    border: none;
    /* border-left: 1px black solid; */
    font-size: 0.75rem;
  }
  .lessThanSellected {
    background-color: blueviolet;
    opacity: 75%;
  }
  .selected {
    background-color: blueviolet;
  }
</style>

<button
  class={currentValue === thisValue ? 'selected scoreButtons' : currentValue >= thisValue ? 'lessThanSellected scoreButtons' : 'unselected scoreButtons'}
  on:click={() => scoreCallback(index, thisValue)}>
  {thisValue}
</button>
