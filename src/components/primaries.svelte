<script>
  import PriamryButton from "../elements/primaryButton.svelte";
  export let scoreHeaders, seedArray, totalScore, playerID;

  import { players, activePlayer } from "../stores";

  function scoreCallback(turn, newScore) {
    $players[playerID - 1].primary = $players[playerID - 1].primary.map(
      (currentScore, idx) =>
        turn === idx ? (newScore === currentScore ? 0 : newScore) : currentScore
    );
  }

  $: totalScore = $players[playerID - 1].primary.reduce((total, score) => {
    let newScore = total + score;
    return newScore >= 45 ? 45 : newScore;
  });
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
  .score-header {
    padding: 0.25rem;
  }
  .button-group {
    margin: 0px;
    display: flex;
    width: 35%;
  }
  .total-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px #334 solid;
    /* padding: 0.5rem; */
    color: #334;
  }
  @media only screen and (max-width: 795px) {
    .score-block {
      display: flex;
      flex-direction: column;
      margin: 1rem 0.25rem;
    }
    .score-header {
      border-bottom: none;
    }
    .button-group {
      width: 100%;
      height: 5rem;
      display: flex;
    }
    .total-container {
      margin: 1rem 0.25rem;
    }
    .total-container h3 {
      flex-basis: 50%;
    }
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
            currentValue={$players[playerID - 1].primary[idx]}
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
