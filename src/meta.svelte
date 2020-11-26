<script>
  export let name, cp, faction;

  import TextInput from "./elements/textInput.svelte";
</script>

<style>
  /* input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  } */

  .meta {
    width: 100%;
  }
  .meta :global(.name) {
  }
  .second-row {
    display: flex;
  }
  .meta :global(.cp) {
    flex-basis: 25%;
  }
  .meta :global(.faction) {
    flex-basis: 75%;
  }
</style>

<div class="meta">
  <TextInput
    label="Player name"
    type="string"
    value={name}
    border
    passedClasses="name" />
  <div class="second-row">
    <TextInput
      label="CP"
      type="number"
      min={0}
      value={cp}
      border
      passedClasses="cp" />
    <TextInput
      label="Faction"
      type="string"
      value={faction}
      border
      passedClasses="faction" />
  </div>
</div>
