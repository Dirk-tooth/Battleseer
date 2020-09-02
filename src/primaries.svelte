<script>
  import PriamryButton from "./primaryButton.svelte";
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
    /* width: 45%; */
    margin: 0px;
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
      <p class={'score-header'}>{scoreHeader}</p>
      <div class="button-group">
        {#each seedArray as score}
          <PriamryButton
            index={idx}
            currentValue={primaryScoreArray[idx]}
            thisValue={score}
            scoreCallback={() => scoreCallback(idx, score)} />
        {/each}
      </div>
    </div>
  {/each}

  <div class="total-container">
    <h3>Total Primary Points</h3>
    <h1>{totalScore} / 45</h1>
  </div>
</div>
