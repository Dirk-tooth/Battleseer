<script>
  // index represents either turn or which secondary is being scoring
  export let index, currentValue, thisValue, scoreCallback;
</script>

<style>
  .scoreButtons {
    width: 20%;
    height: 20px;
    border: 1px gray solid;
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
