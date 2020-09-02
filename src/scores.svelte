<script>
  import ScoreButton from "./scoreButton.svelte";
  export let type,
    scoreHeaders,
    seedArray,
    primaryScoreArray,
    scoreCallback,
    totalScore;
</script>

<style>
  .score-container {
    background-color: blueviolet;
    width: 100%;
  }
  .score-block {
    display: flex;
    justify-content: space-between;
    background-color: blue;
    border: 1px black solid;
  }
  .button-group {
    width: 45%;
  }
</style>

<div class="score-container">
  {#each scoreHeaders as scoreHeader, idx}
    <div class="score-block">
      <p>{scoreHeader}</p>
      <div class="button-group">
        {#each seedArray as score}
          <ScoreButton
            {type}
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
