<script>
  export let label, options, border;
  export let passedClasses = null;
</script>

<style>
  .selectWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.25rem;
    padding: 0.25rem;
    color: #334;
  }
  .border {
    border: 1px #334 solid;
  }
  .select {
    display: block;
    font-size: 2rem;
    color: #334;
    padding: 0rem 2rem 0rem 0rem;
    width: 100%;
    max-width: 100%;
    box-sizing: none;
    margin: 0;
    border: none;
    box-shadow: none;
    outline: none;
    border-radius: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fcfcfc;
    /* background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
    background-repeat: no-repeat, repeat;
    background-position: right 0.5rem top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  .select::-ms-expand {
    display: none;
    outline: none;
  }
  .select:hover {
    border-color: #888;
    outline: none;
  }
  .select:focus {
    /* border-color: #aaa; */
    /* box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7); */
    /* box-shadow: 0 0 0 3px -moz-mac-focusring; */
    color: #333;
    outline: none;
  }
  .select option {
    font-weight: normal;
  }
  .option-wrapper {
    /* display: flex;
    justify-content: space-between; */
  }
</style>

<div class={`selectWrapper ${border ? 'border' : null} ${passedClasses}`}>
  <label for={`${label}-select`}>{label}</label>

  <select name={label} id={`${label}-select`} class="select">
    {#each options as option, idx}
      <option class="option-wrapper" value={option}>{option}</option>
    {/each}
  </select>
</div>
