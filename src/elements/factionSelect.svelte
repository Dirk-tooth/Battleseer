<script>
  export let label, border, value, playerID;
  export let passedClasses = null;

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
    bind:value={$players[playerID - 1][value]}>
    <option class="option-wrapper" value="Choose one...">Choose one...</option>

    <optgroup class="optgroup" label="Aeldari">
      <option class="option-wrapper" value="Asuryani">Asuryani</option>
      <option class="option-wrapper" value="Drukhari">Drukhari</option>
      <option class="option-wrapper" value="Harlequins">Harlequins</option>
      <option class="option-wrapper" value="Ynnari">Ynnari</option>
      <option class="option-wrapper" value="Aeldari">Aeldari</option>
    </optgroup>

    <optgroup class="optgroup" label="Chaos">
      <option class="option-wrapper" value="Chaos Knights">
        Chaos Knights
      </option>
      <option class="option-wrapper" value="Daemons">Daemons</option>
      <option class="option-wrapper" value="Death Guard">Death Guard</option>
      <option class="option-wrapper" value="Fallen">Fallen</option>
      <option class="option-wrapper" value="Gellerpox Infected">
        Gellerpox Infected
      </option>
      <option class="option-wrapper" value="Heretic Astartes">
        Heretic Astartes
      </option>
      <option class="option-wrapper" value="Servants of the Abyss">
        Servants of the Abyss
      </option>
      <option class="option-wrapper" value="Thousand Sons">
        Thousand Sons
      </option>
      <option class="option-wrapper" value="Titanicus Traitoris">
        Titanicus Traitoris
      </option>
      <option class="option-wrapper" value="Chaos">Chaos</option>
    </optgroup>

    <optgroup class="optgroup" label="Imperium">
      <option class="option-wrapper" value="Adepta Sororitas">
        Adepta Sororitas
      </option>
      <option class="option-wrapper" value="Adeptus Astartes">
        Adeptus Astartes
      </option>
      <option class="option-wrapper" value="Adeptus Custodes">
        Adeptus Custodies
      </option>
      <option class="option-wrapper" value="Adeptus Mechanicus">
        Adeptus Mechanicus
      </option>
      <option class="option-wrapper" value="Adeptus Titanicus">
        Adeptus Titanicus
      </option>
      <option class="option-wrapper" value="Astra Militarum">
        Astra Militarum
      </option>
      <option class="option-wrapper" value="Elucidian Starstriders">
        Elucidian Starstriders
      </option>
      <option class="option-wrapper" value="Fallen">Fallen</option>
      <option class="option-wrapper" value="Grey Knights">Grey Knights</option>
      <option class="option-wrapper" value="Imperial Knights">
        Imperial Knights
      </option>
      <option class="option-wrapper" value="Inquisition">Inquisition</option>
      <option class="option-wrapper" value="Officio Assassinorum">
        Officio Assassinorum
      </option>
      <option class="option-wrapper" value="Sisters of Silence">
        Sisters of Silence
      </option>
      <option class="option-wrapper" value="Imperium">Imperium</option>
    </optgroup>

    <optgroup class="optgroup" label="Necrons">
      <option class="option-wrapper" value="Necrons">Necrons</option>
    </optgroup>

    <optgroup class="optgroup" label="Orks">
      <option class="option-wrapper" value="Orks">Orks</option>
    </optgroup>

    <optgroup class="optgroup" label="T'au Empire">
      <option class="option-wrapper" value="T'au Empire">T'au Empire</option>
    </optgroup>

    <optgroup class="optgroup" label="Tyranids">
      <option class="option-wrapper" value="Brood Brothers">
        Brood Brothers
      </option>
      <option class="option-wrapper" value="Genestealer Cults">
        Genestealer Cults
      </option>
      <option class="option-wrapper" value="Tyranids">Tyranids</option>
    </optgroup>

  </select>
</div>
