<script>
  // index represents either turn or which secondary is being scoring
  export let index, currentValue, thisValue, scoreCallback;
</script>

<style>
  .scoreButtons {
    width: 20%;
    height: 2rem;
    border: none;
    font-size: 0.75rem;
    color: #334;
  }
  .lessThanSellected {
    background-color: blueviolet;
    color: #eee;
    opacity: 75%;
  }
  .selected {
    background-color: blueviolet;
    color: #eee;
  }
  @media only screen and (max-width: 795px) {
    .scoreButtons {
      font-size: 1.25rem;
    }
  }
</style>

<button
  class={currentValue === thisValue ? 'selected scoreButtons' : currentValue >= thisValue ? 'lessThanSellected scoreButtons' : 'unselected scoreButtons'}
  on:click={() => scoreCallback(index, thisValue)}>
  {thisValue}
</button>
