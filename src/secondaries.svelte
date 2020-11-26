<script>
  import SecondaryButton from "./secondaryButton.svelte";
  import TextInput from "./elements/textInput.svelte";

  export let scoreHeaders,
    seedArray,
    primaryScoreArray,
    scoreCallback,
    totalScore;
</script>

<style>
  .score-container {
    /* background-color: blueviolet; */
    width: 100%;
  }
  .score-block {
    display: flex;
    justify-content: space-between;
    /* background-color: blue; */
    border: 1px black solid;
    margin: 1rem;
  }
  .score-header {
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .button-group {
    width: 45%;
  }
  .total-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px black solid;
  }
</style>

<div class="score-container">
  {#each scoreHeaders as scoreHeader, idx}
    <div class="score-block">
      <TextInput label={scoreHeader} type="string" value={''} />
      <div class="button-group">
        {#each seedArray as score}
          <SecondaryButton
            index={idx}
            currentValue={primaryScoreArray[idx]}
            thisValue={score}
            scoreCallback={() => scoreCallback(idx, score)} />
        {/each}
      </div>
    </div>
  {/each}

  <div class="total-container">
    <h3>Total Secondary Points</h3>
    <h1>{totalScore} / 45</h1>
  </div>
</div>
