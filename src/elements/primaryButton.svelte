<script>
  // index represents either turn or which secondary is being scoring
  export let index, currentValue, thisValue, scoreCallback;
</script>

<style>
  .scoreButtons {
    /* width: auto; */
    height: 100%;
    border: none;
    border-left: 1px #334 solid;
    font-size: 1rem;
    flex-grow: 1;
    color: #334;
  }
  .selected {
    background-color: blueviolet;
    color: #eee;
  }
  @media only screen and (max-width: 795px) {
    .scoreButtons {
      width: auto;
      flex-grow: 1;
      border: none;
      font-size: 2rem;
    }
  }
</style>

<button
  class={currentValue === thisValue ? 'selected scoreButtons' : 'unselected scoreButtons'}
  on:click={() => scoreCallback(index, thisValue)}>
  {thisValue}
</button>
