<script>
  export let label, options, border;
  export let processor = list => list.map(item => item.name);
  export let passedClasses = null;

  const processedOptions = processor(options);
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
    padding: 0rem 2.5rem 0rem 0rem;
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
    background-image: url("/drop-down-arrow.svg");
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
</style>

<div class={`selectWrapper ${border ? 'border' : null} ${passedClasses}`}>
  <label for={`${label}-select`}>{label}</label>

  <select name={label} id={`${label}-select`} class="select">
    {#each processedOptions as option, idx}
      <option class="option-wrapper" value={option}>{option}</option>
    {/each}
  </select>
</div>
