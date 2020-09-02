<script>
  // index represents either turn or which secondary you are scoring
  export let type, index, currentValue, thisValue, scoreCallback;
</script>

<style>
  .scoreButtons {
    width: 20%;
    height: 50px;
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
  class={currentValue === thisValue ? 'selected scoreButtons' : currentValue >= thisValue && type === 'secondary' ? 'lessThanSellected scoreButtons' : 'unselected scoreButtons'}
  on:click={() => scoreCallback(index, thisValue)}>
  {thisValue}
</button>
