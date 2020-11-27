<script>
  import SecondaryButton from "./elements/secondaryButton.svelte";
  import TextInput from "./elements/textInput.svelte";

  export let scoreHeaders,
    seedArray,
    primaryScoreArray,
    scoreCallback,
    totalScore;
</script>

<style>
  .score-container {
    width: 100%;
    color: #334;
  }
  .score-block {
    display: flex;
    justify-content: space-between;
    border: 1px #334 solid;
    margin: 1rem;
  }
  .button-group {
  }
  .total-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px #334 solid;
    color: #334;
  }

  @media only screen and (max-width: 795px) {
    .score-block {
      display: flex;
      flex-direction: column;
      margin: 1rem 0rem;
    }
    .button-group {
      width: 100%;
    }
    .total-container {
      margin: 1rem 0rem;
    }
    .total-container h3 {
      flex-basis: 50%;
    }
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
