<script>
  export let playerID, placeholder, label, value;
  export let min = 0;
  export let passedClasses = null;
  export let border = false;

  import { players, activePlayer } from "../stores.js";
</script>

<style>
  .textInput {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.25rem;
    padding: 0.25rem;
    color: #334;
    /* background-color: red; */
  }
  .textInput input {
    border: none;
    box-shadow: none;
    outline: none;
    width: 90%;
    font-size: 2rem;
    color: #334;
    /* background-color: blue; */
  }
  .border {
    border: 1px #334 solid;
  }
</style>

<div class={`textInput ${border ? 'border' : null} ${passedClasses}`}>
  <label for={label}>{label}</label>
  <input
    {placeholder}
    id={label}
    type="number"
    {min}
    bind:value={$players[playerID - 1][value]} />
</div>
