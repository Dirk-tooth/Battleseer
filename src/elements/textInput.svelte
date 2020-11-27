<script>
  export let label, type, value, min, passedClasses, border;
</script>

<style>
  .textInput {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.25rem;
    padding: 0.25rem;
    color: #334;
  }
  .textInput input {
    border: none;
    box-shadow: none;
    outline: none;
    width: 95%;
    font-size: 2rem;
    color: #334;
  }
  .border {
    border: 1px #334 solid;
  }
</style>

<div class={`textInput ${border ? 'border' : null} ${passedClasses}`}>
  <label for={label}>{label}</label>
  <input id={label} {type} {min} {value} />
</div>
