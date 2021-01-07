<script>
  export let playerID;

  import { players, activePlayer } from "./stores.js";

  import TextInput from "./elements/textInput.svelte";
  import NumInput from "./elements/numInput.svelte";
  import FactionSelect from "./elements/factionSelect";
  // import SelectInput from "./elements/selectInput.svelte";

  import { FactionList } from "./utilities/constantsList.js";
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
    {playerID}
    value="name"
    border
    placeholder={`Player ${playerID}`}
    passedClasses="name" />
  <div class="second-row">
    <NumInput
      label="CP"
      {playerID}
      value="cp"
      min={0}
      border
      passedClasses="cp" />
    <!-- <SelectInput
      border
      label="Faction"
      options={FactionList}
      passedClasses="faction" /> -->
    <FactionSelect
      label="Faction"
      options={FactionList}
      border
      {playerID}
      value="faction"
      passedClasses="faction" />
  </div>
</div>
