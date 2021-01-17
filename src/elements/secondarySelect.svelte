<script>
  export let label, playerID, index;
  export let passedClasses = null;
  export let border = false;
  import { players, activePlayer } from "../stores";
</script>

<style>
  .selectWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.25rem;
    padding: 0.25rem;
    color: #334;
    flex-basis: 65%;
    max-width: 65%;
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
    /* padding-left: 1rem; */
    font-size: 1rem;
    /* background-color: aqua; */
    width: 100%;
  }
  .select optgroup {
    font-weight: bold;
    font-size: 1rem;
  }
</style>

<div class={`selectWrapper ${border ? 'border' : null} ${passedClasses}`}>
  <label for={`${label}-select`}>{label}</label>

  <select
    name={label}
    id={`${label}-select`}
    class="select"
    bind:value={$players[playerID - 1].secondariesCatagories[index]}>
    <option class="option-wrapper" value="Choose one...">Choose one...</option>
    <optgroup class="optgroup" label="Codex Specific Secondaries">
      <option class="option-wrapper" value="Codex Specific">
        Codex Specific
      </option>
    </optgroup>
    <optgroup class="optgroup" label="Battlefield Supremacy">
      <option class="option-wrapper" value="Engage on All Fronts">
        Engage on All Fronts
      </option>
      <option class="option-wrapper" value="Linebreaker">Linebreaker</option>
      <option class="option-wrapper" value="Domination">Domination</option>
    </optgroup>
    <optgroup class="optgroup" label="No Mercy, No Respite">
      <option class="option-wrapper" value="Thin Their Ranks">
        Thin Their Ranks
      </option>
      <option class="option-wrapper" value="Grind Them Down">
        Grind Them Down
      </option>
      <option class="option-wrapper" value="While We Stand, We Fight">
        While We Stand, We Fight
      </option>
    </optgroup>
    <optgroup class="optgroup" label="Purge the Enemy">
      <option class="option-wrapper" value="Titan Hunter">Titan Hunter</option>
      <option class="option-wrapper" value="Bring it Down">
        Bring it Down
      </option>
      <option class="option-wrapper" value="Cut Off the Head">
        Cut Off the Head
      </option>
      <option class="option-wrapper" value="Assassinate">Assassinate</option>
    </optgroup>
    <optgroup class="optgroup" label="Shadow Operations">
      <option class="option-wrapper" value="Raise the Banners High">
        Raise the Banners High
      </option>
      <option class="option-wrapper" value="Investigate Sights">
        Investigate Sights
      </option>
      <option class="option-wrapper" value="Deploy Scramblers">
        Deploy Scramblers
      </option>
      <option class="option-wrapper" value="Teleport Homer">
        Teleport Homer
      </option>
    </optgroup>
    <optgroup class="optgroup" label="Warpcraft">
      <option class="option-wrapper" value="Abhor the Witch">
        Abhor the Witch
      </option>
      <option class="option-wrapper" value="Mental Interrogation">
        Mental Interrogation
      </option>
      <option class="option-wrapper" value="Psychic Ritual">
        Psychic Ritual
      </option>
      <option class="option-wrapper" value="Pierce the Veil">
        Pierce the Veil
      </option>
    </optgroup>
  </select>
</div>
