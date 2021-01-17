<script>
  import SecondaryButton from "../elements/secondaryButton";
  // import TextInput from "./elements/textInput";
  import SecondarySelect from "../elements/secondarySelect";

  import { SecondariesList } from "../utilities/constantsList";

  export let scoreHeaders, seedArray, playerID;

  import { players, activePlayer } from "../stores";

  function scoreCallback(objective, newScore) {
    $players[playerID - 1].secondaries = $players[playerID - 1].secondaries.map(
      (currentScore, idx) =>
        objective === idx
          ? newScore === currentScore
            ? 0
            : newScore
          : currentScore
    );
  }

  $: totalScore = $players[playerID - 1].secondaries.reduce((total, score) => {
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
  .button-group {
    flex-basis: 45%;
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
  {#each scoreHeaders as scoreHeader, index}
    <div class="score-block">
      <!-- <TextInput label={scoreHeader} type="string" value={''} /> -->
      <!-- <SecondarySelect
        label={scoreHeader}
        options={SecondariesList}
        passedClasses="secondaries"
        {playerID}
        {index} /> -->
      <SecondarySelect
        label={scoreHeader}
        passedClasses="secondaries"
        {playerID}
        {index} />
      <div class="button-group">
        {#each seedArray as score}
          <SecondaryButton
            {index}
            currentValue={$players[playerID - 1].secondaries[index]}
            thisValue={score}
            scoreCallback={() => scoreCallback(index, score)} />
        {/each}
      </div>
    </div>
  {/each}

  <div class="total-container">
    <h3>Total Secondary Points</h3>
    <h1>{totalScore} / 45</h1>
  </div>
</div>
