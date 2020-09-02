<script>
  import SecondaryButton from "./secondaryButton.svelte";
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
  }
  .button-group {
    width: 45%;
  }
</style>

<div class="score-container">
  {#each scoreHeaders as scoreHeader, idx}
    <div class="score-block">
      <p class={'score-header'}>{scoreHeader}</p>
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

  <p>Total Primary Points</p>
  <p>{totalScore}</p>
</div>
